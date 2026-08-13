import { ArrowUp, HeartHandshake } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <div className="footer-mark"><HeartHandshake aria-hidden="true" /></div>
          <p className="footer-statement">There is more life beyond this moment.</p>
        </div>
        <a className="back-to-top" href="#top">
          Back to top <ArrowUp aria-hidden="true" size={18} />
        </a>
      </div>
      <div className="container footer-bottom">
        <a className="brand brand-footer" href="#top">
          <span className="brand-name">Speak. Seek. <em>Heal.</em></span>
        </a>
        <p>Awareness, direction, and a gentler first step.</p>
        <div className="footer-links">
          <a href="https://mentalhealthph.org/help/" target="_blank" rel="noreferrer">
            Support directory
          </a>
          <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noreferrer">
            WHO mental health
          </a>
        </div>
      </div>
    </footer>
  );
}
