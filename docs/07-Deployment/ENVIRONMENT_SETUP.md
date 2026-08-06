# 🌸 ENVIRONMENT_SETUP.md

> **Lumi Wellness Development Environment Setup**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document explains how to configure a local development environment for Lumi Wellness.

The goal is to provide a consistent setup experience for all contributors.

---

# 2. Development Philosophy

A good environment setup should be:

🌿 Simple

🤍 Reproducible

✨ Documented

🌸 Reliable

Every developer should be able to start contributing without unnecessary friction.

---

# 3. System Requirements

Recommended minimum requirements:

## Operating System

Supported:

* Windows 11
* macOS
* Linux

---

## Hardware

Recommended:

```text id="f3m8vk"
CPU: Modern multi-core processor

RAM: 8 GB minimum

Storage: 5 GB available space
```

---

# 4. Required Software

Install:

## Node.js

Required for frontend development.

Recommended:

```text id="p7v2mq"
Node.js LTS version
```

Verify:

```bash
node --version

npm --version
```

---

## Git

Required for version control.

Verify:

```bash
git --version
```

---

## Code Editor

Recommended:

* Visual Studio Code

Useful extensions:

* ESLint
* Prettier
* Git integration
* React developer tools

---

# 5. Repository Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate:

```bash
cd lumi-wellness
```

---

# 6. Install Dependencies

Install project dependencies:

```bash
npm install
```

This installs:

* React dependencies
* Build tools
* Development utilities

---

# 7. Environment Variables

Create local environment configuration.

Example:

```text id="k5w9nd"
.env.local
```

Never commit environment files containing secrets.

---

Example structure:

```env id="j8q2mv"
VITE_API_URL=

VITE_AI_SERVICE_URL=

VITE_APP_ENV=development
```

---

# 8. Available Environments

Lumi Wellness uses:

---

# Development

Purpose:

Daily development.

Characteristics:

* Local execution
* Debug enabled
* Test configuration

---

# Staging

Purpose:

Release validation.

Characteristics:

* Production-like environment
* QA testing
* Feature validation

---

# Production

Purpose:

Real user experience.

Characteristics:

* Optimized build
* Monitoring enabled
* Secure configuration

---

# 9. Running the Application

Start development server:

```bash
npm run dev
```

Expected result:

```text id="m7p3xz"
Local development server running
```

---

# 10. Production Build

Generate production assets:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 11. Recommended Project Checks

Before creating a Pull Request:

Run:

```bash
npm run lint

npm run test

npm run build
```

---

# 12. Local Development Guidelines

Developers should:

* Follow Design System rules
* Use reusable components
* Keep dependencies updated
* Document architectural decisions

---

# 13. Common Setup Issues

---

## Dependency Problems

Solution:

Remove dependencies and reinstall.

Example:

```bash
rm -rf node_modules

npm install
```

---

## Environment Variables Not Loading

Check:

* File name
* Variable prefix
* Restart development server

---

## Build Failures

Review:

* Console errors
* Dependency versions
* Configuration files

---

# 14. Security Rules

Never store locally:

* Passwords
* API secrets
* Private user information
* Authentication credentials

Use secure environment configuration.

---

# 15. PWA Development

When testing PWA features verify:

□ HTTPS behavior

□ Manifest configuration

□ Service worker

□ Offline mode

□ Installation flow

---

# 16. AI Development Setup

For AI features verify:

* Required environment variables
* API availability
* Prompt configuration
* Testing limits

---

# 17. Updating Dependencies

Before updating packages:

1. Review impact

2. Test locally

3. Update documentation if needed

4. Validate production build

---

# 18. Troubleshooting Process

When problems appear:

1. Read error message

2. Check documentation

3. Search existing issues

4. Reproduce problem

5. Document solution

---

# 19. Future Improvements

Environment setup may include:

* Docker configuration
* Development containers
* Automated setup scripts
* Cloud development environments

---

# Final Principle

A good development environment allows creators to focus on building Lumi Wellness instead of fighting configuration problems.

---

## End of Document
