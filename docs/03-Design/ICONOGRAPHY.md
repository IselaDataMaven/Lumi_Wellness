# 🌸 ICONOGRAPHY.md

> **Lumi Wellness Iconography Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines the icon system for Lumi Wellness.

Icons support users by:

* Improving navigation
* Reinforcing meaning
* Reducing cognitive effort
* Creating visual consistency

Icons should complement content, never replace important information.

---

# 2. Icon Philosophy

Lumi Wellness icons should feel:

🌿 Calm

🤍 Friendly

✨ Simple

🌸 Human

Icons are designed to guide, not distract.

---

# 3. Icon Style Direction

The icon style should be:

* Minimal
* Rounded
* Soft
* Clear
* Inclusive

Preferred characteristics:

✔ Rounded corners

✔ Balanced proportions

✔ Simple shapes

✔ Consistent stroke weight

---

Avoid:

✘ Aggressive shapes

✘ Highly detailed illustrations

✘ Medical symbols

✘ Complex visual metaphors

---

# 4. Icon Library

All icons should come from one consistent icon family.

Recommended:

* Lucide Icons
* Material Symbols Rounded
* Phosphor Icons

The selected library should support:

* Web
* Mobile
* Accessibility
* Custom extensions

---

# 5. Icon Sizes

Use only approved sizes.

| Token    |  Size | Usage          |
| -------- | ----: | -------------- |
| icon-xs  | 12 px | Metadata       |
| icon-sm  | 16 px | Inline actions |
| icon-md  | 20 px | Navigation     |
| icon-lg  | 24 px | Buttons/cards  |
| icon-xl  | 32 px | Feature areas  |
| icon-2xl | 48 px | Empty states   |

---

# 6. Stroke Guidelines

Default stroke:

2 px

For smaller icons:

1.5 px

For feature illustrations:

2-3 px

Maintain consistency across the application.

---

# 7. Icon Colors

Icons should use semantic color tokens.

Primary:

```text
color-primary
```

Secondary:

```text
color-text-secondary
```

Interactive:

```text
color-primary
```

Error:

```text
color-error
```

Success:

```text
color-success
```

---

# 8. Icon Usage Rules

## Use icons for:

✔ Navigation

✔ Actions

✔ Status indicators

✔ Emotional expressions

✔ Categories

---

## Do not use icons alone for:

✘ Critical warnings

✘ Important actions

✘ Error explanations

✘ Complex concepts

Always include text when meaning could be unclear.

---

# 9. Icon + Text Alignment

When paired with text:

Rules:

* Align vertically centered
* Maintain consistent spacing

Spacing:

8 px

Example:

```text
🌿  Start Meditation
```

---

# 10. Interactive Icon Buttons

Icon-only buttons must include:

* Tooltip
* Accessible label
* Minimum touch area

Minimum size:

44 × 44 px

Example:

Good:

```text
[ 🌙 ]

aria-label:
"Enable dark mode"
```

Bad:

```text
[ 🌙 ]
(no explanation)
```

---

# 11. Lumi Wellness Icon Categories

## Navigation

Examples:

* Home
* Journey
* Activities
* Journal
* Profile

---

## Wellness Activities

Examples:

* Meditation
* Breathing
* Sleep
* Movement
* Reflection

---

## Emotional States

Examples:

* Happy
* Calm
* Neutral
* Difficult
* Support needed

Emotions should never communicate judgment.

---

## AI Companion

Examples:

* Conversation
* Spark
* Guidance
* Suggestions

AI icons should feel:

* Warm
* Approachable
* Trustworthy

Avoid robotic aesthetics.

---

## Progress & Growth

Examples:

* Plant growth
* Steps
* Goals
* Achievements

Focus on personal improvement, not competition.

---

# 12. Icon Animation

Animations should be subtle.

Allowed:

✔ Fade

✔ Gentle scale

✔ Small movement

Avoid:

✘ Constant motion

✘ Flashing

✘ Distracting loops

---

Recommended duration:

150-250 ms

---

# 13. Accessibility

Icons require:

* Accessible names
* Proper contrast
* Keyboard support when interactive

Decorative icons should be hidden from screen readers.

Example:

Decorative:

```html
aria-hidden="true"
```

Meaningful:

```html
aria-label="Open journal"
```

---

# 14. Dark Mode

Icons must support:

* Light theme
* Dark theme
* Disabled state
* Hover state

Avoid icons that depend on only one background color.

---

# 15. Icon Checklist

Before adding an icon:

□ Meaning is clear

□ Matches icon style

□ Uses approved size

□ Accessible label added

□ Works in dark mode

□ Does not replace necessary text

---

# 16. Future Evolution

The Lumi Wellness icon system may include:

* Custom illustrations
* Personalized wellness symbols
* AI companion expressions
* Emotional wellness vocabulary

All additions must preserve:

Calm

Clarity

Trust

---

## End of Document
