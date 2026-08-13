export type SupportLink = {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  availability: string;
  actionLabel: string;
  href: string;
  secondaryAction?: {
    label: string;
    href: string;
  };
  tone: 'plum' | 'orange' | 'green';
};

export type CareStep = {
  number: string;
  title: string;
  description: string;
  prompt: string;
};

export type Habit = {
  id: string;
  label: string;
  detail: string;
};

export type Mood = 'steady' | 'tender' | 'heavy' | 'restless' | 'unsure';

export type DailyWellbeing = {
  date: string;
  mood?: Mood;
  completedHabitIds: string[];
};
