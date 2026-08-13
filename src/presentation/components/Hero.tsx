import { ArrowDown, ArrowUpRight, MessageCircleMore } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Mental health, without whispering</p>
          <h1 id="hero-title">
            Make room for what you’re <em>carrying.</em>
          </h1>
          <p className="hero-intro">
            You don’t have to wait until it becomes unbearable. Start with one honest
            check-in, one conversation, or one call.
          </p>
          <div className="hero-actions">
            <a className="button" href="#support">
              Find someone to talk to <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a className="text-link" href="#check-in">
              Take a 60-second check-in <ArrowDown aria-hidden="true" size={17} />
            </a>
          </div>
          <p className="privacy-note">
            No account. No judgment. Your check-in stays on this device.
          </p>
        </div>

        <div className="hero-art" aria-label="A visual reminder that every feeling has space here">
          <div className="hero-card hero-card-main">
            <MessageCircleMore aria-hidden="true" size={34} strokeWidth={1.6} />
            <p>There is no wrong way to ask for help.</p>
          </div>
          <div className="hero-card hero-card-note">
            <span>For today</span>
            <strong>One small step is still a step.</strong>
          </div>
          <svg className="hero-line" viewBox="0 0 420 420" aria-hidden="true">
            <path d="M35 335c21-98 79-158 168-177 74-16 135-50 177-114" />
            <circle cx="34" cy="337" r="8" />
            <circle cx="380" cy="44" r="8" />
          </svg>
          <span className="hero-shape hero-shape-one" aria-hidden="true" />
          <span className="hero-shape hero-shape-two" aria-hidden="true" />
        </div>
      </div>
      <div className="container reassurance-row" aria-label="What you can expect">
        <span>Human-first support</span>
        <span>Practical next steps</span>
        <span>Trusted contact routes</span>
      </div>
    </section>
  );
}
