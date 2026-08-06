# 🌸 FOLDER_STRUCTURE.md

> **Lumi Wellness Project Structure Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines the organization structure of the Lumi Wellness repository.

The goal is to maintain:

* Clear ownership
* Easy navigation
* Scalability
* Consistent development practices

A well-organized project allows teams to collaborate efficiently.

---

# 2. Project Philosophy

Lumi Wellness is organized around product evolution.

The structure separates:

* Product decisions
* User experience
* Design system
* Architecture
* Development
* AI capabilities
* Data
* Security
* Testing
* Deployment

---

# 3. Root Structure

```text
Lumi-Wellness/

├── README.md
├── FOLDER_STRUCTURE.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── vite.config.js
├── .env.example
├── .gitignore

├── 01-Product/

├── 02-Research/

├── 03-Design/

├── 04-Architecture/

├── 05-Frontend/

├── 06-Backend/

├── 07-AI/

├── 08-Database/

├── 09-Security/

├── 10-Testing/

└── 11-Deployment/
```

---

# 4. Folder Responsibilities

---

# 01-Product

Contains product strategy and planning.

Includes:

* Product requirements
* Roadmap
* User stories
* Personas
* Feature definitions

Example:

```text
01-Product/

├── PRODUCT_REQUIREMENTS.md

├── ROADMAP.md

├── USER_STORIES.md

└── FEATURES/
```

---

# 02-Research

Contains user and market research.

Includes:

* User research
* Competitive analysis
* Interviews
* Insights

Example:

```text
02-Research/

├── USER_RESEARCH.md

├── COMPETITIVE_ANALYSIS.md

└── INSIGHTS/
```

---

# 03-Design

Contains the complete Design System.

Includes:

* Visual guidelines
* Components
* UX patterns
* Accessibility
* Figma documentation

Example:

```text
03-Design/

├── DESIGN_SYSTEM.md

├── DESIGN_TOKENS.md

├── COMPONENT_LIBRARY.md

└── ACCESSIBILITY.md
```

---

# 04-Architecture

Contains technical decisions and system design.

Includes:

* Architecture decisions
* Diagrams
* Technical documentation

Example:

```text
04-Architecture/

├── ADR/

│   ├── ADR-001-react-and-vite.md

│   ├── ADR-002-react-router.md

│   └── ADR-003-context-usereducer.md

└── ARCHITECTURE_OVERVIEW.md
```

---

# 05-Frontend

Contains the client application.

Includes:

* React components
* Pages
* Hooks
* Styles
* Frontend tests

Example:

```text
05-Frontend/

├── src/

│   ├── components/

│   ├── pages/

│   ├── hooks/

│   ├── services/

│   └── styles/

└── tests/
```

---

# 06-Backend

Contains server-side services.

Includes:

* APIs
* Business logic
* Authentication services
* Integrations

Example:

```text
06-Backend/

├── api/

├── services/

├── middleware/

└── tests/
```

---

# 07-AI

Contains artificial intelligence features.

Includes:

* AI architecture
* Prompt design
* Models
* Evaluation

Example:

```text
07-AI/

├── prompts/

├── agents/

├── models/

├── evaluations/

└── AI_DOCUMENTATION.md
```

---

# 08-Database

Contains data architecture.

Includes:

* Schemas
* Migrations
* Data models

Example:

```text
08-Database/

├── schemas/

├── migrations/

└── DATA_MODEL.md
```

---

# 09-Security

Contains security documentation.

Includes:

* Threat modeling
* Privacy
* Security practices

Example:

```text
09-Security/

├── SECURITY_POLICY.md

├── THREAT_MODEL.md

└── PRIVACY.md
```

---

# 10-Testing

Contains quality assurance documentation.

Includes:

* Test strategy
* Automation
* Reports

Example:

```text
10-Testing/

├── TEST_STRATEGY.md

├── E2E/

└── REPORTS/
```

---

# 11-Deployment

Contains deployment and operations.

Includes:

* Infrastructure
* CI/CD
* Hosting
* Monitoring

Example:

```text
11-Deployment/

├── DEPLOYMENT_GUIDE.md

├── CI_CD.md

└── ENVIRONMENT_SETUP.md
```

---

# 5. Naming Conventions

Files:

Use:

```text
UPPERCASE_WITH_UNDERSCORES.md
```

Examples:

```text
DESIGN_SYSTEM.md

API_GUIDELINES.md

SECURITY_POLICY.md
```

---

ADR files:

Use:

```text
ADR-XXX-description.md
```

Example:

```text
ADR-001-react-and-vite.md
```

---

# 6. Documentation Rules

Every major folder should contain:

* README.md
* Purpose description
* Ownership information
* Related documents

---

# 7. Growth Guidelines

New folders should only be created when:

* A clear responsibility exists
* Existing folders cannot contain the information
* The addition improves organization

Avoid unnecessary folder expansion.

---

# 8. Source Code Rules

Code should follow:

* Component separation
* Clear naming
* Reusable patterns
* Documented decisions

---

# 9. Repository Health

Regular maintenance should remove:

* Deprecated files
* Duplicate documentation
* Unused assets
* Temporary experiments

---

# 10. Final Principle

The Lumi Wellness repository should communicate the same values as the product:

🌿 Calm

🤍 Clear

✨ Organized

🌸 Human-centered

A developer should understand the project structure without needing explanation.

---

## End of Document
