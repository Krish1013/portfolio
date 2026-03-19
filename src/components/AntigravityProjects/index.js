import React from 'react';
import './index.css';

const AI_PROJECTS = [
  {
    id: 1,
    title: 'Coming Soon',
    description:
      'An AI-powered project is currently in development. This space will showcase cutting-edge automation, machine learning, or generative AI work.',
    tags: ['AI', 'Machine Learning', 'Python'],
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Automation Pipeline',
    description:
      'Exploring intelligent workflow automation using AI models — connecting APIs, scraping structured data, and building decision-making pipelines.',
    tags: ['Automation', 'LLM', 'APIs'],
    status: 'Planning',
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
