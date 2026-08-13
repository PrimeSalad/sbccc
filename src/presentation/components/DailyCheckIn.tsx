import {
  Check,
  Cloud,
  CloudRain,
  CloudSun,
  LockKeyhole,
  Sun,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useDailyWellbeing } from '../../application/hooks/useDailyWellbeing';
import { DAILY_HABITS } from '../../application/content/siteContent';
import type { Mood } from '../../domain/models';

const moods: Array<{ id: Mood; label: string; icon: LucideIcon }> = [
  { id: 'steady', label: 'Steady', icon: Sun },
  { id: 'tender', label: 'Tender', icon: CloudSun },
  { id: 'heavy', label: 'Heavy', icon: CloudRain },
  { id: 'restless', label: 'Restless', icon: Waves },
  { id: 'unsure', label: 'Not sure', icon: Cloud },
];

export function DailyCheckIn() {
  const { entry, setMood, toggleHabit } = useDailyWellbeing();
  const completedCount = entry.completedHabitIds.length;

  return (
    <section className="section check-in-section" id="check-in" aria-labelledby="check-in-title">
      <div className="container check-in-grid">
        <div className="section-heading check-in-heading">
          <p className="eyebrow">A quiet pause</p>
          <h2 id="check-in-title">How are you arriving today?</h2>
          <p>
            No score to chase. Noticing is the practice. Choose the closest answer—not
            the perfect one.
          </p>
          <div className="local-note">
            <LockKeyhole aria-hidden="true" size={18} />
            <span>Saved only in your browser. Nothing is sent anywhere.</span>
          </div>
        </div>

        <div className="check-in-panel">
          <fieldset className="mood-fieldset">
            <legend>Right now, I feel…</legend>
            <div className="mood-options">
              {moods.map(({ id, label, icon: Icon }) => (
                <button
                  className="mood-button"
                  type="button"
                  aria-pressed={entry.mood === id}
                  key={id}
                  onClick={() => setMood(id)}
                >
                  <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="habit-header">
            <div>
              <span className="mini-label">Gentle care list</span>
              <h3>Three things that can count today</h3>
            </div>
            <span className="habit-count" aria-live="polite">
              {completedCount}/{DAILY_HABITS.length}
            </span>
          </div>

          <div className="habit-list">
            {DAILY_HABITS.map((habit) => {
              const isDone = entry.completedHabitIds.includes(habit.id);
              return (
                <button
                  className="habit-item"
                  type="button"
                  aria-pressed={isDone}
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                >
                  <span className="habit-check" aria-hidden="true">
                    {isDone && <Check size={17} strokeWidth={2.5} />}
                  </span>
                  <span>
                    <strong>{habit.label}</strong>
                    <small>{habit.detail}</small>
                  </span>
                </button>
              );
            })}
          </div>

          {completedCount > 0 && (
            <p className="check-in-response" role="status">
              That counts. Care does not have to be dramatic to be meaningful.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
