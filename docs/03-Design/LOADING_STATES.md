# 🌸 LOADING_STATES.md

> **Lumi Wellness Loading States Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines how loading experiences should be designed across Lumi Wellness.

Loading states communicate that the system is working and help users understand what is happening.

The goal is to make waiting feel:

🌿 Calm

🤍 Clear

✨ Reassuring

🌸 Natural

---

# 2. Loading Philosophy

A loading state is not empty time.

It is part of the user's journey.

Lumi should never make users wonder:

"Is something broken?"

Instead, users should understand:

"Something is happening."

---

# 3. Loading Principles

## Provide feedback immediately

Every action should respond.

Avoid:

* Frozen screens
* No indication of progress
* Silent waiting

---

## Match the user's expectation

Small action:

→ Small feedback

Large process:

→ Progress information

---

## Reduce uncertainty

When possible communicate:

* What is loading
* Why it takes time
* What happens next

---

# 4. Loading Types

## Immediate Loading

Duration:

Less than 1 second

Use:

* Button feedback
* Small interactions
* State changes

Example:

Button changes to loading state.

---

## Short Loading

Duration:

1–3 seconds

Use:

* Spinners
* Skeleton elements
* Subtle animations

---

## Long Loading

Duration:

More than 3 seconds

Use:

* Progress indicators
* Helpful messages
* Cancel option when appropriate

---

# 5. Loading Patterns

## Skeleton Screens

Preferred for:

* Content lists
* Journal history
* Activity cards
* Dashboard sections

Benefits:

* Shows structure
* Reduces perceived waiting time
* Feels predictable

---

## Progress Indicators

Use when progress can be measured.

Examples:

* Uploading
* Processing
* Setup flows

---

## Spinners

Use for:

* Short operations
* Button actions
* Small components

Avoid using full-screen spinners unnecessarily.

---

# 6. AI Loading States

AI interactions require special consideration.

Avoid:

"Waiting..."

Prefer:

"Thinking about your reflection..."

"Preparing a personalized suggestion..."

---

AI loading should:

* Set expectations
* Feel conversational
* Avoid pretending human emotions

---

# 7. Loading Messages

Messages should be:

Short

Helpful

Calm

Examples:

Good:

"Preparing your wellness summary."

"Creating your personalized activity."

"Saving your reflection."

---

Avoid:

"Processing request."

"Loading data."

---

# 8. Button Loading States

Buttons should:

Before:

"Save Entry"

During:

"Saving..."

After:

"Saved"

---

Rules:

* Prevent duplicate actions
* Maintain button position
* Provide confirmation

---

# 9. Full Page Loading

Use only when necessary.

Requirements:

Include:

* Brand identity
* Clear purpose
* Progress indication when possible

Avoid:

Blank screens.

---

# 10. Loading Animation Guidelines

Animations should be:

✔ Subtle

✔ Smooth

✔ Short

✔ Purposeful

Avoid:

✘ Excessive movement

✘ Distracting effects

✘ Infinite playful animations

---

Recommended duration:

150ms–350ms transitions

---

# 11. Accessibility

Loading states must support:

□ Screen reader announcements

□ Reduced motion preferences

□ Visible status changes

□ Keyboard accessibility

□ Clear focus management

---

# 12. Error During Loading

If loading fails:

Do not leave the user waiting.

Provide:

* Explanation
* Recovery option
* Alternative action

Example:

"We couldn't load your activities. Please try again."

[Retry]

---

# 13. Offline Loading

When offline:

Explain clearly.

Example:

"You're offline. Some features will return when you're connected."

---

# 14. Loading Checklist

Before release:

□ Every async action has feedback

□ No blank screens exist

□ Loading duration is appropriate

□ AI states are designed

□ Error recovery exists

□ Accessibility tested

□ Dark mode reviewed

---

# 15. Future Evolution

Loading experiences may evolve with:

* AI-generated progress messages
* Predictive loading
* Offline-first experiences
* Adaptive feedback

Every loading state should preserve:

Trust

Calm

Clarity

---

## End of Document
