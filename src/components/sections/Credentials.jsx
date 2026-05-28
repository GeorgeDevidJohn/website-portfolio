import { CERTS } from '../../data/portfolio';
import { Icon } from '../ui/Icon';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Credentials() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="certs" className="section section-warm">
      <div className={`section-header reveal${visible ? ' visible' : ''}`} ref={ref}>
        <span className="section-tag">Credentials</span>
        <h2 className="section-title">Education &amp; Certifications</h2>
      </div>

      <div className={`certs-grid reveal${visible ? ' visible' : ''}`}>
        {CERTS.map((cert) => (
          <div key={cert.name} className="cert-card">
            <div className="cert-icon">
              <Icon name={cert.icon} size={18} stroke="var(--gold)" />
            </div>
            <div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
