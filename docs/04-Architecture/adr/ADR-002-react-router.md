# 🌸 ADR-002: React Router for Application Navigation

> **Architecture Decision Record**
>
> **Status:** Accepted
>
> **Date:** 2026-08-04
>
> **Project:** Lumi Wellness

---

# 1. Decision

Lumi Wellness will use React Router as the routing solution for the frontend application.

React Router will manage:

* Page navigation
* URL structure
* Nested layouts
* Protected routes
* Navigation states

---

# 2. Context

Lumi Wellness requires a predictable navigation system capable of supporting multiple user experiences.

The application may include:

* User onboarding
* Dashboard
* Wellness journal
* AI conversations
* Activities
* Progress tracking
* Settings
* Privacy controls

A scalable routing solution is required to maintain a clear application structure.

---

# 3. Problem Statement

The application needs a routing strategy that supports:

* Multiple screens
* Deep linking
* Browser navigation
* Authentication flows
* Future feature expansion

The solution should integrate naturally with React and maintain developer productivity.

---

# 4. Options Considered

---

# Option 1: React Router

## Advantages

✔ Official ecosystem standard for React applications

✔ Large community support

✔ Supports nested routes

✔ Supports protected routes

✔ Flexible architecture

✔ Good integration with React components

---

## Disadvantages

* Requires defining routing conventions
* Additional library dependency

---

# Option 2: Manual State-Based Navigation

## Advantages

✔ Simple for very small applications

---

## Disadvantages

✘ Does not scale

✘ Poor browser history support

✘ Difficult URL management

✘ Harder maintenance

---

# Option 3: Next.js Routing

## Advantages

✔ Built-in routing system

✔ Server-side rendering capabilities

---

## Disadvantages

* Introduces a different application architecture
* More complexity than currently required
* Not aligned with current Vite decision

---

# 5. Decision Rationale

React Router was selected because it provides:

* A natural extension of the React ecosystem
* Clear navigation patterns
* Scalability for future Lumi Wellness features
* Compatibility with the existing React + Vite architecture

---

# 6. Consequences

## Positive Consequences

Lumi Wellness gains:

* Predictable navigation
* Better URL organization
* Easier feature expansion
* Support for protected user areas
* Better developer experience

---

## Negative Consequences

The project must define:

* Route naming conventions
* Authentication guards
* Loading behavior
* Error handling routes

---

# 7. Routing Principles

Routes should be:

## Clear

Example:

```text
/journal

/activities

/progress

/settings
```

---

## Predictable

Users should understand where they are.

---

## Maintainable

Routes should represent user experiences, not technical implementation.

Avoid:

```text
/component123
/pageA
```

Prefer:

```text
/wellness/journal
```

---

# 8. Recommended Route Structure

```text
src/

├── routes/
│
├── public/
│   ├── login
│   └── signup
│
├── protected/
│   ├── dashboard
│   ├── journal
│   ├── activities
│   ├── progress
│   └── settings
│
└── error/
    ├── not-found
    └── server-error
```

---

# 9. Protected Routes

Private experiences should require authentication.

Examples:

Protected:

* Personal journal
* AI conversations
* Wellness history
* Personal settings

Public:

* Landing page
* Login
* Signup
* Help pages

---

# 10. Navigation and UX Requirements

Routing implementation must respect:

* Accessibility
* Browser back button behavior
* Loading states
* Error states
* Responsive navigation

---

# 11. Accessibility Requirements

Routes must support:

□ Meaningful page titles

□ Screen reader announcements

□ Keyboard navigation

□ Focus management after navigation

---

# 12. Related Decisions

Future ADRs should define:

* Authentication provider
* State management
* API architecture
* Data persistence
* Error boundary strategy

---

# 13. Review

This decision should be reviewed if:

* The application moves to a different rendering architecture
* Mobile native applications become the primary platform
* Routing requirements significantly change

---

# 14. Final Decision

Accepted.

Lumi Wellness will use React Router as the frontend navigation solution.

---

## End of ADR
