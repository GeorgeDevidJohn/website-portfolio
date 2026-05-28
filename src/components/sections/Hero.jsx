import { HERO, CONTACT } from '../../data/portfolio';
import { scrollToSection } from '../../hooks/useScrollReveal';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-tag">
          <div className="hero-tag-dot" />
          {HERO.tag}
        </div>

        <h1 className="hero-name">
          {HERO.name[0]}
          <br />
          <span className="accent">{HERO.name[1]}</span>
        </h1>

        <p className="hero-title">
          <strong>{HERO.title.split('·')[0].trim()}</strong>
          {' · '}
          {HERO.title.split('·').slice(1).join('·')}
          <br />
          {HERO.location}
        </p>

        <p className="hero-desc">{HERO.description}</p>

        <div className="hero-actions">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
          >
            View My Work
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn-secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          {HERO.stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
