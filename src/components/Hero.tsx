import React from 'react';
import { Download, Code, Database, Terminal, ShieldAlert } from 'lucide-react';

interface HeroProps {
  setView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => (
  <section>
    {/* ── Hero ── */}
    <div className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Available for opportunities
        </p>

        <h1 className="hero-name">Raja M</h1>

        <p className="hero-bio">
          <strong>B.Tech Information Technology Graduate</strong> and aspiring Full-Stack
          Software Engineer. I design reliable backends, structure databases, and build
          responsive interfaces using <strong>Python</strong>, <strong>Java</strong>,{' '}
          <strong>SQL</strong>, and <strong>React&nbsp;+&nbsp;TypeScript</strong>.
        </p>

        <div className="hero-ctas">
          <a href="/Raja_M_Resume.pdf" download="Raja_M_Resume.pdf" className="btn-primary">
            <Download size={16} />
            Download CV
          </a>
          <button className="btn-ghost" onClick={() => setView('experience')}>
            See experience →
          </button>
        </div>
      </div>

      <div className="hero-avatar">
        <div className="avatar-ring">
          <img
            src="/profile.jpg"
            alt="Raja M"
            className="avatar-img"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80';
            }}
          />
        </div>
      </div>
    </div>

    {/* ── Foundation Cards ── */}
    <div style={{ marginTop: 'var(--space-32)' }}>
      <div className="section-header">
        <p className="section-eyebrow">
          Core Stack
        </p>
        <h2 className="section-title">Built on solid foundations</h2>
        <p className="section-subtitle">
          Key ecosystems and paradigms I rely on when engineering production software.
        </p>
      </div>

      <div className="highlights-grid">
        {[
          {
            icon: <Code size={22} />,
            title: 'Python Ecosystem',
            desc: 'Microservices, REST APIs, and automation pipelines using FastAPI and Django.',
            view: 'projects',
          },
          {
            icon: <Terminal size={22} />,
            title: 'Java & OOP',
            desc: 'Applying object-oriented design patterns, core DSA, and clean architecture.',
            view: 'projects',
          },
          {
            icon: <Database size={22} />,
            title: 'DBMS & SQL',
            desc: 'Schema design, transaction safety, and query optimisation with MySQL and PostgreSQL.',
            view: 'projects',
          },
          {
            icon: <ShieldAlert size={22} />,
            title: 'Full-Stack Web',
            desc: 'Assembling UIs with React, TypeScript, and modern responsive styling systems.',
            view: 'projects',
          },
        ].map(({ icon, title, desc, view }) => (
          <div key={title} className="highlight-card" onClick={() => setView(view)}>
            <div className="highlight-icon">{icon}</div>
            <div>
              <h3 className="highlight-title">{title}</h3>
              <p className="highlight-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
