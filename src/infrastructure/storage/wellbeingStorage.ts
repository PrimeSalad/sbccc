import type { DailyWellbeing } from '../../domain/models';

const STORAGE_KEY = 'speak-seek-heal.daily-check-in';

const emptyEntry = (): DailyWellbeing => ({
  date: new Date().toISOString().slice(0, 10),
  completedHabitIds: [],
});

export const wellbeingStorage = {
  read(): DailyWellbeing {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (!value) return emptyEntry();

      const entry = JSON.parse(value) as DailyWellbeing;
      return entry.date === new Date().toISOString().slice(0, 10)
        ? entry
        : emptyEntry();
    } catch {
      return emptyEntry();
    }
  },

  write(entry: DailyWellbeing) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    } catch {
      // The check-in still works for the current page if storage is unavailable.
    }
  },
};
