import React from 'react';
import { Code2 } from 'lucide-react';
import type { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'zenithcart',
    title: 'ZenithCart',
    description: 'High-throughput, horizontally scalable e-commerce API built on a microservices architecture with JWT auth, Redis caching, and Celery async queues. Handles inventory, orders, and invoice generation at production scale.',
    role: 'Lead Backend Engineer',
    duration: 'Oct 2025 – Dec 2025',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'SQLAlchemy', 'Pydantic'],
    features: [
      'Stateless JWT authentication with Redis token-bucket rate limiting per user.',
      'Atomic checkout using SQLAlchemy session context managers preventing race conditions.',
      'Background invoice PDF compilation via Celery workers, keeping API response times under 120 ms.',
      'Indexed database schema reducing product search query time by 40 %.',
    ],
  },
  {
    id: 'pulseanalytics',
    title: 'PulseAnalytics',
    description: 'Full-stack predictive analytics dashboard. Ingests business telemetry via Flask, transforms data with Pandas pipelines, runs Scikit-learn churn prediction, and surfaces results through a responsive React chart interface.',
    role: 'Full-Stack Developer',
    duration: 'Aug 2025 – Sep 2025',
    techStack: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-Learn', 'joblib', 'SQLite', 'React'],
    features: [
      'Multi-threaded Flask server processing CSV telemetry uploads and JSON ingestion concurrently.',
      'Pandas pipeline performing imputation, normalisation, and rolling-window aggregations.',
      'Serialised Scikit-learn Random Forest model served via joblib for sub-50 ms inference.',
      'React dashboard rendering real-time metric charts and model confusion matrices on result delivery.',
    ],
  },
  {
    id: 'collabhub',
    title: 'CollabHub',
    description: 'Real-time Kanban board platform using Django Channels and WebSockets. Persistent connections sync board events across all connected clients in under 100 ms via Redis pub/sub channel layers.',
    role: 'WebSocket Architect',
    duration: 'May 2025 – Jul 2025',
    techStack: ['Python', 'Django', 'Django Channels', 'WebSockets', 'PostgreSQL', 'Redis', 'React', 'TypeScript'],
    features: [
      'Configured Django Channels ASGI handlers replacing WSGI for persistent WebSocket routing.',
      'Redis Channel Layers as the pub/sub broker connecting horizontally scaled container instances.',
      'JWT-verified WebSocket handshake consumer middleware rejecting unauthenticated connections.',
      'Incremental PostgreSQL card-position writes keeping board latency consistently under 100 ms.',
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <section>
      <div className="section-header">
        <p className="section-eyebrow">
          <Code2 size={14} />
          Projects
        </p>
        <h2 className="section-title">Featured systems</h2>
        <p className="section-subtitle">
          Industry-standard full-stack projects built with Python backends, engineered for production reliability.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, idx) => (
          <article key={p.id} className="project-card">
            <div className="project-card-top">
              <div>
                <p className="project-number">{String(idx + 1).padStart(2, '0')}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-role">{p.role}</p>
              </div>
              <p className="project-duration">{p.duration}</p>
            </div>

            <p className="project-description">{p.description}</p>

            <div className="tag-row">
              {p.techStack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>

            <p className="achievements-heading">Core achievements</p>
            <ul className="tl-bullet-list">
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
