import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/portfolio';
import { useActiveSection, scrollToSection } from '../../hooks/useScrollReveal';
import { Icon } from '../ui/Icon';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(['home', 'about', 'experience', 'projects', 'cloud', 'certs', 'contact']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(e, href) {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <>
      <nav id="nav" className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
          George<span>.</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.replace('#', '') ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
