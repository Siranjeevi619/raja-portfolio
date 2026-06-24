import React from 'react';
import { Award } from 'lucide-react';
import type { SkillCategory } from '../types';

const CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    skills: ['React JS', 'Node JS', 'FastAPI', 'Django', 'Flask', 'SQLAlchemy', 'Pandas', 'NumPy'],
  },
  {
    id: 'concepts',
    name: 'Core CS Concepts',
    skills: ['Object-Oriented Programming', 'DBMS', 'Data Structures & Algorithms', 'REST API Design', 'Relational DB Design'],
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    skills: ['Git / GitHub', 'Docker', 'Postman', 'VS Code', 'MySQL Workbench', 'PostgreSQL', 'Redis', 'Celery'],
  },
];

export const Skills: React.FC = () => (
  <section>
    <div className="section-header">
      <p className="section-eyebrow">
        <Award size={14} />
        Technical Skills
      </p>
      <h2 className="section-title">A full-stack toolkit</h2>
      <p className="section-subtitle">
        Proficiencies spanning backend services, database engineering, data science, and modern frontend systems.
      </p>
    </div>

    <div className="skills-grid">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="skill-category-card">
          <p className="skill-category-label">{cat.name}</p>
          <div className="skill-tags">
            {cat.skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
