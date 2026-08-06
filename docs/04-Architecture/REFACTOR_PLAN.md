# 🌸 REFACTOR_PLAN.md

> **Lumi Wellness Frontend Refactor Plan**
>
> **Version:** 1.0.0
>
> **Status:** Active
>
> **Project:** Lumi Wellness

---

# 1. Purpose

This document defines the incremental refactor strategy for Lumi Wellness.

The objective is to transform the current Figma-generated React prototype into a scalable, maintainable, production-ready frontend application.

The refactor must preserve:

* Existing visual identity
* User experience
* Design system principles
* Current functionality

The goal is improvement, not a complete rewrite.

---

# 2. Current State

Lumi Wellness currently uses:

* React
* TypeScript
* Vite
* Tailwind CSS
* Component-based architecture

Current structure:

```text
src/

├── components/
├── data/
├── screens/
├── App.tsx
├── main.tsx
├── index.css
└── types.ts
```

The current version successfully provides:

* Complete visual experience
* Main user flows
* Core screens
* Initial component library

---

# 3. Refactor Goals

The refactor should achieve:

## Architecture

* Scalable folder structure
* Clear separation of responsibilities
* Feature-based organization

---

## State Management

Implement centralized state management for:

* User profile
* Preferences
* Theme
* Journal entries
* Check-ins
* Favorites

---

## Persistence

User information must survive browser refresh.

Initial solution:

* localStorage persistence

Future evolution:

* Backend synchronization

---

## Routing

Replace manual screen switching with:

* React Router
* Lazy loading
* Suspense boundaries

Requirements:

* Browser navigation
* Deep linking
* Back button support
* Better performance

---

## Component Quality

All components should:

* Have a single responsibility
* Be reusable
* Support accessibility
* Avoid unnecessary duplication

Target:

Maximum recommended size:

200 lines per component

---

## Design System Compliance

The implementation must follow:

* DESIGN_SYSTEM.md
* UI_GUIDELINES.md
* DESIGN_TOKENS.md
* COLOR_SYSTEM.md

Avoid:

* Hardcoded colors
* Random spacing values
* Duplicate styles
* Excessive inline styles

---

# 4. Migration Strategy

The refactor will happen incrementally.

No full rewrite.

Each phase must keep the application functional.

---

# Phase 1 — Application Foundation

## Objectives

Create the base architecture.

Tasks:

* Create app folder
* Create providers structure
* Implement React Router
* Add lazy loading for screens
* Add Suspense loading states

Expected result:

Application navigation works through routes.

---

# Phase 2 — State Management

## Objectives

Create centralized application state.

Tasks:

Create:

```text
store/

├── userStore
├── journalStore
├── checkinStore
└── themeStore
```

Move local state into centralized stores.

Expected result:

Application data has a single source of truth.

---

# Phase 3 — Persistence Layer

## Objectives

Prevent data loss.

Tasks:

Implement persistence for:

* User preferences
* Journal entries
* Check-ins
* Favorites
* Theme settings

Expected result:

Refreshing the browser does not remove user data.

---

# Phase 4 — Component Refactoring

## Objectives

Improve maintainability.

Tasks:

Extract reusable components:

* Cards
* Headers
* Buttons
* Inputs
* Section headers
* Illustrations

Split large screens into:

* Components
* Hooks
* Utilities

Expected result:

Screens become smaller and easier to test.

---

# Phase 5 — Design System Migration

## Objectives

Align implementation with Lumi Wellness identity.

Tasks:

Replace:

* Inline styles
* Hardcoded colors
* Repeated CSS values

With:

* Tailwind utilities
* Design tokens
* Shared components

Expected result:

Consistent UI and real dark mode support.

---

# Phase 6 — Accessibility Improvements

## Objectives

Meet WCAG AA expectations.

Tasks:

Implement:

* Semantic HTML
* ARIA labels
* Keyboard navigation
* Visible focus states
* Correct contrast
* Screen reader support

Expected result:

Lumi Wellness can be used by more people.

---

# Phase 7 — Performance Optimization

## Objectives

Improve application efficiency.

Tasks:

Review:

* Unnecessary renders
* Large components
* Expensive calculations
* Asset loading

Implement when needed:

* React.memo
* useMemo
* useCallback
* Optimized assets

Expected result:

Faster and smoother experience.

---

# 5. Rules During Refactor

## Do

✔ Preserve existing functionality

✔ Make small incremental changes

✔ Follow existing ADR decisions

✔ Update documentation when architecture changes

✔ Test after every phase

---

## Don't

✘ Rewrite everything at once

✘ Remove working features without approval

✘ Introduce unnecessary dependencies

✘ Ignore accessibility requirements

✘ Break the design system

---

# 6. Validation Checklist

After each phase verify:

□ Application builds successfully

□ Existing screens work

□ No console errors

□ TypeScript passes

□ UI remains consistent

□ Accessibility is improved

□ User experience is preserved

---

# 7. Final Objective

Transform Lumi Wellness from a visual prototype into a production-ready wellness platform while preserving the original vision:

A calm, accessible, compassionate digital companion.

---

## End of Document
