import { CLOUD_PROJECTS } from '../../data/portfolio';
import { Icon } from '../ui/Icon';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function CloudCard({ project, index }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`cloud-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.09}s` }}
    >
      <div className="cloud-card-icon">
        <Icon name={project.icon} size={18} stroke="var(--accent)" />
      </div>
      <div className="cloud-name">{project.name}</div>
      <div className="cloud-desc">{project.desc}</div>
      <div className="cloud-footer">
        <div className="cloud-badges">
          {project.badges.map((b) => (
            <span key={b} className="cloud-badge">{b}</span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cloud-gh"
        >
          <Icon name="github" size={12} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export function Cloud() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="cloud" className="section">
      <div className={`section-header reveal${visible ? ' visible' : ''}`} ref={ref}>
        <span className="section-tag">Cloud &amp; DevOps</span>
        <h2 className="section-title">Azure architecture projects</h2>
        <p className="section-sub">
          Hands-on infrastructure projects demonstrating real-world Azure and DevOps engineering — all published on GitHub.
        </p>
      </div>

      <div className="cloud-grid">
        {CLOUD_PROJECTS.map((project, i) => (
          <CloudCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
