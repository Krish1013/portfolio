import React from 'react';
import './index.css';

const EXPERIENCES = [
  {
    role: 'Volunteer Organizer',
    org: 'Saarang — IIT Madras Cultural Fest',
    period: '2016',
    type: 'Volunteer',
    highlights: [
      'Managed logistics and coordination for 10+ events across the cultural fest',
      'Engaged and facilitated 550+ participants over the course of the event',
      'Coordinated with cross-functional teams to ensure seamless event execution',
      'Developed strong communication, leadership, and time-management skills',
    ],
    icon: '🎭',
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <p className="section-label reveal">Experience</p>
        <h2 className="section-title reveal reveal-delay-1">
          Roles &<br /><span>Responsibilities</span>
        </h2>

        <div className="exp-list">
          {EXPERIENCES.map((exp, i) => (
            <div className={`exp-card reveal reveal-delay-${i + 1}`} key={exp.org}>
              <div className="exp-left">
                <div className="exp-icon">{exp.icon}</div>
                <div className="exp-meta">
                  <span className="exp-type">{exp.type}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
              </div>

              <div className="exp-body">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-org">{exp.org}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="exp-cta reveal reveal-delay-2">
          <div className="exp-cta-inner">
            <span className="exp-cta-icon">💼</span>
            <div>
              <p className="exp-cta-title">Looking for opportunities</p>
              <p className="exp-cta-text">
                I'm actively seeking full-stack developer roles (fresher level). Open to remote, hybrid, and on-site positions in Hyderabad and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
