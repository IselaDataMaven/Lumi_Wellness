# 🌸 ADR-004: Design Tokens as the Single Source of Truth

> **Architecture Decision Record**
>
> **Status:** Accepted
>
> **Date:** 2026-08-04
>
> **Project:** Lumi Wellness

---

# 1. Decision

Lumi Wellness will use Design Tokens as the single source of truth for visual design values.

Design Tokens will define:

* Colors
* Typography
* Spacing
* Border radius
* Shadows
* Motion values
* Breakpoints
* Component variables

---

# 2. Context

Lumi Wellness requires consistency between:

* Figma designs
* React components
* Documentation
* Future platforms

As the product grows, manually managing visual values creates inconsistency.

A centralized system is required to maintain a coherent experience.

---

# 3. Problem Statement

Without a token-based system, the product may experience:

* Different colors across screens
* Inconsistent spacing
* Duplicate values
* Difficult redesign processes
* Design-development mismatch

---

# 4. Options Considered

---

# Option 1: Design Tokens

## Advantages

✔ Single source of truth

✔ Improves consistency

✔ Supports scaling

✔ Bridges design and development

✔ Easier theme management

✔ Supports dark mode

---

## Disadvantages

* Requires initial setup
* Requires documentation discipline

---

# Option 2: Hardcoded CSS Values

## Advantages

✔ Simple initially

---

## Disadvantages

✘ Creates inconsistency

✘ Harder maintenance

✘ Difficult global changes

✘ Poor scalability

---

# Option 3: Component-Level Values Only

## Advantages

✔ Components can be self-contained

---

## Disadvantages

✘ Creates duplication

✘ Reduces system visibility

✘ Harder design evolution

---

# 5. Decision Rationale

Design Tokens were selected because they allow Lumi Wellness to maintain a consistent visual language while supporting future growth.

Tokens create a shared language between:

Designers

Developers

Product Managers

QA Teams

---

# 6. Token Categories

Lumi Wellness tokens include:

---

## Color Tokens

Examples:

```text id="2g1d8a"
color.primary

color.secondary

color.background

color.surface

color.error
```

---

## Typography Tokens

Examples:

```text id="x7p3ka"
font.heading

font.body

font.caption
```

---

## Spacing Tokens

Examples:

```text id="j8f2rm"
spacing.xs

spacing.sm

spacing.md

spacing.lg

spacing.xl
```

---

## Radius Tokens

Examples:

```text id="q5w9vc"
radius.small

radius.medium

radius.large
```

---

## Motion Tokens

Examples:

```text id="r3k6mz"
motion.fast

motion.normal

motion.slow
```

---

# 7. Implementation Strategy

Recommended structure:

```text id="6b0f9x"
src/

├── styles/

│   ├── tokens/

│   │   ├── colors.css

│   │   ├── spacing.css

│   │   ├── typography.css

│   │   ├── motion.css

│   │   └── index.css
```

---

# 8. Usage Rules

Components must:

✔ Use tokens instead of hardcoded values

✔ Follow documented scales

✔ Request new tokens when needed

---

Avoid:

```css
padding: 17px;

color: #AABBCC;
```

Prefer:

```css
padding: var(--spacing-md);

color: var(--color-primary);
```

---

# 9. Theme Support

Design Tokens must support:

* Light mode
* Dark mode
* Future themes

Theme changes should happen through token updates, not component rewrites.

---

# 10. Design and Development Workflow

The expected workflow:

```text id="5l8h2k"
Design Token Update

↓

Figma Update

↓

Code Token Update

↓

Component Validation

↓

QA Review
```

---

# 11. Consequences

## Positive Consequences

Lumi gains:

* Consistent UI
* Faster iteration
* Easier maintenance
* Better collaboration
* Scalable design foundation

---

## Negative Consequences

Requires:

* Token governance
* Documentation updates
* Team discipline

---

# 12. Related Documents

Related Design documents:

* DESIGN_TOKENS.md
* COLOR_SYSTEM.md
* TYPOGRAPHY.md
* COMPONENT_LIBRARY.md

---

# 13. Future Evolution

Future improvements may include:

* Automated token synchronization
* Multi-platform tokens
* Native mobile support
* Advanced theming

---

# 14. Final Decision

Accepted.

Lumi Wellness will use Design Tokens as the foundation for visual consistency across the product.

---

## End of ADR
