import { SKILLS, HIGHLIGHTS } from '../../data/portfolio';
import { Icon } from '../ui/Icon';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function About() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();
  const { ref: textRef, visible: textVisible } = useScrollReveal();
  const { ref: highlightsRef, visible: highlightsVisible } = useScrollReveal();

  return (
    <section id="about" className="section section-warm">
      <div className={`section-header reveal${headerVisible ? ' visible' : ''}`} ref={headerRef}>
        <span className="section-tag">About</span>
        <h2 className="section-title">The person behind the code</h2>
        <p className="section-sub">
          IT professional rooted in practical problem-solving, cloud architecture, and crafting seamless user experiences.
        </p>
      </div>

      <div className="about-grid">
        <div className={`about-text reveal${textVisible ? ' visible' : ''}`} ref={textRef}>
          <p>
            I&apos;m George Devid John, a Mississauga-based IT Support and Systems professional with a
            passion for building resilient infrastructure and polished digital products. My work spans
            enterprise IT support across the Apple and Microsoft ecosystems, cloud engineering on Azure,
            and full-stack web development.
          </p>
          <p>
            Outside corporate roles, I design and maintain production websites for real businesses and
            communities — from a church platform with AWS media hosting to a mental health clinic to a
            café in Ontario.
          </p>
          <div className="skills-cloud">
            {SKILLS.map((s) => (
              <span key={s.label} className={`skill-chip${s.featured ? ' featured' : ''}`}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className={`about-highlights reveal${highlightsVisible ? ' visible' : ''}`} ref={highlightsRef}>
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="highlight-item">
              <div className="highlight-icon">
                <Icon name={h.icon} size={16} stroke="var(--accent)" />
              </div>
              <div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-sub">{h.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
