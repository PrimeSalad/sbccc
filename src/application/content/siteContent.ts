import type { CareStep, Habit, SupportLink } from '../../domain/models';

export const SUPPORT_LINKS: SupportLink[] = [
  {
    id: 'ncmh',
    eyebrow: 'Free · Confidential · 24/7',
    name: 'NCMH Crisis Hotline',
    description:
      'For emotional distress, a mental health crisis, or thoughts of self-harm. A trained responder is ready to listen.',
    availability: 'Nationwide landline',
    actionLabel: 'Call 1553',
    href: 'tel:1553',
    secondaryAction: {
      label: 'Globe: 0917 899 8727',
      href: 'tel:+639178998727',
    },
    tone: 'plum',
  },
  {
    id: 'emergency',
    eyebrow: 'Immediate danger',
    name: 'National Emergency Hotline',
    description:
      'If you or someone else may be in immediate danger, call emergency services now or go to the nearest emergency room.',
    availability: 'Philippines',
    actionLabel: 'Call 911',
    href: 'tel:911',
    tone: 'orange',
  },
  {
    id: 'directory',
    eyebrow: 'More ways to get help',
    name: 'MentalHealthPH Directory',
    description:
      'Browse services and support options when you need care beyond an urgent phone conversation.',
    availability: 'External resource',
    actionLabel: 'Browse the directory',
    href: 'https://mentalhealthph.org/help/',
    secondaryAction: {
      label: 'Find more Philippine helplines',
      href: 'https://findahelpline.com/countries/ph',
    },
    tone: 'green',
  },
];

export const CARE_STEPS: CareStep[] = [
  {
    number: '01',
    title: 'Speak',
    description:
      'Name what is happening without needing to explain it perfectly. A few honest words are enough to begin.',
    prompt: '“I haven’t felt like myself lately.”',
  },
  {
    number: '02',
    title: 'Seek',
    description:
      'Choose one safe person or service. Support can be a friend, counselor, doctor, or crisis responder.',
    prompt: '“Can you stay with me while I find help?”',
  },
  {
    number: '03',
    title: 'Heal',
    description:
      'Build care in small, repeatable ways. Progress can be uneven and still be real.',
    prompt: '“What is one kind thing I can do next?”',
  },
];

export const DAILY_HABITS: Habit[] = [
  {
    id: 'water',
    label: 'Drink some water',
    detail: 'One glass counts.',
  },
  {
    id: 'light',
    label: 'Step into daylight',
    detail: 'Even for two minutes.',
  },
  {
    id: 'reach-out',
    label: 'Connect with someone',
    detail: 'A message is enough.',
  },
];

export const CONVERSATION_STARTERS = [
  'I don’t need you to fix this. Could you listen for a minute?',
  'Things have felt harder than usual. Can you help me find support?',
  'I’m not feeling safe by myself right now. Can you stay with me?',
];
