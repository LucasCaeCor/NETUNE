# NEXT_STEPS.md

# NETUNE — Next Steps

## Objective of This File

This file defines the immediate execution priorities for NETUNE after the MVP technical validation.

The goal is to prevent random work and keep the project focused on the most valuable next steps.

---

## Current Stage

NETUNE has completed the **technical validation phase**.

The next stage is:

**productization and early adoption**

This means making the tool easier to install, easier to understand, and easier to recommend.

---

## Priority Order

## Priority 1 — Improve Installation Experience

### Goal

Reduce friction between discovering NETUNE and using it.

### Why it matters

If installation is annoying, adoption dies before value is perceived.

### Desired outcomes

* install in under 2 minutes
* minimal manual steps
* clear README instructions
* stable install flow

### Work items

* review and simplify `install.sh`
* ensure required folders are copied correctly
* make README installation steps extremely clear
* verify install in a fresh test repository
* remove unnecessary setup steps where possible

---

## Priority 2 — Improve Error Message UX

### Goal

Make rule failures useful, not just blocking.

### Why it matters

A blocked PR without a clear explanation feels punitive.
A blocked PR with explanation feels valuable.

### Desired outcomes

Every important rule should communicate:

* what failed
* why it failed
* how to fix it

### Work items

* rewrite rule messages to be clear and direct
* remove vague or confusing wording
* normalize language across rules
* prefer developer-guidance tone over generic scanner output
* identify the top 5 most important rules and improve their messages first

---

## Priority 3 — Validate With Real Users

### Goal

Confirm that developers other than the creator find NETUNE useful.

### Why it matters

A technically correct product with no user pull is not yet a business.

### Desired outcomes

* at least 3 external developers try it
* at least 1 says it is useful
* at least 1 gives actionable feedback

### Work items

* prepare a short invite message
* ask developers to test on real repositories
* collect feedback
* document friction points
* identify the first “must-have” improvements from user feedback

---

## Priority 4 — Create CLI Installer

### Goal

Move from raw script installation toward a product-like setup experience.

### Why it matters

A CLI makes the product feel more real and lowers perceived complexity.

### Desired outcomes

* initial CLI command exists
* installation flow remains compatible with current project
* future onboarding becomes easier

### Work items

* define CLI scope narrowly
* keep compatibility with `install.sh`
* support initialization of `rules/` and workflow files
* document CLI usage clearly
* avoid overengineering version 1

### Suggested future command

`npx netune init`

---

## Priority 5 — Strengthen Core Rules

### Goal

Improve the usefulness of the existing rule set without exploding scope.

### Why it matters

The product wins by catching meaningful architectural mistakes, not by having many shallow rules.

### Desired outcomes

* fewer false positives
* fewer false negatives
* more architecture-aware checks

### Work items

* review current rules one by one
* strengthen service/controller/repository boundary rules
* rewrite overly specific patterns into behavior-based patterns when safe
* remove weak or misleading rules
* document the purpose of each major rule

---

## Priority 6 — Product Positioning Refinement

### Goal

Clarify how NETUNE should be described publicly.

### Why it matters

If the product is described as “just Semgrep rules”, it feels small.
If it is described as architecture protection, it feels valuable.

### Desired outcomes

* one clear one-line positioning
* one clear README value statement
* one clear landing-page message

### Current recommended positioning

**NETUNE protects software architecture by blocking invalid code before merge.**

### Work items

* align README headline
* align landing page hero
* align GitHub description
* avoid too much jargon
* focus on practical value

---

## Things To Avoid Right Now

Do not prioritize these yet:

* big dashboard
* multi-language support
* broad AI platform claims
* large rule packs
* hosted SaaS backend
* complex auth system
* deep analytics
* abstract platform architecture work

These may matter later, but they are not the bottleneck now.

---

## Definition of Success for This Phase

This phase is successful when:

* installation is easy
* messages are understandable
* at least 3 people try the product
* at least 1 person wants to keep using it
* the product feels coherent and intentional

---

## Execution Rule

Only work on tasks that improve one of these:

* installation
* clarity
* adoption
* trust
* perceived usefulness

If a task does not clearly improve one of those, it is probably not a priority.

---

## Immediate Recommended Sequence

1. stabilize and improve `install.sh`
2. improve README install section
3. improve rule messages
4. test installation in fresh repos
5. ask 3 real developers to try
6. gather feedback
7. build CLI installer

---

## Final Note

NETUNE does not need more ambition right now.

It needs more usability.

That is the shortest path from working prototype to real product.
