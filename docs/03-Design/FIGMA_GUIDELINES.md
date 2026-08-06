# 🌸 FIGMA_GUIDELINES.md

> **Lumi Wellness Figma Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines how Lumi Wellness design files should be organized and maintained in Figma.

The goal is to ensure:

* Design consistency
* Easy collaboration
* Faster development handoff
* Scalable product design

---

# 2. Figma Organization Philosophy

Figma should reflect the structure of the Design System.

Design files should be:

🌿 Organized

🤍 Predictable

✨ Reusable

🌸 Developer-friendly

Avoid creating isolated screens without reusable components.

---

# 3. File Structure

Every Lumi Wellness Figma file should follow this structure:

```
Lumi Wellness Design System

├── Cover
│
├── 00 Foundations
│
├── 01 Components
│
├── 02 Patterns
│
├── 03 Screens
│
├── 04 User Flows
│
├── 05 Prototypes
│
├── 06 Archive
```

---

# 4. Pages Definition

## Cover

Contains:

* Project name
* Version
* Design owner
* Last update
* Links to documentation

---

# 00 Foundations

Contains:

* Colors
* Typography
* Spacing
* Grid
* Icons
* Variables

Related documents:

```
DESIGN_TOKENS.md

COLOR_SYSTEM.md

TYPOGRAPHY.md
```

---

# 01 Components

Contains reusable UI components.

Examples:

* Buttons
* Cards
* Inputs
* Navigation
* Modals
* Toasts

Every component must include:

* Variants
* States
* Properties
* Documentation

---

# 02 Patterns

Contains reusable experience patterns.

Examples:

* Onboarding
* Empty states
* Error states
* AI conversations
* Wellness activities

---

# 03 Screens

Contains complete product screens.

Organization:

```
Feature

└── Screen Name

    ├── Mobile

    ├── Tablet

    └── Desktop
```

---

# 04 User Flows

Contains:

* User journeys
* Navigation maps
* Decision flows

Examples:

```
Sign Up Flow

↓

Onboarding

↓

First Wellness Activity

↓

Dashboard
```

---

# 05 Prototypes

Contains:

* Interactive prototypes
* User testing versions
* Demo experiences

---

# 06 Archive

Contains:

* Deprecated designs
* Previous versions
* Experiments

Never delete historical work.

---

# 5. Naming Conventions

Use clear naming.

---

## Components

Format:

```
Component / Variant / State
```

Example:

```
Button / Primary / Default

Button / Primary / Loading

Card / Wellness / Completed
```

---

## Frames

Format:

```
Platform - Feature - Screen
```

Example:

```
Mobile - Journal - Entry

Desktop - Dashboard - Home
```

---

# 6. Auto Layout Rules

All reusable components should use Auto Layout.

Benefits:

* Responsive behavior
* Faster updates
* Developer consistency

---

Recommended:

Padding:

Use spacing tokens.

Examples:

```
Card:

Padding 24px

Gap 16px
```

---

# 7. Component Variants

Components should use variants instead of duplicates.

Example:

Button:

```
Type:

Primary
Secondary
Ghost


State:

Default
Hover
Disabled
Loading
Success
```

---

# 8. Variables

Figma Variables should match Design Tokens.

Examples:

Color:

```
color.primary

color.background

color.error
```

Spacing:

```
spacing.md

spacing.lg
```

Typography:

```
text.heading

text.body
```

---

# 9. Prototype Guidelines

Prototypes should demonstrate:

* Real user flows
* Real interactions
* Expected states

Avoid:

* Random animations
* Unnecessary transitions

Follow:

MOTION.md

---

# 10. Developer Handoff

Before handing designs to development:

Verify:

□ Components use variants

□ Tokens are applied

□ Measurements are consistent

□ States are documented

□ Assets are exported correctly

□ Responsive behavior is explained

---

# 11. Design Documentation

Every complex component should include:

## Description

What it does.

## Usage

When to use.

## Do

Recommended usage.

## Don't

Incorrect usage.

---

Example:

```
Component:

Mood Selector


Use:

For emotional check-ins.


Don't:

For rating product satisfaction.
```

---

# 12. Accessibility in Figma

Design files should include:

* Contrast checks
* Focus states
* Keyboard considerations
* Screen reader labels

---

# 13. Version Control

Every major update should include:

Version:

```
v1.0
v1.1
v2.0
```

Document:

* Added components
* Updated patterns
* Removed elements

---

# 14. Design Review Checklist

Before approval:

□ Matches design principles

□ Uses tokens

□ Responsive defined

□ Accessibility reviewed

□ Components reusable

□ Developer handoff complete

---

# 15. Future Evolution

Figma guidelines will evolve as Lumi Wellness grows.

Future additions:

* Design libraries
* Advanced prototyping
* AI-assisted design workflows
* Multi-brand support

---

## End of Document
