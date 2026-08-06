# 🌸 ADR-003: React Context and useReducer for Application State

> **Architecture Decision Record**
>
> **Status:** Accepted
>
> **Date:** 2026-08-04
>
> **Project:** Lumi Wellness

---

# 1. Decision

Lumi Wellness will use React Context API combined with useReducer for managing shared application state.

This approach will be used for global states that affect multiple areas of the application.

---

# 2. Context

Lumi Wellness requires shared state management for experiences such as:

* User session information
* User preferences
* Wellness settings
* Application configuration
* Theme preferences
* AI interaction preferences

The solution should remain simple, maintainable, and aligned with the React ecosystem.

---

# 3. Problem Statement

The application requires a predictable way to manage shared data.

The chosen solution must balance:

* Simplicity
* Scalability
* Developer experience
* Performance
* Maintainability

---

# 4. Options Considered

---

# Option 1: React Context + useReducer

## Advantages

✔ Built into React

✔ No additional dependency

✔ Clear state transitions

✔ Easy to understand

✔ Good for application-level state

✔ Works well with TypeScript

---

## Disadvantages

* Requires careful optimization for large state trees
* Not ideal for highly dynamic server data

---

# Option 2: Redux Toolkit

## Advantages

✔ Mature ecosystem

✔ Strong debugging tools

✔ Good for very large applications

---

## Disadvantages

* Additional complexity
* More boilerplate
* More infrastructure than currently required

---

# Option 3: Zustand

## Advantages

✔ Lightweight

✔ Simple API

✔ Good performance

---

## Disadvantages

* Additional dependency
* Less aligned with keeping the initial architecture minimal

---

# 5. Decision Rationale

React Context + useReducer was selected because Lumi Wellness currently requires predictable application state without introducing unnecessary complexity.

This approach provides:

* Clear state management patterns
* Native React integration
* Easier onboarding for developers
* Good foundation for future growth

---

# 6. State Management Principles

Global state should contain only shared application information.

Avoid storing:

* Temporary UI states
* Form input values
* Component-specific information

---

# 7. Recommended State Separation

## Global State

Examples:

```text id="0v4h93"
User

Preferences

Theme

Authentication

AI Settings

App Configuration
```

---

## Local State

Examples:

```text id="a8b2pm"
Modal visibility

Input values

Animations

Temporary selections
```

---

## Server State

Future consideration:

Examples:

```text id="m3w8s9"
Journal entries

Activities

Progress data

AI history
```

---

# 8. Recommended Structure

```text id="q7s9dc"
src/

├── context/

│   ├── AuthContext.jsx

│   ├── UserContext.jsx

│   ├── ThemeContext.jsx

│   └── AppContext.jsx


├── reducers/

│   ├── authReducer.js

│   ├── userReducer.js

│   └── appReducer.js
```

---

# 9. Reducer Principles

Reducers should:

* Be predictable
* Avoid side effects
* Use clear action names
* Keep state transitions explicit

Example:

```text id="g4k1qz"
SET_USER

UPDATE_PREFERENCES

TOGGLE_THEME

LOGOUT_USER
```

---

# 10. Performance Guidelines

To prevent unnecessary renders:

Use:

* Context separation
* Memoization when needed
* Small state providers

Avoid:

* One giant global context
* Storing frequently changing values globally

---

# 11. Accessibility Considerations

State changes affecting users must provide:

□ Visual feedback

□ Screen reader announcements when needed

□ Predictable navigation behavior

---

# 12. AI Integration Considerations

AI-related state should include:

* Conversation status
* User preferences
* Consent settings

AI state should not expose sensitive information unnecessarily.

---

# 13. Consequences

## Positive Consequences

Lumi gains:

* Simple architecture
* Lower dependency complexity
* Clear React patterns
* Easier maintenance

---

## Negative Consequences

Future scaling may require:

* Server state management solution
* More advanced caching
* State optimization

---

# 14. Future Review

This decision should be reviewed if:

* Application state becomes highly complex
* Real-time collaboration is introduced
* Large-scale data synchronization is required

---

# 15. Final Decision

Accepted.

Lumi Wellness will use React Context API with useReducer for global application state management.

---

## End of ADR
