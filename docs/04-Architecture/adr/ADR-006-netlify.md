# 🌸 ADR-006: Netlify as Frontend Hosting Platform

> **Architecture Decision Record**
>
> **Status:** Accepted
>
> **Date:** 2026-08-04
>
> **Project:** Lumi Wellness

---

# 1. Decision

Lumi Wellness will use Netlify as the primary hosting platform for the frontend web application.

Netlify will manage:

* Frontend deployment
* Continuous deployment
* Build automation
* Preview environments
* Static asset delivery

---

# 2. Context

Lumi Wellness requires a reliable deployment platform that supports modern frontend workflows.

The application is built with:

* React
* Vite
* Component-based architecture

The deployment solution should provide:

* Simple CI/CD
* Fast releases
* Developer-friendly workflow
* Easy rollback capabilities

---

# 3. Problem Statement

The project requires a hosting solution that supports:

* Automated deployments
* Git-based workflows
* Frontend optimization
* Environment configuration
* Production reliability

---

# 4. Options Considered

---

# Option 1: Netlify

## Advantages

✔ Excellent React and Vite support

✔ Automatic deployments from Git

✔ Preview deployments

✔ Simple configuration

✔ Global CDN

✔ Easy rollback workflow

---

## Disadvantages

* Primarily optimized for frontend and serverless workloads
* Requires additional services for complex backend needs

---

# Option 2: Vercel

## Advantages

✔ Strong frontend platform

✔ Excellent Next.js integration

✔ Fast deployments

---

## Disadvantages

* More focused on Vercel ecosystem
* Less aligned if backend services are managed separately

---

# Option 3: AWS S3 + CloudFront

## Advantages

✔ Full cloud control

✔ Enterprise scalability

✔ Deep AWS integration

---

## Disadvantages

* More configuration required
* Higher operational complexity
* Requires more infrastructure management

---

# 5. Decision Rationale

Netlify was selected because it provides the best balance between:

* Development speed
* Deployment simplicity
* Frontend performance
* Team productivity

It allows Lumi Wellness to focus on building user experiences instead of managing infrastructure.

---

# 6. Deployment Architecture

```text id="8v3z7a"
Developer

↓

Git Repository

↓

Netlify Build

↓

Vite Production Build

↓

Netlify CDN

↓

User Browser
```

---

# 7. Build Configuration

Expected build process:

```text id="0b6d9k"
Install dependencies

↓

Run tests

↓

Generate production build

↓

Deploy assets
```

---

# 8. Environment Variables

Sensitive values must never be committed.

Examples:

```text id="9d8q2x"
API_URL

AI_SERVICE_URL

AUTH_CONFIGURATION

FEATURE_FLAGS
```

Environment variables should be managed through Netlify configuration.

---

# 9. Deployment Branch Strategy

Recommended:

```text id="f3k7va"
main

↓

Production deployment


develop

↓

Preview environment
```

---

# 10. Preview Environments

Every important change should be validated through previews.

Used for:

* UX review
* QA testing
* Stakeholder feedback

---

# 11. Performance Requirements

Deployment should consider:

□ Optimized assets

□ Compressed files

□ Fast loading

□ Proper caching

□ Responsive delivery

---

# 12. Security Considerations

The deployment must include:

* HTTPS enabled
* Secure headers
* Protected environment variables
* Dependency monitoring

---

# 13. Consequences

## Positive Consequences

Lumi gains:

* Faster deployment cycle
* Easy collaboration
* Simple rollback
* Better frontend workflow

---

## Negative Consequences

Considerations:

* Backend services require separate infrastructure
* Platform dependency exists

---

# 14. Related Decisions

Related ADRs:

* ADR-001: React and Vite
* ADR-002: React Router
* ADR-004: Design Tokens

Future ADRs:

* Backend hosting
* API architecture
* Authentication
* Database strategy

---

# 15. Review

This decision should be reviewed if:

* Backend becomes tightly coupled with frontend
* Infrastructure requirements increase
* Enterprise deployment requirements change

---

# 16. Final Decision

Accepted.

Lumi Wellness will use Netlify as the frontend hosting and deployment platform.

---

## End of ADR
