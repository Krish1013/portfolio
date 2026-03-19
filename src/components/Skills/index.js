import React, { useState } from 'react';
import './index.css';

const SKILLS = [
  {
    category: 'Languages',
    icon: '{ }',
    color: 'blue',
    items: ['JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '⬡',
    color: 'coral',
    items: ['HTML5', 'CSS3', 'React.js', 'Responsive Design'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: 'teal',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Database',
    icon: '◎',
    color: 'green',
    items: ['MongoDB'],
  },
  {
    category: 'Tools',
    icon: '◈',
    color: 'purple',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
];

function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-title reveal reveal-delay-1">
          What I work<br /><span>with</span>
        </h2>
        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <div
              className={`skill-card reveal reveal-delay-${(i % 4) + 1} color-${group.color} ${hovered === i ? 'hovered' : ''}`}
              key={group.category}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
