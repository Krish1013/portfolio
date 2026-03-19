import React from 'react';
import './index.css';

const EDUCATION = [
  {
    degree: 'B.S. Biological Sciences',
    institution: 'IIT Madras',
    year: '2023',
    detail: 'Indian Institute of Technology Madras — one of India\'s premier research institutions.',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'TSWR Jr College',
    year: '88.5%',
    detail: 'Telangana Social Welfare Residential Junior College — strong foundation in Mathematics & Science.',
    icon: '📚',
  },
  {
    degree: 'Secondary School (SSC)',
    institution: 'ZPHS',
    year: '9.0 GPA',
    detail: 'Zilla Parishad High School — consistently top performer with distinction.',
    icon: '🏫',
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <p className="section-label reveal">Education</p>
        <h2 className="section-title reveal reveal-delay-1">
          Academic<br /><span>background</span>
        </h2>

        <div className="edu-timeline">
          {EDUCATION.map((edu, i) => (
            <div className={`edu-item reveal reveal-delay-${i + 1}`} key={edu.institution}>
              <div className="edu-line">
                <div className="edu-dot">{edu.icon}</div>
                {i < EDUCATION.length - 1 && <div className="edu-connector" />}
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <p className="edu-detail">{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
