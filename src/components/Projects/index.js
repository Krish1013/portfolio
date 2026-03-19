import React, { useState, useEffect } from 'react';
import './index.css';

const PROJECTS = [
  {
    id: 1,
    title: 'E-Bank Authentication System',
    description:
      'This project demonstrates implementation of frontend authentication flow using JWT-based login and protected routing in React. It simulates secure login functionality with token-based route protection.',
    tech: ['React (Class & Functional Components)', 'React Router', 'JWT (token handling)', 'js-cookie (token storage)', 'REST API integration'],
    live: '#',
    github: 'https://github.com/durgamkrishnamurthy',
    tag: 'Frontend',
  },
  {
    id: 2,
    title: 'MyTasks App',
    description:
      'A full-featured task management application built with React. Features real-time state management, API integration, filtering, and a clean minimal UI with drag-to-organize.',
    tech: ['React.js', 'REST API', 'CSS', 'JavaScript'],
    live: '#',
    github: 'https://github.com/durgamkrishnamurthy',
    tag: 'Frontend',
  },
  {
    id: 3,
    title: 'Rock Paper Scissors Game',
    description:
      'An interactive browser-based game with live score tracking, animated transitions, and dynamic UI state updates. Responsive across all screen sizes.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    live: '#',
    github: 'https://github.com/durgamkrishnamurthy',
    tag: 'Frontend',
  },
  {
    id: 4,
    title: 'Insta Mini Project',
    description:
      'An Instagram-inspired UI clone powered by a public API. Features dynamic post rendering, story rings, responsive grid layout, and real-time like interactions.',
    tech: ['React.js', 'API', 'CSS', 'Responsive Design'],
    live: '#',
    github: 'https://github.com/durgamkrishnamurthy',
    tag: 'Full Stack',
  },
];

function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...new Set(PROJECTS.map((p) => p.tag))];
  const filtered = activeTag === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === activeTag);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.projects-grid .reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <p className="section-label reveal">Projects</p>
        <div className="projects-header reveal reveal-delay-1">
          <h2 className="section-title">
            Things I've<br /><span>built</span>
          </h2>
          <div className="project-filters">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div className={`project-card reveal reveal-delay-${(i % 3) + 1}`} key={project.id}>
              <div className="project-card-top">
                <span className="project-tag">{project.tag}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
