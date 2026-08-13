import { Apple, ArrowUpRight, Check, Dumbbell, Footprints, Sprout } from 'lucide-react';

const appStoreUrl = 'https://apps.apple.com/ph/app/unchainly/id6794420100';

export function AppPromo() {
  return (
    <section className="section app-promo" id="daily-care" aria-labelledby="app-title">
      <div className="container app-promo-grid">
        <div className="phone-scene" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <div className="phone-frame">
            <div className="phone-island" />
            <div className="phone-screen">
              <div className="phone-header">
                <span>Today</span>
                <strong>Keep it gentle.</strong>
              </div>
              <div className="phone-ring">
                <div>
                  <strong>2</strong>
                  <small>small wins</small>
                </div>
              </div>
              <div className="phone-habits">
                <div className="done">
                  <span><Check size={14} /></span> Morning walk
                </div>
                <div className="done">
                  <span><Check size={14} /></span> Water break
                </div>
                <div>
                  <span /> Wind down
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-copy">
          <p className="eyebrow eyebrow-light">Daily care can travel with you</p>
          <h2 id="app-title">Turn good intentions into kinder routines.</h2>
          <p>
            Unchainly is a separate habit and activity tracker for building routines,
            logging movement, and seeing weekly progress—all from your phone.
          </p>
          <div className="app-feature-list">
            <span><Sprout aria-hidden="true" /> Build and break habits</span>
            <span><Dumbbell aria-hidden="true" /> Log daily activity</span>
            <span><Footprints aria-hidden="true" /> Notice weekly progress</span>
          </div>
          <a
            className="app-store-button"
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Apple aria-hidden="true" size={29} fill="currentColor" />
            <span>
              <small>View on the</small>
              <strong>App Store</strong>
            </span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <p className="third-party-note">
            Third-party app · Not affiliated with Speak. Seek. Heal. · Not for crisis
            response or medical care
          </p>
        </div>
      </div>
    </section>
  );
}
