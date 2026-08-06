# 🌸 RESPONSIVE.md

> **Lumi Wellness Responsive Design Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines responsive design standards for Lumi Wellness.

The goal is to provide a consistent experience across:

* Mobile devices
* Tablets
* Desktop screens
* Future platforms

Responsive design should preserve:

🌿 Calm experience

🤍 Clear navigation

✨ Readability

🌸 Emotional comfort

---

# 2. Responsive Philosophy

## Design for humans, not screens.

Users interact with Lumi in different contexts:

* During short moments
* While relaxing
* During reflection
* On the move
* At home

The interface should adapt naturally.

---

# 3. Mobile First Approach

Lumi Wellness follows a mobile-first strategy.

Design priority:

1. Mobile
2. Tablet
3. Desktop

Desktop layouts should expand the experience, not completely redesign it.

---

# 4. Breakpoints

The system uses three main breakpoints.

| Device  |            Width |
| ------- | ---------------: |
| Mobile  |         < 768 px |
| Tablet  | 768 px - 1023 px |
| Desktop |        ≥ 1024 px |

---

# 5. Layout System

## Mobile

Width:

100%

Columns:

4

Priority:

* Essential content
* Single actions
* Vertical flow

---

## Tablet

Width:

768 px+

Columns:

8

Priority:

* Increased spacing
* Two-column layouts when useful

---

## Desktop

Maximum content width:

1200 px

Columns:

12

Priority:

* Multi-column layouts
* Expanded navigation
* Additional context

---

# 6. Spacing Behavior

Responsive spacing should follow design tokens.

Never create random spacing values.

---

## Mobile

Compact spacing:

Use:

* 16 px internal spacing
* 24 px section spacing

---

## Desktop

Expanded spacing:

Use:

* 24 px internal spacing
* 32-48 px section spacing

---

# 7. Typography Scaling

Typography should remain readable.

---

## Mobile

Recommended:

Body:

16 px minimum

Headings:

Reduced scale when necessary

Avoid:

Large titles that force excessive scrolling.

---

## Desktop

Can use larger hierarchy:

Display:

48 px

H1:

36 px

---

# 8. Navigation

## Mobile Navigation

Pattern:

Bottom Navigation

Maximum:

5 items

Example:

```
Home

Journey

Activities

Journal

Profile
```

---

## Desktop Navigation

Pattern:

Sidebar navigation

Features:

* Persistent access
* Clear sections
* Additional labels

---

# 9. Component Behavior

Components should define responsive behavior.

---

# Buttons

Mobile:

Full width when primary action is important.

Example:

```
[ Start Activity          ]
```

Desktop:

Can use compact width.

Example:

```
[ Start Activity ]
```

---

# Cards

Mobile:

Single column.

Tablet:

Possible two columns.

Desktop:

Grid layouts.

Example:

```
Mobile:

Card
Card
Card


Desktop:

Card | Card | Card
```

---

# Forms

Mobile:

Single column always.

Desktop:

May use grouped layouts.

Never reduce readability for compactness.

---

# 10. Images & Illustrations

Images should adapt:

Mobile:

* Crop carefully
* Maintain important subjects

Desktop:

* Larger visual areas

Avoid:

* Distorted images
* Unnecessary decorative images

---

# 11. AI Companion Responsive Behavior

AI interactions should remain comfortable.

Mobile:

* Full-width chat experience
* Easy typing area
* Large touch targets

Desktop:

* Chat panel
* Optional side context

---

# 12. Touch Guidelines

Touch targets:

Minimum:

44 × 44 px

Recommended:

48 × 48 px

Spacing between interactive elements:

8 px minimum

---

# 13. Orientation Support

Support:

* Portrait
* Landscape

Prioritize portrait for mobile wellness experiences.

---

# 14. Responsive States

Every component should define:

Mobile

Tablet

Desktop

Examples:

* Navigation
* Cards
* Modals
* Forms
* AI chat

---

# 15. Performance Considerations

Responsive design should consider:

* Image optimization
* Lazy loading
* Reduced animations on low-power devices
* Network conditions

---

# 16. Accessibility

Responsive experiences must maintain:

✔ Readable text

✔ Keyboard navigation

✔ Screen reader support

✔ Zoom compatibility

✔ Touch accessibility

---

# 17. Responsive Checklist

Before release:

□ Mobile tested

□ Tablet tested

□ Desktop tested

□ Landscape tested

□ Text scaling tested

□ Touch targets verified

□ Images optimized

□ Navigation validated

---

# 18. Future Evolution

Responsive experiences may expand to:

* Wearables
* Smart displays
* Voice interfaces
* New wellness devices

Every adaptation must preserve:

Calm

Clarity

Connection

---

## End of Document
