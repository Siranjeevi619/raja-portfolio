import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import type { ExperienceItem } from '../types';

const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'paragon',
    role: 'Software Engineer Intern',
    company: 'Paragon Dynamics Infosis Pvt Ltd',
    location: 'Guindy, Chennai, India',
    duration: 'Jul 2025',
    contractType: 'Internship',
    details: [
      'Developed and integrated frontend and backend features for real-time applications using Java and modern web technologies.',
      'Collaborated on database schema design and query optimisations using SQL engines to improve lookup performance.',
      'Conducted component-level testing and bug resolution, ensuring reliable integration between system layers.',
      'Applied Object-Oriented design patterns and contributed to Agile sprint workflows, code reviews, and documentation.',
    ],
  },
];

export const Experience: React.FC = () => (
  <section>
    <div className="section-header">
      <p className="section-eyebrow">
        <Briefcase size={14} />
        Experience
      </p>
      <h2 className="section-title">Professional history</h2>
      <p className="section-subtitle">
        Roles where I have shipped real-world software, collaborated with engineers, and grown my craft.
      </p>
    </div>

    <div className="timeline">
      {EXPERIENCE.map((exp) => (
        <div key={exp.id} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-card-top">
              <div>
                <h3 className="tl-role">{exp.role}</h3>
                <div className="tl-meta">
                  <span className="tl-company">{exp.company}</span>
                  <span className="badge">{exp.contractType}</span>
                </div>
              </div>
              <div className="tl-timing">
                <span className="tl-date"><Calendar size={13} />{exp.duration}</span>
                <span className="tl-location"><MapPin size={13} />{exp.location}</span>
              </div>
            </div>
            <ul className="tl-bullet-list">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);
