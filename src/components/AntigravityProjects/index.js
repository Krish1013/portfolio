import React from 'react';
import './index.css';

const AI_PROJECTS = [
  {
    id: 1,
    title: 'Millets App',
    description:
      'A modern responsive web application built using Antigravity that promotes healthy millet-based diets. Includes clean UI, structured content display, and responsive layouts.',
    tags: ['React', 'Responsive Design', 'UI/UX', 'Antigravity'],
    status: 'Completed',
    liveLink: 'https://millet-food-delivery-app.vercel.app/',
    githubLink: 'https://github.com/Krish1013/milletFoodDeliveryApp',
  },
  {
    id: 2,
    title: 'Nexgile Assessment Project',
    description:
      'A structured frontend project built as part of an assessment, focusing on clean UI, component architecture, responsiveness, and functional implementation of multiple features.',
    tags: ['React', 'JavaScript', 'Frontend Architecture', 'Assessment'],
    status: 'Completed',
    liveLink: 'https://nexgile-assessment.vercel.app/login',
    githubLink: 'https://github.com/Krish1013/-NexgileAssessment',
  },
];

function AntigravityProjects() {
  return (
    <section className="section antigravity-section" id="ai-projects">
      <div className="container">
        <p className="section-label reveal">Experimental</p>
        <h2 className="section-title reveal reveal-delay-1">
          AI / <span>Antigravity</span><br />Projects
        </h2>
        <p className="antigravity-intro reveal reveal-delay-2">
          This section is dedicated to exploratory, AI-driven, and unconventional projects —
          things that push boundaries or break expected patterns.
        </p>

        <div className="ag-grid">
          {AI_PROJECTS.map((project, i) => (
            <div className={`ag-card reveal reveal-delay-${i + 1}`} key={project.id}>
              <div className="ag-card-top">
                <span className={`ag-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="ag-title">{project.title}</h3>
              <p className="ag-desc">{project.description}</p>
              <div className="ag-tags">
                {project.tags.map((tag) => (
                  <span className="ag-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="ag-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="ag-link" title="Live Demo">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="ag-link" title="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}

          <div className="ag-card ag-add-card reveal reveal-delay-3">
            <div className="ag-add-icon">+</div>
            <h3 className="ag-title">Your Next Project</h3>
            <p className="ag-desc">This section is built to scale — add new AI projects easily by updating the data array.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AntigravityProjects;
