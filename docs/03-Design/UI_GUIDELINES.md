Card

24 px padding

16 px entre elementos

32 px entre secciones

# 🌸 UI_GUIDELINES.md

> **Lumi Wellness UI Guidelines**
>
> **Version:** 1.0.0
>
> **Project:** Lumi Wellness
>
> **Status:** Living Document

---

# 1. Purpose

This document defines how Lumi Wellness should look, feel, and behave.

Its purpose is to create a consistent experience across every screen, component, and future platform.

These guidelines should be followed by designers, developers, QA engineers, and product managers.

---

# 2. Design Philosophy

The interface should never compete for the user's attention.

Instead, it should quietly support them.

Every screen should feel:

🌿 Calm

🤍 Clean

💜 Friendly

✨ Simple

Users should never wonder what to do next.

---

# 3. Core Principles

## Clarity over decoration

If a visual element does not improve usability, remove it.

---

## White space is content

Spacing improves readability.

Do not fill empty areas unnecessarily.

---

## One primary action

Each screen should contain one clear primary action.

Avoid multiple competing CTAs.

---

## Consistency first

The same interaction should always produce the same result.

Users should never have to relearn the interface.

---

## Accessibility by default

Every interface must be keyboard accessible and screen-reader friendly.

---

# 4. Layout

## Mobile First

The interface is designed for mobile devices first.

Desktop and tablet layouts extend—not replace—the mobile experience.

---

## Maximum Content Width

Desktop

1200 px

Tablet

768 px

Mobile

100%

---

## Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

---

## Spacing Scale

Use only the following spacing values.

| Token | Value |
|---------|------:|
| XS | 4 px |
| SM | 8 px |
| MD | 16 px |
| LG | 24 px |
| XL | 32 px |
| XXL | 48 px |
| XXXL | 64 px |

Never use arbitrary spacing values.

---

# 5. Typography

Hierarchy should always be clear.

| Style | Size | Weight |
|---------|------:|-------:|
| Display | 48 px | Bold |
| H1 | 36 px | Bold |
| H2 | 30 px | SemiBold |
| H3 | 24 px | SemiBold |
| H4 | 20 px | Medium |
| Body Large | 18 px | Regular |
| Body | 16 px | Regular |
| Small | 14 px | Regular |
| Caption | 12 px | Medium |

Maximum line length:

75 characters.

---

# 6. Buttons

Every button must have a clear hierarchy.

## Primary

Main user action.

Filled.

High emphasis.

---

## Secondary

Alternative action.

Outlined.

---

## Ghost

Low emphasis.

Transparent.

---

## Danger

Destructive actions only.

Delete

Reset

Remove

---

## Disabled

Must always indicate why interaction is unavailable.

---

## Loading

Display loading spinner.

Prevent multiple submissions.

---

# 7. Cards

Cards should group related information.

Every card should include:

Padding

Rounded corners

Subtle shadow

Clear hierarchy

Never overload a card with excessive information.

---

# 8. Forms

Forms should always be simple.

One column.

Large touch targets.

Helpful labels.

Avoid placeholder-only labels.

---

Required states

Default

Focused

Error

Disabled

Success

---

Validation should happen:

Immediately when appropriate.

Never after every keystroke.

---

# 9. Inputs

Minimum height

48 px

Minimum touch area

44 × 44 px

Always include:

Label

Placeholder

Helper Text (when needed)

Validation Message

---

# 10. Navigation

Navigation should always be predictable.

## Mobile

Bottom Navigation

Maximum:

5 items

---

## Desktop

Sidebar Navigation

Persistent

---

Never display Bottom Navigation and Sidebar simultaneously.

---

# 11. Icons

Icons should support content.

Never replace important text.

Recommended sizes

16 px

20 px

24 px

32 px

Use one icon library across the project.

---

# 12. Images & Illustrations

Illustrations should feel:

Soft

Minimal

Inclusive

Hopeful

Avoid:

Medical imagery

Hospital aesthetics

Fear-inducing visuals

---

# 13. Colors

Colors communicate emotion.

Never use color alone to communicate status.

Always pair color with:

Text

Icon

Pattern

---

Status Colors

Success

Warning

Error

Info

Neutral

---

# 14. Motion

Motion should feel natural.

Recommended duration

Fast

150 ms

Normal

250 ms

Slow

350 ms

Avoid bouncing animations.

Avoid excessive movement.

Respect prefers-reduced-motion.

---

# 15. Feedback

Every user action deserves feedback.

Examples

Button pressed

Saved successfully

Exercise completed

Offline

Loading

Error

Success

---

Feedback should be immediate.

---

# 16. Empty States

Empty states should guide users.

Never leave blank pages.

Every empty state should include:

Illustration

Short explanation

Primary action

Optional secondary action

---

# 17. Error States

Errors should explain:

What happened.

Why.

What users can do next.

Never blame users.

---

Bad

"Invalid data"

---

Good

"We couldn't save your journal entry.
Please check your connection and try again."

---

# 18. Loading States

Never display blank screens.

Preferred loading patterns

Skeleton

Progress Indicator

Subtle Animation

---

# 19. Accessibility

Every interface must support:

Keyboard Navigation

Visible Focus

Screen Readers

ARIA Labels

Color Contrast (WCAG AA)

Zoom 200%

Dark Mode

Reduced Motion

No exceptions.

---

# 20. Responsive Behavior

Design should adapt—not break.

Breakpoints

| Device | Width |
|---------|-------:|
| Mobile | <768 px |
| Tablet | 768–1023 px |
| Desktop | ≥1024 px |

---

# 21. Dark Mode

Dark mode is part of the product.

Not an afterthought.

Every component must define:

Light Theme

Dark Theme

Hover

Focus

Disabled

---

# 22. Content Guidelines

Write like a supportive companion.

Short sentences.

Simple language.

Positive reinforcement.

Avoid medical jargon whenever possible.

Prefer

"Take your time."

Instead of

"You must complete today's activity."

---

# 23. Do & Don't

## Do

✔ Use whitespace

✔ Keep interfaces calm

✔ Design for accessibility

✔ Be consistent

✔ Keep interactions predictable

✔ Use reusable components

✔ Test every state

---

## Don't

✘ Add unnecessary animations

✘ Overload screens

✘ Hide important actions

✘ Depend only on color

✘ Create inconsistent layouts

✘ Introduce visual noise

---

# 24. Quality Checklist

Before releasing any screen, verify:

□ Responsive

□ Accessible

□ Keyboard Navigation

□ Dark Mode

□ Loading State

□ Error State

□ Empty State

□ Success State

□ Focus State

□ Performance Tested

□ UX Reviewed

□ QA Approved

---

# 25. Future Evolution

These guidelines will evolve alongside Lumi Wellness.

Changes must improve usability, accessibility, or user well-being.

Visual trends alone are never sufficient justification for redesign.

Consistency should always outweigh novelty.