import Head from 'next/head';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us – Diablo Huma Studios</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Get in touch with Diablo Huma Studios for courses, video production, or game inquiries." />
      </Head>

      <section className="contact-hero-section">
        <h1>GET IN TOUCH</h1>
        <p>Have a question or want to work together? We'd love to hear from you!</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Honeypot field - hidden from users, but bots will fill it */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="honeypot"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="form-input"
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="form-input"
                  maxLength={150}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="form-textarea"
                  minLength={10}
                  maxLength={1000}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <h2>Other Ways to Reach Us</h2>

            <div className="contact-info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@diablohumastudio.com">
                  info@diablohumastudio.com
                </a>
              </p>
            </div>

            <div className="contact-info-item">
              <h3>Response Time</h3>
              <p>We typically respond within 24-48 hours during business days.</p>
            </div>

            <div className="contact-info-item">
              <h3>Services</h3>
              <ul>
                <li>Game Development</li>
                <li>Video Production</li>
                <li>Online Courses</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div className="contact-info-item">
              <h3>Follow Us</h3>
              <p>Stay updated with our latest projects and releases on social media.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
