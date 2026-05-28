import { EXPERIENCE } from '../../data/portfolio';
import { Icon } from '../ui/Icon';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function TimelineItem({ item, index }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={`timeline-item${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="timeline-dot">
        <Icon name={item.icon} size={16} stroke="var(--ink-muted)" />
      </div>
      <div className="timeline-card">
        <div className="timeline-header">
          <div className="timeline-role">{item.role}</div>
          <div className="timeline-date">{item.date}</div>
        </div>
        <div className="timeline-company">{item.company}</div>
        <ul className="timeline-bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="tech-tags">
          {item.tags.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="section">
      <div className={`section-header reveal${visible ? ' visible' : ''}`} ref={ref}>
        <span className="section-tag">Experience</span>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <p className="section-sub">
          Four roles across IT support, cloud DevOps, and enterprise software engineering.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={item.role} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
