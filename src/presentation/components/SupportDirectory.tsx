import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { SUPPORT_LINKS } from '../../application/content/siteContent';

export function SupportDirectory() {
  return (
    <section className="section support-section" id="support" aria-labelledby="support-title">
      <div className="container">
        <div className="support-heading">
          <div>
            <p className="eyebrow">Support, within reach</p>
            <h2 id="support-title">You deserve a real person on the other end.</h2>
          </div>
          <p>
            Calling can feel like a lot. You can start with: “I’m having a hard time and
            I’m not sure what I need.”
          </p>
        </div>

        <div className="support-grid">
          {SUPPORT_LINKS.map((support) => {
            const isPhone = support.href.startsWith('tel:');
            return (
              <article className={`support-card support-card-${support.tone}`} key={support.id}>
                <span className="support-eyebrow">{support.eyebrow}</span>
                <h3>{support.name}</h3>
                <p>{support.description}</p>
                <div className="support-meta">
                  {support.id === 'ncmh' ? (
                    <Clock3 aria-hidden="true" size={17} />
                  ) : (
                    <MapPin aria-hidden="true" size={17} />
                  )}
                  <span>{support.availability}</span>
                </div>
                <div className="support-actions">
                  <a
                    className="support-primary"
                    href={support.href}
                    target={isPhone ? undefined : '_blank'}
                    rel={isPhone ? undefined : 'noreferrer'}
                  >
                    {isPhone ? (
                      <Phone aria-hidden="true" size={18} />
                    ) : (
                      <ArrowUpRight aria-hidden="true" size={18} />
                    )}
                    {support.actionLabel}
                  </a>
                  {support.secondaryAction && (
                    <a
                      className="support-secondary"
                      href={support.secondaryAction.href}
                      target={support.secondaryAction.href.startsWith('http') ? '_blank' : undefined}
                      rel={support.secondaryAction.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {support.secondaryAction.label}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="support-disclaimer">
          Speak. Seek. Heal. is an information resource, not a crisis service or a
          substitute for professional diagnosis or treatment.
        </p>
      </div>
    </section>
  );
}
