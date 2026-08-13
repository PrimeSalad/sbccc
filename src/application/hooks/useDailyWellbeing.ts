import { useEffect, useState } from 'react';
import type { DailyWellbeing, Mood } from '../../domain/models';
import { wellbeingStorage } from '../../infrastructure/storage/wellbeingStorage';

export function useDailyWellbeing() {
  const [entry, setEntry] = useState<DailyWellbeing>(() => wellbeingStorage.read());

  useEffect(() => {
    wellbeingStorage.write(entry);
  }, [entry]);

  const setMood = (mood: Mood) => {
    setEntry((current) => ({ ...current, mood }));
  };

  const toggleHabit = (habitId: string) => {
    setEntry((current) => ({
      ...current,
      completedHabitIds: current.completedHabitIds.includes(habitId)
        ? current.completedHabitIds.filter((id) => id !== habitId)
        : [...current.completedHabitIds, habitId],
    }));
  };

  return { entry, setMood, toggleHabit };
}
