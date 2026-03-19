import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

const CONTACT_INFO = [
  {
    icon: '✉',
    label: 'Email',
    value: 'krishnadurgam04@gmail.com',
    href: 'mailto:krishnadurgam04@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 83091 86462',
    href: 'tel:+910000000000',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'github.com/Krish1013',
    href: 'https://github.com/Krish1013',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/krishna-murthy-durgam',
    href: 'https://www.linkedin.com/in/krishna-murthy-durgam-544069213/',
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [sendError, setSendError] = useState('');

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    return `mailto:krishnadurgam04@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');

    // If EmailJS is not configured, fall back to opening the user's mail client.
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSendError(
        'Email sending is not configured yet. Opening your email client as a fallback.'
      );
      window.location.href = buildMailtoLink();
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'krishnadurgam04@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setSendError('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="section-label reveal">Contact</p>
        <h2 className="section-title reveal reveal-delay-1">
          Let's work<br /><span>together</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-left reveal reveal-delay-1">
            <p className="contact-intro">
              I'm currently open to full-stack developer opportunities, freelance projects,
              and collaborations. Whether you have a project in mind or just want to say hello
              — my inbox is always open.
            </p>

            <div className="contact-info-list">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-info-item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className="contact-info-icon">{item.icon}</span>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right reveal reveal-delay-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a message</h3>

              {submitted && (
                <div className="form-success">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              {sendError && (
                <div className="form-error" role="alert">
                  {sendError}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Krishna"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
