import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

const NAV_ITEMS = [
  { id: 'home',       label: 'home' },
  { id: 'projects',   label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'education',  label: 'education' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => (
  <header className="header-nav">
    <div className="nav-inner">
      <button
        className="logo-btn"
        onClick={() => setView('home')}
        aria-label="Go to home"
      >
        Raja M
      </button>

      <nav aria-label="Primary">
        <ul className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id} className="nav-item">
              <button
                className={currentView === id ? 'active' : ''}
                onClick={() => setView(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="social-links">
        <a href="https://github.com/rajaraja1521" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/rajaraja1521" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:rajaraja1521@gmail.com" className="social-icon" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </header>
);
