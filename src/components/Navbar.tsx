import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const NAV_ITEMS = [
  { id: 'home',       label: 'Home' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Track scroll for subtle nav shadow
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo — larger, bolder */}
        <button
          className="logo-btn"
          onClick={() => scrollTo('home')}
          aria-label="Scroll to top"
        >
          Raja M
        </button>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="nav-desktop">
          <ul className="nav-links">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <button
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials + hamburger */}
        <div className="nav-right">
          <div className="social-links nav-socials">
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

          {/* Hamburger (mobile) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="nav-mobile" aria-label="Mobile navigation">
          <ul>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={activeSection === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          {/* Social links inside mobile drawer */}
          <div className="nav-mobile-socials">
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
        </nav>
      )}
    </header>
  );
};
