import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Github, Linkedin } from "./Icons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailtoLink = `mailto:rajaraja1521@gmail.com?subject=Portfolio Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section>
      <div className="section-header">
        <p className="section-eyebrow">
          <Mail size={14} />
          Contact
        </p>
        <h2 className="section-title">Let's build something together</h2>
        <p className="section-subtitle">
          Open to full-time roles, internships, and freelance collaborations.
          Drop me a message and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-layout">
        {/* ── Info column ── */}
        <div className="contact-info">
          <div className="contact-info-card">
            <h3 className="contact-info-heading">Get in touch</h3>
            <p className="contact-info-body">
              I'm currently available for new opportunities. Whether you have a
              project in mind, want to discuss a role, or just want to say hello
              — my inbox is always open.
            </p>

            <ul className="contact-details">
              <li>
                <span className="contact-detail-icon">
                  <Mail size={16} />
                </span>
                <a
                  href="mailto:rajaraja1521@gmail.com"
                  className="contact-detail-link"
                >
                  rajaraja1521@gmail.com
                </a>
              </li>
              <li>
                <span className="contact-detail-icon">
                  <MapPin size={16} />
                </span>
                <span>Tamil Nadu, India</span>
              </li>
              <li>
                <span className="contact-detail-icon">
                  <Phone size={16} />
                </span>
                <a href="tel:+91-XXXXXXXXXX" className="contact-detail-link">
                  Available on request
                </a>
              </li>
            </ul>

            <div className="contact-socials">
              <a
                href="https://github.com/rajaraja1521"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rajaraja1521"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-availability">
            <span className="availability-dot" />
            <span>Available for opportunities · Chennai / Remote</span>
          </div>
        </div>

        {/* ── Form column ── */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name" className="form-label">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Raja M"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email" className="form-label">
                Email address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="hello@company.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="form-textarea"
              placeholder="Hi Raja, I'd love to discuss..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary contact-submit">
            {sent ? (
              <>✓ Opening your mail client</>
            ) : (
              <>
                <Send size={15} />
                Send message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
