import React, { useState, useEffect } from 'react';
import './index.css';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className={`hero-text ${loaded ? 'loaded' : ''}`}>
          <p className="hero-eyebrow">Full Stack Developer</p>
          <h1 className="hero-name">
            Durgam<br />
            <span>Krishna</span><br />
            Murthy
          </h1>
          <p className="hero-tagline">
            Building digital experiences that are fast,<br />
            accessible, and beautiful — from DB to deploy.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'}); }}>
              View Projects →
            </a>
            <a
              href="/latest_resume_.pdf"
              className="btn btn-outline"
              download
            >
              ↓ Download Resume
            </a>
          </div>
        </div>

        <div className={`hero-badge-group ${loaded ? 'loaded' : ''}`}>
          <div className="hero-badge">
            <span className="badge-num">10+</span>
            <span className="badge-label">Projects</span>
          </div>
          <div className="hero-badge">
            <span className="badge-num">10+</span>
            <span className="badge-label">Technologies</span>
          </div>
          <div className="hero-badge accent-badge">
            <span className="badge-num">Open</span>
            <span className="badge-label">To Work</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
