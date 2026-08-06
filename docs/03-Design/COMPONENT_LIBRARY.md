# 🌸 COMPONENT_LIBRARY.md

> **Lumi Wellness Component Library**
>
> **Version:** 1.0.0
>
> **Status:** Living Document

---

# 1. Purpose

This document defines the reusable components that make up the Lumi Wellness interface.

Components are designed to provide:

* Consistency
* Accessibility
* Scalability
* Faster development
* Predictable user experiences

Every component must follow:

* Design tokens
* Accessibility guidelines
* Responsive behavior
* Content guidelines

---

# 2. Component Principles

Every component should:

✔ Have one clear purpose

✔ Support all interaction states

✔ Be accessible by default

✔ Work across screen sizes

✔ Use design tokens

✔ Provide meaningful feedback

---

# 3. Component Anatomy

Every component documentation should include:

## Purpose

Why this component exists.

## Usage

When to use it.

## Anatomy

Internal structure.

## States

Possible interactions.

## Accessibility

Requirements.

## Responsive Behavior

How it adapts.

---

# 4. Buttons

Buttons represent actions.

They should always communicate:

"What happens next?"

---

## Button Types

### Primary Button

Purpose:

Main action.

Examples:

* Start Activity
* Save Journal
* Continue

Style:

* Filled background
* High contrast
* Strong emphasis

---

### Secondary Button

Purpose:

Alternative action.

Style:

* Outline
* Medium emphasis

---

### Ghost Button

Purpose:

Low priority actions.

Style:

* Transparent
* Text focused

---

### Danger Button

Purpose:

Destructive actions.

Examples:

* Delete
* Remove account

---

## Button Sizes

| Size   | Height | Usage             |
| ------ | -----: | ----------------- |
| Small  |  36 px | Compact actions   |
| Medium |  48 px | Default           |
| Large  |  56 px | Important actions |

---

## Button States

Required:

* Default
* Hover
* Focus
* Pressed
* Disabled
* Loading
* Success

---

# 5. Cards

Cards group related information.

Common uses:

* Wellness activities
* Mood tracking
* Progress
* Recommendations
* Journal entries

---

## Card Structure

Padding:

24 px

Internal spacing:

16 px

Section spacing:

32 px

---

## Card Elements

Possible elements:

* Icon
* Title
* Description
* Metadata
* Action
* Progress indicator

---

## Card States

* Default
* Hover
* Selected
* Completed
* Locked

---

# 6. Input Fields

Inputs collect user information.

Examples:

* Journal entries
* Profile information
* Goals

---

## Input Structure

Required:

* Label
* Field
* Helper text
* Error message

---

## Input States

* Default
* Focus
* Filled
* Error
* Disabled
* Success

---

## Rules

Minimum height:

48 px

Touch target:

44 × 44 px

---

# 7. Mood Selector

Purpose:

Allow users to express emotional state.

---

## Design Requirements

Should feel:

* Friendly
* Safe
* Non-judgmental

---

Example:

```
How are you feeling today?

😊 Great

🙂 Good

😐 Neutral

😔 Difficult

😢 Very difficult
```

---

States:

* Default
* Selected
* Disabled

---

# 8. Progress Components

Used for:

* Habits
* Wellness goals
* Personal growth

---

## Progress Ring

Displays:

* Completion percentage
* Goals
* Activities

Rules:

Avoid creating competition.

Focus on personal progress.

---

## Progress Bar

Used for:

* Sessions
* Exercises
* Guided activities

---

# 9. Navigation

Navigation helps users move through Lumi.

---

## Mobile Navigation

Pattern:

Bottom Navigation

Maximum:

5 items

Example:

```
Home

Journey

Activities

Journal

Profile
```

---

## Desktop Navigation

Pattern:

Sidebar

---

# 10. AI Companion Components

## AI Message Bubble

Purpose:

Display Lumi AI responses.

---

Requirements:

* Clear separation from user messages
* Friendly appearance
* Readable spacing

---

States:

* Sending
* Loading
* Complete
* Error

---

## AI Suggestion Chips

Used for:

* Quick replies
* Suggested actions

Example:

```
🌿 Start breathing exercise

📖 Write journal entry

💬 Talk about my day
```

---

# 11. Modal Dialog

Used for:

* Confirmations
* Important information

---

Rules:

Avoid unnecessary interruptions.

Always provide:

* Clear title
* Explanation
* Action buttons

---

States:

* Open
* Closing
* Error

---

# 12. Toast Notifications

Used for:

Temporary feedback.

Examples:

Success:

"Your journal was saved 🌿"

Error:

"We couldn't save your entry."

---

Duration:

3-5 seconds

---

# 13. Empty States

Every empty screen should contain:

* Illustration
* Explanation
* Primary action

Example:

```
🌱

Your journey starts here.

Create your first wellness goal.

[Create Goal]
```

---

# 14. Loading Components

Never show blank screens.

Use:

* Skeleton loaders
* Progress indicators
* Gentle animations

---

# 15. Component Accessibility

Every component requires:

✔ Keyboard navigation

✔ Visible focus

✔ Screen reader labels

✔ Color contrast

✔ Touch-friendly size

---

# 16. Component Checklist

Before adding a component:

□ Purpose defined

□ Design tokens used

□ All states designed

□ Responsive behavior defined

□ Accessibility reviewed

□ Developer implementation tested

---

# 17. Future Components

Possible additions:

* AI Wellness Coach
* Meditation Player
* Breathing Exercise Timer
* Habit Tracker
* Wellness Calendar
* Community Support Components

---

## End of Document
