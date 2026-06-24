import React from 'react';
import { BookOpen, Calendar, MapPin, Award } from 'lucide-react';
import type { EducationItem } from '../types';

const EDUCATION: EducationItem[] = [
  {
    id: 'college',
    degree: 'B.Tech in Information Technology',
    institution: 'PT Lee Chengalvaraya Naicker College of Engineering and Technology',
    location: 'Kanchipuram, Tamil Nadu, India',
    duration: '2021 – 2025',
    grade: 'First Class',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC) — 12th Grade',
    institution: 'SRM Higher Secondary School',
    location: 'Sivanaragaram, India',
    duration: '2019 – 2021',
    grade: '81.0 %',
  },
];

export const Education: React.FC = () => (
  <section>
    <div className="section-header">
      <p className="section-eyebrow">
        <BookOpen size={14} />
        Education
      </p>
      <h2 className="section-title">Academic background</h2>
      <p className="section-subtitle">
        Formal qualifications that built my engineering fundamentals.
      </p>
    </div>

    <div className="timeline">
      {EDUCATION.map((edu) => (
        <div key={edu.id} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-card-top">
              <div>
                <h3 className="tl-role">{edu.degree}</h3>
                <div className="tl-meta">
                  <span className="tl-company">{edu.institution}</span>
                </div>
              </div>
              <div className="tl-timing">
                <span className="tl-date"><Calendar size={13} />{edu.duration}</span>
                <span className="tl-location"><MapPin size={13} />{edu.location}</span>
              </div>
            </div>
            {edu.grade && (
              <p className="tl-grade">
                <Award size={14} style={{ color: 'var(--color-accent)' }} />
                Performance: <strong>{edu.grade}</strong>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);
