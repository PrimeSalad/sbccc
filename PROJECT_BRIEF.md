# Speak. Seek. Heal.

## Product brief

**Speak. Seek. Heal.** is a frontend-only mental health awareness and support-seeking
website for people in the Philippines. It is designed as a calm “one-stop starting
point”: notice how you feel, find words to reach out, understand why support matters,
and connect to a real service.

It is deliberately not a diagnostic tool, therapy platform, crisis service, or medical
record. The interactive check-in is saved only in the visitor’s browser. There is no
login, API, analytics integration, database, or backend.

## Audience and core needs

The primary audience is a person who knows something feels difficult but may not know
whether it is “serious enough,” what to say, or whom to contact. A secondary audience
is a friend or family member trying to help someone else.

The experience answers five practical questions:

1. **Am I allowed to ask for help?** Yes—before a crisis and without perfect words.
2. **What can I do in the next minute?** Complete a private, low-pressure check-in.
3. **How do I begin the conversation?** Copy a short, human conversation starter.
4. **Who can I contact?** Use visible call and directory hyperlinks.
5. **How can I support everyday care?** Practice small habits or open the external
   Unchainly app listing.

## Researched support routes

Research was reviewed on **13 August 2026**. Contact information can change; it should
be revalidated before every public launch and during routine maintenance.

### National Center for Mental Health (NCMH)

- **1553** — nationwide crisis hotline.
- **0917 899 8727 (USAP)** — Globe/mobile option.
- **0919 057 1553** — Smart/mobile option listed by Find A Helpline.
- The hotline is described as free, confidential, available 24/7, and intended for
  people experiencing emotional distress, a mental health crisis, or suicide risk.

Sources:

- [Department of Health — Abot-Kamay ang Tulong para sa Mental Health](https://caro.doh.gov.ph/abot-kamay-ang-tulong-para-sa-mental-health/)
- [MentalHealthPH — Emergency Help](https://mentalhealthph.org/help/)
- [Find A Helpline — NCMH Crisis Hotline](https://findahelpline.com/organizations/ncmh-crisis-hotline)

### Immediate emergency

- **911** — Philippine National Emergency Hotline.
- The site directs a visitor to call 911 or go to the nearest emergency room when they
  or someone else may be in immediate danger.

Source:

- [Philippine Government — Emergency Hotlines](https://ehotlines.e.gov.ph/)

### Broader directories

- [MentalHealthPH Emergency Help and Directory](https://mentalhealthph.org/help/)
- [Find A Helpline — Philippines](https://findahelpline.com/countries/ph)

Find A Helpline currently lists NCMH, In Touch, Tawag Paglaum–Centro Bisaya, Bantay
Bata 163, and HOPELINE. The website links to the maintained directory rather than
duplicating every number, which reduces the risk of stale contact details.

## Video and awareness basis

The embedded film is **“Depression — let’s talk”** from the verified World Health
Organization YouTube channel. It was produced for WHO’s public awareness campaign and
supports the site’s core message: depression can affect anyone and access to treatment
matters.

- [Watch the WHO video](https://www.youtube.com/watch?v=X-fAEMgQnt8)
- [WHO mental well-being resources](https://www.who.int/news-room/feature-stories/mental-well-being-resources-for-the-public/)
- [WHO on barriers to mental-health care](https://www.who.int/news-room/feature-stories/detail/sparking-a-renaissance-in-mental-health--strengthening-community-based-care-for-all-in-need)

WHO notes that stigma, limited mental-health literacy, service quality, accessibility,
and cost can all prevent people from seeking care. The page therefore avoids jargon,
places support before product promotion, and gives visitors words they can borrow.

## Unchainly integration

The supplied destination is:

- [Unchainly on the Philippine App Store](https://apps.apple.com/ph/app/unchainly/id6794420100)

The public App Store search result available during research showed an Unchainly+
listing with habit tracking, activity logging, weekly progress, a home-screen widget,
and a statement that the app does not collect data. That indexed listing currently
uses a different App Store identifier (`6759535551`) from the user-supplied link. The
website preserves the supplied link exactly, but it should be opened and verified on a
real Philippine Apple device/account before production deployment.

The Unchainly block is intentionally presented after crisis and educational content.
It explicitly says the app is third-party and is not for crisis response or medical
care.

## Content architecture

1. Crisis strip and persistent navigation
2. Hero: validation and two clear next steps
3. Private daily check-in and gentle habits
4. Speak → Seek → Heal framework
5. WHO awareness video
6. Human support directory
7. Copyable conversation starters
8. Unchainly daily-routine companion link
9. Common questions and medical disclaimer
10. Closing reassurance and trusted external resources

## Clean frontend architecture

```text
src/
├── app/
│   ├── App.tsx                       # Composition root
│   └── styles/                       # Global tokens and responsive system
├── domain/
│   └── models.ts                     # Framework-independent entities/types
├── application/
│   ├── content/siteContent.ts        # Use-case copy and verified destinations
│   └── hooks/useDailyWellbeing.ts    # Daily check-in behavior
├── infrastructure/
│   └── storage/wellbeingStorage.ts   # Browser localStorage adapter
└── presentation/
    ├── components/                   # Focused accessible UI sections
    └── pages/HomePage.tsx            # Page-level composition
```

Dependencies point inward: presentation uses application/domain; application depends
on domain and a narrow storage adapter. No component contains hotline records or
persistence implementation details.

## Run and build

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

The production output is written to `dist/` and can be served from any static host.

## Launch checklist

- Reconfirm NCMH and 911 numbers from official/maintained sources.
- Open every `tel:` link on both iOS and Android.
- Verify the supplied Unchainly App Store ID in the Philippines storefront.
- Confirm the WHO privacy-enhanced YouTube embed loads under the host’s CSP.
- Test at 320, 375, 768, 1024, and 1440 px without horizontal scrolling.
- Test keyboard-only navigation, visible focus, screen-reader heading order, 200% zoom,
  and `prefers-reduced-motion`.
- Review all medical and safety wording with a qualified Philippine mental-health
  professional before a public health campaign launch.
