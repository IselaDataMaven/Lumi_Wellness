# 🌸 ADR-005: LocalStorage for Client-Side Preferences

> **Architecture Decision Record**
>
> **Status:** Accepted
>
> **Date:** 2026-08-04
>
> **Project:** Lumi Wellness

---

# 1. Decision

Lumi Wellness will use browser LocalStorage for storing non-sensitive client-side preferences and lightweight application settings.

LocalStorage will not be used as a primary storage solution for sensitive user information.

---

# 2. Context

Lumi Wellness requires some information to persist between sessions without requiring a server request.

Examples include:

* Theme preference
* UI preferences
* Onboarding progress
* Non-sensitive application settings
* User interface configuration

A lightweight client-side storage solution is needed.

---

# 3. Problem Statement

The application needs a persistence mechanism that allows:

* Fast access
* Simple implementation
* Better user experience
* Reduced unnecessary requests

The solution must also respect privacy and security requirements.

---

# 4. Options Considered

---

# Option 1: Browser LocalStorage

## Advantages

✔ Built into browsers

✔ Simple API

✔ No additional dependency

✔ Persistent between sessions

✔ Works offline

---

## Disadvantages

* Limited storage capacity
* No encryption by default
* Not appropriate for sensitive data
* Available through browser scripts

---

# Option 2: SessionStorage

## Advantages

✔ Simple implementation

✔ Data automatically expires after session

---

## Disadvantages

* Data does not persist after browser closing
* Limited use cases

---

# Option 3: Backend Database

## Advantages

✔ Secure persistence

✔ Multi-device synchronization

✔ Better for user data

---

## Disadvantages

* Requires network access
* More infrastructure
* Higher complexity

---

# 5. Decision Rationale

LocalStorage was selected for lightweight client-side preferences because it provides the simplest solution while maintaining good user experience.

Sensitive and personal user information should use secure backend storage.

---

# 6. Approved LocalStorage Usage

Allowed:

```text
theme

language preference

UI settings

onboarding completion state

feature preferences
```

---

# 7. Prohibited LocalStorage Usage

Never store:

```text
passwords

authentication tokens without proper security strategy

health information

private journal entries

AI conversations containing sensitive information

personal confidential data
```

---

# 8. Storage Naming Convention

Keys should follow a consistent format:

```text
lumi.<feature>.<setting>
```

Examples:

```text
lumi.theme.preference

lumi.onboarding.completed

lumi.ui.preferences
```

---

# 9. Data Management Principles

Stored data should:

* Have clear ownership
* Be easy to remove
* Have documented purpose
* Avoid unnecessary duplication

---

# 10. Error Handling

The application should handle:

* Storage unavailable
* Storage quota exceeded
* Corrupted values
* Missing values

Fallback behavior should exist.

Example:

If theme preference cannot load:

Use system preference.

---

# 11. Privacy Considerations

Users should be able to:

* Understand stored preferences
* Reset settings
* Delete local data

Privacy controls should be clear.

---

# 12. Implementation Guidelines

Recommended abstraction:

```text
src/

├── services/

│   └── storage/

│       ├── localStorageService.js

│       └── storageKeys.js
```

Avoid direct LocalStorage calls throughout components.

---

# 13. Consequences

## Positive Consequences

Lumi gains:

* Faster startup experience
* Offline-friendly preferences
* Simple implementation
* Reduced unnecessary requests

---

## Negative Consequences

Limitations:

* No secure storage guarantee
* No synchronization across devices
* Requires migration strategy if data changes

---

# 14. Related Decisions

Related ADRs:

* ADR-003: Context and useReducer
* ADR-004: Design Tokens
* Future ADR: Authentication and Secure Storage

---

# 15. Future Evolution

LocalStorage usage may evolve with:

* IndexedDB for larger local data
* Secure storage solutions
* Offline-first architecture
* Synchronization strategies

---

# 16. Final Decision

Accepted.

Lumi Wellness will use LocalStorage only for non-sensitive client-side preferences and lightweight application configuration.

---

## End of ADR
