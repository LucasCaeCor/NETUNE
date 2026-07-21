# PROJECT_CONTEXT.md

# NETUNE — Project Context

## Product Summary

NETUNE is a code-governance and architecture-enforcement tool for software teams.

Its current purpose is to analyze Pull Requests automatically and block changes that violate predefined engineering and architecture rules.

The project started as a rule-based architecture guard and is evolving into a broader software governance platform.

---

## Core Value Proposition

NETUNE helps teams prevent architectural degradation before bad code is merged.

It reduces reliance on manual code review for enforcing basic architectural discipline.

It is designed to turn engineering standards into executable checks.

---

## Current Product State

NETUNE is currently at **validated MVP stage**.

The core has already been tested in real repositories and the essential loop is working:

1. install NETUNE
2. open Pull Request
3. run automated checks
4. detect violations
5. block merge when rules fail

This means the technical core is already functional.

---

## What Already Works

The following pieces are already implemented and validated:

* Semgrep-based custom rule engine
* GitHub Actions workflow for Pull Request validation
* Architecture-oriented rules in YAML
* Repository structure for rules and workflows
* Installation script (`install.sh`)
* Public GitHub repository
* Product README
* Landing page concept
* Real test flow in separate repositories

---

## Current Rule Philosophy

NETUNE is not meant to validate style only.

Its main purpose is to validate **architecture and engineering discipline**.

Current examples of enforced behavior include:

* disallowing `console.log(...)` in production-oriented code
* disallowing HTTP response handling inside service layer
* disallowing direct database access from controllers
* flagging unsafe SQL patterns such as `SELECT *`

The real goal is not syntax policing.

The real goal is protecting system boundaries.

---

## Architectural Assumptions

Current intended layer model:

* Controller: may receive request and send response
* Service: contains business logic and must not use HTTP response helpers
* Repository / Database access layer: owns DB access
* Controller must not talk directly to DB
* Service must not behave like controller

This layered separation is a central part of NETUNE's rule design.

---

## Current Tech Stack

Main stack used so far:

* TypeScript
* Semgrep
* GitHub Actions
* Markdown documentation
* YAML rule definitions
* Shell installation script

Future stack may include:

* Node.js CLI
* AI review layer
* SaaS dashboard
* GitHub App / integration layer

---

## Repository Structure

Expected core structure today:

* `rules/` → Semgrep rules
* `.github/workflows/` → CI workflows
* `docs/` → product and technical context
* `install.sh` → quick installation
* `README.md` → public entrypoint

The exact code architecture may evolve, but these directories are already part of the current working setup.

---

## Product Direction

NETUNE is evolving in phases.

### Current phase

Rule-based architecture enforcement for Pull Requests.

### Next phase

Developer experience improvements:

* better installation
* better error messages
* clearer onboarding
* easier adoption

### Future phase

Higher-value platform capabilities:

* AI-assisted review
* suggested fixes
* installation CLI
* project dashboard
* software governance workflows

---

## What NETUNE Is Not Yet

NETUNE is **not yet**:

* a hosted SaaS product
* a full GitHub App
* an AI-powered auto-fix platform
* a multi-language governance suite
* a mature commercial platform

Those are future directions, not current realities.

---

## Strategic Priority Right Now

The current strategic priority is **adoption and usability**, not adding many more features.

The product already proved its technical core.

Now the focus should be:

1. make installation easier
2. make output clearer
3. make first use faster
4. validate with real users
5. reduce friction

---

## Current Main Problem To Solve

The biggest problem right now is not detection accuracy alone.

It is this:

**Can another developer install NETUNE quickly, understand its output, and feel immediate value?**

Everything in the short term should support that goal.

---

## Current Success Criteria

The current MVP should be considered successful if:

* another developer can install it without help
* a PR can be blocked correctly by rules
* the user understands why it failed
* the user understands how to fix it
* the user says the tool is useful

---

## Working Principle

If a standard is not automated, it does not exist in practice.

NETUNE exists to automate engineering standards.

---

## Operational Rule For Agents

Any agent working on NETUNE must respect the following:

* do not refactor broadly without clear need
* do not add random features
* do not break current installation flow
* do not remove existing validated behavior
* optimize for clarity, usability, and adoption
* preserve the current rule-enforcement core

---

## Current CTO Direction

The product is no longer in “idea mode”.

It is in “turn validated core into usable product” mode.

That means the next work should focus on:

* packaging
* onboarding
* UX of rule violations
* installation simplicity
* first-user adoption

Not on building a huge platform all at once.

---

## Short Version

NETUNE already works.

Now the mission is to make it easy, clear, and desirable to use.
