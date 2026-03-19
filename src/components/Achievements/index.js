import React from 'react';
import './index.css';

const ACHIEVEMENTS = [
  {
    title: 'Telangana Govt. Scholarship',
    subtitle: 'JEE 2017 — Laptop + Cash Prize',
    description:
      'Awarded a laptop and cash prize by the Government of Telangana for outstanding performance in JEE 2017, recognizing academic excellence and engineering aptitude.',
    icon: '🏆',
    year: '2017',
  },
];

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <p className="section-label reveal">Recognition</p>
        <h2 className="section-title reveal reveal-delay-1">
          Achievements &<br /><span>Awards</span>
        </h2>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <div className={`achievement-card reveal reveal-delay-${i + 1}`} key={item.title}>
              <div className="achievement-icon-wrap">
                <span className="achievement-icon">{item.icon}</span>
              </div>
              <div className="achievement-body">
                <div className="achievement-header">
                  <h3 className="achievement-title">{item.title}</h3>
                  <span className="achievement-year">{item.year}</span>
                </div>
                <p className="achievement-subtitle">{item.subtitle}</p>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
