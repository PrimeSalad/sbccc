import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { label: 'Check in', href: '#check-in' },
  { label: 'Find support', href: '#support' },
  { label: 'Learn', href: '#learn' },
  { label: 'Daily care', href: '#daily-care' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="crisis-bar">
        <p>
          In immediate danger? <strong>Help is available now.</strong>
        </p>
        <a href="tel:911" aria-label="Call the Philippine national emergency hotline at 911">
          <Phone aria-hidden="true" size={16} /> Call 911
        </a>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Speak Seek Heal home">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">
              Speak. Seek. <em>Heal.</em>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="button button-small header-cta" href="#support">
            Get support
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            <div className="container">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a className="button" href="#support" onClick={() => setMenuOpen(false)}>
                Get support
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
