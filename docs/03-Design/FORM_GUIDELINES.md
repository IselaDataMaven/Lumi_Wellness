# 🌸 FORM_GUIDELINES.md

> **Lumi Wellness Form Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines how forms should be designed and implemented across Lumi Wellness.

Forms are moments where users share information with Lumi.

The experience should feel:

🌿 Simple

🤍 Safe

✨ Clear

🌸 Respectful

---

# 2. Form Philosophy

Forms should help users complete meaningful actions.

They should never feel like administrative tasks.

Every field should answer:

"Does this information improve the user's experience?"

If not, remove it.

---

# 3. Form Principles

## Ask only what matters

Avoid unnecessary questions.

Every field should have a clear purpose.

---

## Explain why information is requested

Especially for personal information.

Example:

Good:

"We ask about your preferences so Lumi can suggest activities that fit you."

Avoid:

"Required field."

---

## Reduce cognitive load

Prefer:

* Short forms
* Progressive disclosure
* Clear sections

Avoid:

* Long questionnaires
* Too many fields at once

---

# 4. Form Layout

Forms should use:

## One-column layout

Preferred for:

* Mobile
* Personal information
* Wellness reflections

---

## Grouped sections

Use sections when information is complex.

Example:

```text id="7a2r81"
Personal Information

↓

Wellness Preferences

↓

Notification Settings
```

---

# 5. Field Structure

Every field should include:

## Label

Always visible.

Never rely only on placeholders.

---

## Input Area

Should be:

* Large enough
* Easy to interact with
* Clearly defined

---

## Helper Text

Used when additional context helps.

Example:

"Choose activities that feel comfortable for you."

---

## Validation Message

Explain problems clearly.

---

# 6. Input Guidelines

Minimum height:

48 px

Touch target:

44 × 44 px minimum

---

Inputs should support:

* Clear focus state
* Error state
* Success state
* Disabled state

---

# 7. Form States

Every form component must define:

## Default

Normal state.

---

## Focus

Shows active interaction.

---

## Filled

User has entered information.

---

## Error

Explains what needs attention.

---

## Disabled

Explains why unavailable.

---

## Success

Confirms completion.

---

# 8. Required Fields

Use required fields carefully.

Avoid marking everything required.

---

Preferred:

"Optional"

when information is not essential.

---

# 9. Error Handling

Errors should:

* Explain the problem
* Preserve user input
* Suggest a solution

---

Bad:

"Invalid value."

Good:

"Please enter a valid email address."

---

# 10. Sensitive Information

When requesting personal information:

Always explain:

* Why it is needed
* How it is used
* User control options

---

Users should never feel pressured to share.

---

# 11. Wellness Questions

Wellness forms should feel conversational.

Prefer:

"How has your energy been today?"

Avoid:

"Rate your energy dysfunction level."

---

Questions should:

* Avoid judgment
* Avoid assumptions
* Allow personal interpretation

---

# 12. Multi-Step Forms

For longer experiences:

Use:

* Progress indicator
* Save progress
* Back navigation

---

Example:

```text id="d2kv3s"
Step 2 of 5

Wellness Goals

[Continue]
```

---

# 13. AI-Assisted Forms

When Lumi AI helps complete forms:

AI should:

* Explain questions
* Offer examples
* Respect user decisions

AI should never:

* Fill sensitive information without approval
* Assume user preferences

---

# 14. Buttons in Forms

Primary action:

Clear completion step.

Examples:

* Save Preferences
* Create Account
* Start Journey

Avoid:

* Submit
* Process

---

# 15. Accessibility

Forms must support:

□ Keyboard navigation

□ Screen readers

□ Proper labels

□ Error announcements

□ Focus management

□ Large touch targets

---

# 16. Mobile Form Guidelines

Mobile forms should:

* Avoid horizontal scrolling
* Use large inputs
* Minimize typing
* Use appropriate keyboards

Examples:

Email field → email keyboard

Number field → numeric keyboard

---

# 17. Form Checklist

Before release:

□ Every field has a purpose

□ Labels are visible

□ Validation is clear

□ Errors preserve data

□ Mobile tested

□ Accessibility tested

□ Privacy considered

□ Dark mode reviewed

---

# 18. Future Evolution

Forms may evolve with:

* Voice input
* AI-assisted completion
* Adaptive questions
* Personalized experiences

Every form should preserve:

Trust

Simplicity

Respect

---

## End of Document
