import { useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#hero" className="header-logo" onClick={handleNavClick}>
        CV
      </a>

      <button
        type="button"
        className="header-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span className="header-menu-icon" data-open={menuOpen} />
        <span className="header-menu-icon" data-open={menuOpen} />
        <span className="header-menu-icon" data-open={menuOpen} />
      </button>

      <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="header-nav-link"
            onClick={handleNavClick}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
