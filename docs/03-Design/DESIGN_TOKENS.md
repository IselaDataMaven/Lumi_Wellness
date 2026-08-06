--color-primary

--color-secondary

--spacing-md

--radius-lg

--shadow-sm

--duration-fast

--font-heading

# 🌸 DESIGN_TOKENS.md

> **Lumi Wellness Design Tokens**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

Design Tokens are the foundation of the Lumi Wellness Design System.

They define reusable values for:

* Colors
* Typography
* Spacing
* Layout
* Borders
* Shadows
* Motion
* Components

The purpose is to maintain consistency between:

* Figma designs
* Frontend implementation
* Future platforms

---

# 2. Token Philosophy

Tokens should represent design decisions, not implementation details.

Prefer:

```
color-primary
spacing-lg
radius-card
shadow-soft
```

Instead of:

```
green-500
margin-24
border-radius-16
```

The name should communicate the purpose.

---

# 3. Spacing Tokens

Lumi Wellness uses an 8-point spacing system.

All spacing values should come from this scale.

| Token     | Value | Usage              |
| --------- | ----: | ------------------ |
| spacing-1 |  4 px | Small gaps         |
| spacing-2 |  8 px | Compact spacing    |
| spacing-3 | 12 px | Internal alignment |
| spacing-4 | 16 px | Standard spacing   |
| spacing-5 | 24 px | Card padding       |
| spacing-6 | 32 px | Section separation |
| spacing-7 | 48 px | Large sections     |
| spacing-8 | 64 px | Page separation    |
| spacing-9 | 96 px | Hero areas         |

---

# 4. Layout Tokens

## Content Width

| Token          |   Value |
| -------------- | ------: |
| layout-mobile  |    100% |
| layout-tablet  |  768 px |
| layout-desktop | 1200 px |

---

## Grid

| Device  | Columns |
| ------- | ------: |
| Mobile  |       4 |
| Tablet  |       8 |
| Desktop |      12 |

---

# 5. Border Radius Tokens

Rounded shapes communicate warmth and approachability.

| Token       |  Value | Usage            |
| ----------- | -----: | ---------------- |
| radius-sm   |   8 px | Small elements   |
| radius-md   |  12 px | Inputs/buttons   |
| radius-lg   |  16 px | Cards            |
| radius-xl   |  24 px | Large containers |
| radius-pill | 999 px | Tags/chips       |

---

# 6. Shadow Tokens

Shadows should be subtle.

Avoid heavy elevation.

| Token         | Usage             |
| ------------- | ----------------- |
| shadow-none   | Flat elements     |
| shadow-soft   | Cards             |
| shadow-medium | Floating elements |
| shadow-large  | Modals            |

Example:

```
shadow-soft

0 4px 12px rgba(0,0,0,0.08)
```

---

# 7. Typography Tokens

## Font Families

Primary:

```
font-family-primary

Friendly rounded sans-serif
```

Secondary:

```
font-family-secondary

Readable text-focused font
```

---

## Font Sizes

| Token        |  Size |
| ------------ | ----: |
| text-xs      | 12 px |
| text-sm      | 14 px |
| text-md      | 16 px |
| text-lg      | 18 px |
| text-xl      | 20 px |
| text-2xl     | 24 px |
| text-3xl     | 30 px |
| text-4xl     | 36 px |
| text-display | 48 px |

---

# 8. Font Weight Tokens

| Token           | Weight |
| --------------- | -----: |
| weight-regular  |    400 |
| weight-medium   |    500 |
| weight-semibold |    600 |
| weight-bold     |    700 |

---

# 9. Color Tokens

Color names should describe purpose.

Example:

```
color-background
color-surface
color-primary
color-secondary
color-success
color-warning
color-error
color-text-primary
color-text-secondary
```

Color definitions live in:

```
COLOR_SYSTEM.md
```

---

# 10. Motion Tokens

Animations should feel calm and natural.

| Token         | Duration |
| ------------- | -------: |
| motion-fast   |   150 ms |
| motion-normal |   250 ms |
| motion-slow   |   350 ms |

---

## Easing

Default:

```
ease-out
```

Used for:

* Opening elements
* Page transitions
* Feedback animations

---

# 11. Opacity Tokens

| Token            | Value | Usage             |
| ---------------- | ----: | ----------------- |
| opacity-disabled |   40% | Disabled states   |
| opacity-muted    |   60% | Secondary content |
| opacity-hover    |   80% | Hover effects     |

---

# 12. Z-Index Tokens

Avoid arbitrary layering values.

| Token          | Value | Usage           |
| -------------- | ----: | --------------- |
| layer-base     |     0 | Normal content  |
| layer-dropdown |   100 | Menus           |
| layer-sticky   |   200 | Sticky elements |
| layer-modal    |   300 | Dialogs         |
| layer-toast    |   400 | Notifications   |

---

# 13. Component Token Usage

Components must reference tokens.

Example:

Card:

```
padding: spacing-5

radius: radius-lg

shadow: shadow-soft
```

Button:

```
height: 48px

radius: radius-md

padding-horizontal: spacing-5
```

---

# 14. Developer Implementation

Tokens should be available as:

* CSS Variables
* Tailwind Configuration
* Figma Variables

Example:

```css
:root {

--spacing-md: 16px;

--radius-card: 16px;

--color-primary: #7CCB9B;

}
```

---

# 15. Token Rules

Never:

✘ Create random values

✘ Add colors without semantic names

✘ Use inconsistent spacing

✘ Duplicate existing tokens

Always:

✔ Reuse existing tokens

✔ Document new tokens

✔ Keep naming consistent

---

# 16. Future Evolution

Tokens will expand with the product.

New tokens should improve:

* Consistency
* Accessibility
* Maintainability
* User experience

---

## End of Document
