# 🌸 MOTION.md

> **Lumi Wellness Motion Guidelines**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines the motion principles and animation standards for Lumi Wellness.

Motion should help users understand:

* What changed
* What happened
* Where to focus
* How the interface responds

Animation should create confidence, not distraction.

---

# 2. Motion Philosophy

## Movement should feel like breathing.

Lumi Wellness uses motion to create:

🌿 Calm

🤍 Connection

✨ Understanding

🌸 Encouragement

Motion should never compete with the user's attention.

---

# 3. Core Motion Principles

## Purposeful Motion

Every animation must answer:

"Why does this move?"

Good reasons:

✔ Provide feedback

✔ Explain a transition

✔ Guide attention

✔ Create emotional connection

Avoid animation only for decoration.

---

## Gentle Over Dramatic

Prefer:

* Smooth transitions
* Soft fades
* Natural movement

Avoid:

* Fast jumps
* Flashing effects
* Excessive bouncing

---

## Respect User Control

Motion should never:

* Block interaction
* Delay important actions
* Create confusion

---

# 4. Timing System

Use standardized durations.

| Token         | Duration | Usage               |
| ------------- | -------: | ------------------- |
| motion-fast   |   150 ms | Small interactions  |
| motion-normal |   250 ms | Default transitions |
| motion-slow   |   350 ms | Large transitions   |

---

# 5. Easing System

Default easing:

```text id="n1v4is"
ease-out
```

Used for:

* Opening elements
* Hover states
* Feedback

---

## Smooth Entrance

Recommended:

```text id="ahp9mz"
cubic-bezier(0.16, 1, 0.3, 1)
```

Used for:

* Cards
* Modals
* Pages

---

# 6. Microinteractions

Small animations communicate system feedback.

---

## Button Interaction

States:

Default

↓

Hover

↓

Pressed

↓

Completed

Example:

* Slight scale increase
* Soft color transition

Duration:

150 ms

---

# 7. Card Animations

Cards should appear naturally.

Recommended:

* Fade in
* Small upward movement

Example:

```text id="w6nq8f"
Opacity:

0 → 100%

Movement:

8 px → 0 px
```

Duration:

250 ms

---

# 8. Loading Animations

Never show empty screens.

Preferred:

## Skeleton Loading

For:

* Dashboards
* Lists
* Profiles

---

## Gentle Progress

For:

* Wellness activities
* AI responses

---

## Breathing Animation

For:

* Meditation
* Relaxation exercises

Example:

```text id="7n6q8q"
Expand

↓

Hold

↓

Contract
```

Animation should mimic calm breathing.

---

# 9. AI Companion Motion

The Lumi AI companion should feel alive but not distracting.

---

## Message Appearance

Recommended:

* Fade in
* Small movement

Duration:

250 ms

---

## Thinking State

Avoid:

"Typing forever"

Prefer:

A calm indicator:

Example:

```text id="4q0t0g"
✨ Lumi is preparing a response...
```

---

## AI Suggestions

Suggestion chips may:

* Fade in
* Appear sequentially

Avoid:

Constant movement.

---

# 10. Navigation Motion

Transitions should communicate location changes.

Examples:

Page transition:

* Fade
* Slide
* Cross dissolve

Duration:

250-350 ms

---

# 11. Success Feedback

Positive moments should feel rewarding.

Examples:

* Activity completed
* Goal achieved
* Journal saved

Use:

✔ Soft celebration

✔ Gentle particles

✔ Small icon animation

Avoid:

✘ Loud effects

✘ Excessive rewards

---

# 12. Error Feedback

Errors should feel calm.

Avoid:

* Shaking aggressively
* Flashing red screens

Prefer:

* Small movement
* Clear message
* Helpful action

---

# 13. Scroll Behavior

Scrolling should feel natural.

Avoid:

* Forced animations
* Automatic movement

Use:

* Smooth scrolling
* Progressive content reveal

---

# 14. Accessibility

Motion must respect:

```text
prefers-reduced-motion
```

When enabled:

Reduce:

* Transitions
* Decorative animations
* Continuous movement

Maintain:

* Important feedback
* State changes

---

# 15. Motion Rules

Never:

✘ Animate everything

✘ Use motion to hide poor UX

✘ Create distracting loops

✘ Delay user actions

---

Always:

✔ Explain changes

✔ Provide feedback

✔ Keep motion subtle

✔ Respect user attention

---

# 16. Motion Checklist

Before release:

□ Purpose is clear

□ Duration follows tokens

□ Works on mobile

□ Reduced motion supported

□ Does not block interaction

□ Tested for accessibility

---

# 17. Future Evolution

Future motion experiences may include:

* Personalized calming animations
* Guided breathing visuals
* AI companion expressions
* Wellness journey transitions

All motion should preserve:

Calm

Trust

Human connection

---

## End of Document
