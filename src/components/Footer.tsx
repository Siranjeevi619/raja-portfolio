import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p className="footer-copy">Raja M © {new Date().getFullYear()}</p>
      <div className="footer-socials">
        <a href="https://github.com/rajaraja1521" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <Github size={17} />
        </a>
        <a href="https://linkedin.com/in/rajaraja1521" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <Linkedin size={17} />
        </a>
        <a href="mailto:rajaraja1521@gmail.com" className="social-icon" aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </div>
  </footer>
);
