import { ArrowRight } from 'lucide-react';
import { CARE_STEPS } from '../../application/content/siteContent';

export function CarePath() {
  return (
    <section className="section care-path" aria-labelledby="care-path-title">
      <div className="container">
        <div className="split-heading">
          <div>
            <p className="eyebrow eyebrow-light">A way forward</p>
            <h2 id="care-path-title">Care can begin before you know what to call it.</h2>
          </div>
          <p>
            Asking for help is not a single leap. It can be three smaller movements,
            taken in your own time.
          </p>
        </div>

        <div className="care-step-grid">
          {CARE_STEPS.map((step, index) => (
            <article className="care-step" key={step.number}>
              <div className="care-step-top">
                <span>{step.number}</span>
                {index < CARE_STEPS.length - 1 && <ArrowRight aria-hidden="true" />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <blockquote>{step.prompt}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
