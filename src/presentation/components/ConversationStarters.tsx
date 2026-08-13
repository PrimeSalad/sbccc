import { Copy, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { CONVERSATION_STARTERS } from '../../application/content/siteContent';

export function ConversationStarters() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyStarter = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      window.setTimeout(() => setCopiedIndex(null), 2200);
    } catch {
      setCopiedIndex(null);
    }
  };

  return (
    <section className="section starters-section" aria-labelledby="starters-title">
      <div className="container starters-grid">
        <div className="section-heading">
          <p className="eyebrow">Borrow these words</p>
          <h2 id="starters-title">When you want to talk but don’t know how to start.</h2>
          <p>
            You can send one of these as-is. The goal is connection—not a perfect
            explanation.
          </p>
          <MessageCircle className="starter-illustration" aria-hidden="true" />
        </div>

        <div className="starter-list">
          {CONVERSATION_STARTERS.map((starter, index) => (
            <button
              className="starter-card"
              type="button"
              key={starter}
              onClick={() => copyStarter(starter, index)}
              aria-label={`Copy conversation starter: ${starter}`}
            >
              <span className="starter-number">0{index + 1}</span>
              <span className="starter-quote">“{starter}”</span>
              <span className="copy-label" aria-live="polite">
                <Copy aria-hidden="true" size={16} />
                {copiedIndex === index ? 'Copied' : 'Copy words'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
