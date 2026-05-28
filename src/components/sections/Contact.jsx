import { CONTACT } from '../../data/portfolio';
import { Icon } from '../ui/Icon';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const LINKS = [
  { href: `mailto:${CONTACT.email}`, icon: 'mail', label: CONTACT.email },
  { href: `tel:${CONTACT.phone}`, icon: 'phone', label: CONTACT.phone },
  { href: CONTACT.website, icon: 'globe', label: 'Portfolio Website', external: true },
  { href: CONTACT.github, icon: 'github', label: 'GitHub', external: true },
  { href: CONTACT.linkedin, icon: 'linkedin', label: 'LinkedIn', external: true },
];

export function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="section contact-section">
      <div className={`reveal${visible ? ' visible' : ''}`} ref={ref}>
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Let&apos;s work together</h2>
        <p className="section-sub">
          Open to IT support roles, cloud engineering positions, and freelance web development projects.
        </p>
      </div>

      <div className="contact-links">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="contact-link"
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon name={link.icon} size={16} />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div>George Devid John &nbsp;&middot;&nbsp; Hamilton, Ontario, Canada</div>
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  );
}
