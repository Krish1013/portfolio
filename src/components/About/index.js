import React from 'react';
import './index.css';

const FACTS = [
  { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana' },
  { icon: '🗣', label: 'Languages', value: 'English, Telugu, Hindi' },
  { icon: '🎓', label: 'Education', value: 'B.S. — IIT Madras' },
  { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
];

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting full-stack<br />
              <span>solutions</span> that scale
            </h2>
            <div className="about-bio">
              <p>
                I'm a Full Stack Developer with a passion for building end-to-end web applications
                — from designing clean, responsive UIs to architecting robust backend APIs. My
                foundation in Biological Sciences at IIT Madras trained me to think analytically,
                which now drives how I approach engineering problems.
              </p>
              <p>
                I enjoy turning complex requirements into simple, elegant solutions. Whether it's
                securing an authentication system, wiring up REST APIs, or crafting pixel-perfect
                interfaces, I bring care and craft to every layer of the stack.
              </p>
            </div>
          </div>

          <div className="about-right">
            {FACTS.map((fact, i) => (
              <div className={`fact-card reveal reveal-delay-${i + 1}`} key={fact.label}>
                <span className="fact-icon">{fact.icon}</span>
                <div>
                  <p className="fact-label">{fact.label}</p>
                  <p className="fact-value">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
