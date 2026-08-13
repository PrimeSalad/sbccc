import { ExternalLink, Play } from 'lucide-react';

export function VideoStory() {
  return (
    <section className="section video-section" id="learn" aria-labelledby="video-title">
      <div className="container video-grid">
        <div className="video-frame-wrap">
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/X-fAEMgQnt8?rel=0"
              title="WHO: Depression — let's talk"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="video-caption">
            <Play aria-hidden="true" size={15} fill="currentColor" /> 3-minute film · World
            Health Organization
          </p>
        </div>

        <div className="section-heading video-copy">
          <p className="eyebrow">Watch & understand</p>
          <h2 id="video-title">Depression can touch any life. Conversation can open a door.</h2>
          <p>
            This short WHO film frames depression as a health issue that deserves care,
            access, and honest conversation—not shame.
          </p>
          <div className="watch-note">
            <strong>If this feels close to home</strong>
            <span>
              You do not need a diagnosis or the “right” words before reaching out.
            </span>
          </div>
          <a
            className="text-link"
            href="https://www.youtube.com/watch?v=X-fAEMgQnt8"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube <ExternalLink aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
