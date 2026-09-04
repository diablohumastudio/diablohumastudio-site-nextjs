import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, FormEvent } from 'react';
import { contactDict } from '../i18n/pages/contact';
import { DEFAULT_LOCALE, isLocale } from '../i18n/locales';
import { useT } from '../i18n/useT';

export default function Contact() {
  const t = useT(contactDict);
  const { locale } = useRouter();

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
        // The locale lets the API answer (and tag the email) in the sender's language.
        body: JSON.stringify({ ...formData, locale: isLocale(locale) ? locale : DEFAULT_LOCALE }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(t.successMessage);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || t.genericError);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={t.description} />
      </Head>

      <section className="contact-hero-section">
        <h1>{t.heroHeading}</h1>
        <p>{t.heroText}</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h2>{t.formHeading}</h2>
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
                <label htmlFor="name">{t.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.namePlaceholder}
                  className="form-input"
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.emailPlaceholder}
                  className="form-input"
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.subjectLabel}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.subjectPlaceholder}
                  className="form-input"
                  maxLength={150}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t.messagePlaceholder}
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
                {isSubmitting ? t.sending : t.send}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <h2>{t.otherWaysHeading}</h2>

            <div className="contact-info-item">
              <h3>{t.emailHeading}</h3>
              <p>
                <a href="mailto:info@diablohumastudio.com">
                  info@diablohumastudio.com
                </a>
              </p>
            </div>

            <div className="contact-info-item">
              <h3>{t.responseTimeHeading}</h3>
              <p>{t.responseTimeText}</p>
            </div>

            <div className="contact-info-item">
              <h3>{t.servicesHeading}</h3>
              <ul>
                <li>{t.serviceGames}</li>
                <li>{t.serviceVideo}</li>
                <li>{t.serviceCourses}</li>
                <li>{t.serviceConsulting}</li>
              </ul>
            </div>

            <div className="contact-info-item">
              <h3>{t.followHeading}</h3>
              <p>{t.followText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
