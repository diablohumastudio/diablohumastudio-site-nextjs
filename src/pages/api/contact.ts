import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { DEFAULT_LOCALE, isLocale } from '../../i18n/locales';
import { contactApiDict } from '../../i18n/pages/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (resets on server restart)
// For production, consider using Redis or a database
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = 5; // 5 requests
  const windowMs = 60 * 60 * 1000; // per hour

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string'
    ? forwarded.split(',')[0]
    : req.socket.remoteAddress || 'unknown';
  return ip;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000); // Limit to 1000 characters
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Errors go back to the form in the sender's language.
  const locale = isLocale(req.body?.locale) ? req.body.locale : DEFAULT_LOCALE;
  const t = contactApiDict[locale];

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: t.methodNotAllowed });
  }

  // Check origin (only allow requests from your domain in production)
  const origin = req.headers.origin;
  const allowedOrigins = [
    'http://localhost:3000',
    'https://diablohumastudio.com',
    'https://www.diablohumastudio.com',
    'https://updates.diablohumastudio.com',
    // Add your Vercel preview URLs if needed
  ];

  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: t.forbiddenOrigin });
  }

  // Rate limiting
  const clientIp = getClientIp(req);
  if (!rateLimit(clientIp)) {
    return res.status(429).json({ error: t.tooManyRequests });
  }

  try {
    const { name, email, subject, message, website } = req.body;

    // Honeypot check - if 'website' field is filled, it's a bot
    if (website) {
      return res.status(400).json({ error: t.invalidSubmission });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: t.allFieldsRequired });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({ error: t.invalidEmail });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Check for minimum message length (prevent spam)
    if (sanitizedMessage.length < 10) {
      return res.status(400).json({ error: t.messageTooShort });
    }

    // Send email using Resend
    // TODO: Change to custom domain once verified in Resend
    const data = await resend.emails.send({
      from: 'DHS Site Contact Form <info@diablohumastudio.com>',
      to: ['fernandobarahonad@diablohumastudio.com'],
      subject: `Contact Form: ${sanitizedSubject}`,
      replyTo: sanitizedEmail,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #5A2703 0%, #e7945e 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 20px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #5A2703;
              }
              .message-box {
                background: white;
                padding: 15px;
                border-left: 4px solid #e7945e;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">From:</span> ${sanitizedName}
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a>
                </div>
                <div class="field">
                  <span class="label">Subject:</span> ${sanitizedSubject}
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    ${sanitizedMessage.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <div class="field" style="margin-top: 20px; font-size: 12px; color: #666;">
                  <span class="label">Language:</span> ${locale}<br>
                  <span class="label">IP Address:</span> ${clientIp}<br>
                  <span class="label">Timestamp:</span> ${new Date().toLocaleString()}
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      emailId: data.data?.id
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message, error.name);
    return res.status(500).json({
      error: t.sendFailed,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
