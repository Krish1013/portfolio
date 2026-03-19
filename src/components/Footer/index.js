import React from 'react';
import './index.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Krish1013', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krishna-murthy-durgam-544069213/', icon: 'LI' },
  { label: 'Email', href: 'mailto:krishnadurgam04@gmail.com', icon: '✉' },
];

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">DKM<span>.</span></p>
            <p className="footer-tagline">
              Full Stack Developer based in<br />
              Hyderabad, Telangana.
            </p>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-btn"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-nav">
            <p className="footer-nav-title">Navigation</p>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-status">
            <p className="footer-nav-title">Status</p>
            <div className="status-badge">
              <span className="status-dot" />
              Available for work
            </div>
            <p className="footer-status-text">
              Open to full-stack developer roles,<br />
              internships &amp; freelance projects.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Durgam Krishna Murthy. Built with React.js.
          </p>
          <p className="footer-made">
            Designed &amp; developed with care ♥
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
