# 🌸 ADR-008 — Frontend Refactor Strategy

> **Architecture Decision Record**
>
> **Status:** Accepted
>
> **Version:** 1.0.0
>
> **Project:** Lumi Wellness

---

# 1. Title

Frontend Refactor Strategy: Transition from Prototype Architecture to Production Architecture

---

# 2. Context

Lumi Wellness was initially generated as a React + TypeScript + Vite application based on a Figma design implementation.

The initial version successfully established:

* Visual identity
* User flows
* Main screens
* Component concepts
* Design direction

However, as the project evolves toward a production-ready application, architectural improvements are required.

Current limitations:

* Screens contain excessive responsibilities
* Application state is distributed locally
* No persistence layer exists
* Routing is manually controlled
* Components are difficult to scale
* Design tokens are not consistently applied
* Accessibility requires improvement

---

# 3. Decision

Lumi Wellness will gradually migrate from a screen-based prototype structure to a feature-based architecture.

The refactor will prioritize:

1. Maintainability
2. Scalability
3. Accessibility
4. Performance
5. Developer experience

The migration will happen incrementally without rewriting the entire application.

---

# 4. Current Architecture

Current structure:

```text
src/

components/

data/

screens/

App.tsx

main.tsx

types.ts
```

This structure is acceptable for prototypes but becomes difficult to maintain as features grow.

---

# 5. Target Architecture

Future structure:

```text
src/

├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── illustrations/
│
├── features/
│   ├── checkin/
│   ├── journal/
│   ├── exercises/
│   ├── progress/
│   └── profile/
│
├── hooks/

├── store/

├── services/

├── constants/

├── types/

└── styles/
```

---

# 6. Migration Strategy

The migration will follow these phases:

---

## Phase 1 — Application Foundation

Goals:

* Add React Router
* Add lazy loading
* Create application providers
* Establish global state strategy

---

## Phase 2 — State Management

Move local state into centralized stores.

Managed data:

* User preferences
* Journal entries
* Check-ins
* Favorites
* Theme

Persistence:

Initial:

localStorage

Future:

Backend synchronization

---

## Phase 3 — Component Refactoring

Large screens will be divided into:

* Containers
* Presentational components
* Custom hooks

Target:

Maximum component size:

200 lines

---

## Phase 4 — Design System Integration

Replace:

* Hardcoded colors
* Inline styles
* Duplicate UI patterns

With:

* Design tokens
* Reusable components
* Tailwind utilities

---

## Phase 5 — Accessibility Improvement

Implement:

* ARIA attributes
* Keyboard navigation
* Focus states
* Semantic HTML
* WCAG AA compliance

---

# 7. Non Goals

This refactor will NOT:

* Change Lumi Wellness visual identity
* Replace the existing design
* Rewrite everything from zero
* Add unnecessary complexity

---

# 8. Benefits

Expected improvements:

## Development

* Easier maintenance
* Faster feature development
* Better testing

## User Experience

* Better performance
* Reliable data
* Improved accessibility

## Product

* Ready foundation for AI features
* Easier future integrations
* Better scalability

---

# 9. Success Criteria

The refactor is successful when:

□ User data persists

□ Navigation uses React Router

□ Screens support lazy loading

□ Components are reusable

□ Dark mode works correctly

□ Accessibility requirements are met

□ Architecture supports future growth

---

# 10. Decision Summary

Lumi Wellness will evolve from a Figma-generated prototype into a scalable React application through incremental architectural improvements.

The goal is not to rebuild Lumi.

The goal is to give Lumi the foundation it needs to grow.

---

## End of Document
