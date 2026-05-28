import { PROJECTS } from '../../data/portfolio';
import { Icon } from '../ui/Icon';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function ProjectCard({ project, index }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`project-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.09}s` }}
    >
      <div className="project-thumb">
        <div
          className="project-thumb-bg"
          style={
            project.image
              ? {
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }
              : { background: project.gradient }
          }
        />
        <div className="project-thumb-mark">
          <Icon name="monitor" size={22} stroke="#fff" />
        </div>
        <div className="project-thumb-label">{project.label}</div>
      </div>

      <div className="project-body">
        <div className="project-cat">{project.cat}</div>
        <div className="project-name">{project.name}</div>
        <div className="project-desc">{project.desc}</div>

        <div className="project-footer">
          <div className="project-stacks">
            {project.stacks.map((s) => (
              <span key={s} className="project-stack-tag">{s}</span>
            ))}
          </div>
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Icon name="externalLink" size={12} />
                Visit
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link gh"
              >
                <Icon name="github" size={12} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="section section-warm">
      <div className={`section-header reveal${visible ? ' visible' : ''}`} ref={ref}>
        <span className="section-tag">Projects</span>
        <h2 className="section-title">Websites &amp; applications I&apos;ve built</h2>
        <p className="section-sub">
          Production web applications built for real businesses and communities — fully live and serving users.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
