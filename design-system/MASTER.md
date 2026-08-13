# Speak. Seek. Heal. — Design System

## Experience principle

The interface should feel like a well-made independent health publication: calm,
direct, warm, and human. It must never resemble a generic SaaS landing page or use
visual spectacle to soften serious content.

The emotional sequence is deliberate:

1. **Safety:** urgent contacts are visible before any marketing message.
2. **Recognition:** the hero validates difficult feelings without diagnosing them.
3. **Agency:** the private check-in offers a small, achievable action.
4. **Direction:** the Speak → Seek → Heal framework gives a memorable path.
5. **Connection:** phone and directory links lead to real human support.
6. **Continuity:** the optional Unchainly link supports daily routines but is clearly
   separated from crisis and clinical care.

## Visual language

- **Style:** warm editorial minimalism with tactile, asymmetric cards.
- **Primary surfaces:** uncoated paper (`#F4EFE4`) and warm cream (`#FFFAF1`).
- **Core ink:** near-black aubergine (`#241D29`).
- **Trust/action:** plum (`#55234C`) and deep plum (`#391331`).
- **Energy:** burnt orange (`#ED6A3B` / `#9F3412`).
- **Support accents:** sage (`#C9DBA6`), peach (`#F7B59C`), and muted yellow
  (`#F1D66A`).
- **Typography:** Fraunces for emotionally expressive display type; DM Sans for clear
  interface and long-form text. Both use robust system fallbacks.
- **Shape:** irregular alternating corner radii, thin ink outlines, occasional hard
  shadows. Avoid excessive glass, blur, gradients, floating pills, and ornamental
  illustrations.

## Layout and type

- 1,180 px maximum content width.
- Responsive gutters: 20 px mobile, 16 px small mobile, fluid desktop.
- 8 px base spacing rhythm.
- Body text is always at least 16 px.
- Long-form copy stays near 60–75 characters per line.
- Display headings use compact line-height and balanced wrapping; body copy uses
  1.55–1.65 line-height.

## Interaction

- All primary controls are at least 44 × 44 px.
- Links and buttons have visible keyboard focus.
- Hover is additive; every action remains understandable without hover.
- Press feedback does not move neighboring layout.
- Motion is limited to 180–200 ms state changes and disabled under
  `prefers-reduced-motion`.
- The daily check-in uses `aria-pressed`, never color alone, to express selection.
- The mobile crisis action stays visible without obscuring page content.

## Accessibility requirements

- Normal text meets WCAG 2.2 AA contrast (4.5:1); large/interface graphics meet 3:1.
- Sequential headings: one `h1`, then section `h2`s and card `h3`s.
- A skip link appears on keyboard focus.
- Embedded video has an explicit title and an external watch link.
- External tools are labeled as external/third-party where context matters.
- No emoji are used as structural icons; icons use the consistent Lucide stroke set.
- Mobile zoom is not disabled.
- Reduced-motion and print presentations are supported.

## Content voice

- Use plain, compassionate language without promising outcomes.
- Prefer “you can,” “one next step,” and “support is available.”
- Avoid “fix,” “cure,” “just,” “always,” and diagnostic claims.
- Never frame habit streaks as moral achievement. Missing a day is not failure.
- Clearly distinguish awareness, self-care, crisis support, and professional care.

## Anti-patterns

- No generic smiling-person stock photography.
- No AI-generated wellness blobs, gradient overload, fake testimonials, or invented
  impact statistics.
- No chatbot impersonating a professional.
- No gamified crisis language or manipulative urgency.
- No crisis contacts hidden in the footer.
- No claim that an app replaces a counselor, clinician, or emergency service.
