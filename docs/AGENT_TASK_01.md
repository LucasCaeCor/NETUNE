# AGENT_TASK_01.md

# Agent Task 01 — Create Initial NETUNE CLI

## Task Name

Create the first usable CLI installation flow for NETUNE.

---

## Objective

Build an initial CLI-based installer that makes NETUNE easier to install in a fresh project without breaking the current working setup.

The CLI should not replace the existing validated flow immediately.
It should improve it incrementally.

---

## Why This Matters

The current product core is validated, but installation still has friction.

A CLI is the next logical productization step because it:

* reduces setup friction
* improves first-use experience
* makes the project feel like a real product
* supports broader adoption

---

## Scope

This task is intentionally narrow.

Do **not** redesign the whole project.

Do **not** build a complex framework.

Do **not** introduce unrelated features.

The CLI version 1 only needs to help users initialize NETUNE in a project.

---

## Main Deliverable

A minimal CLI flow that can initialize NETUNE setup in a target repository.

---

## Expected Capabilities

The initial CLI should aim to do the following:

1. create or copy the `rules/` directory
2. create or copy `.github/workflows/semgrep.yml`
3. optionally create missing directories safely
4. preserve existing project files when possible
5. print clear success/error messages
6. be documented in the README

---

## Recommended Product Shape

Version 1 can be simple.

Examples of acceptable shapes:

* a Node.js CLI script
* a package entrypoint
* a command such as `npx netune init`
* a local script that can evolve later

The exact implementation is flexible, but the user experience should feel simple and predictable.

---

## Constraints

The agent must follow these constraints strictly:

* do not break the existing `install.sh`
* do not remove current working rule files
* do not redesign the current repository structure
* do not add dashboard, AI, auth, or unrelated infrastructure
* do not refactor the entire project
* do not alter validated Semgrep rule logic unless required for installation flow
* do not introduce heavy dependencies without justification

---

## Definition of Done

This task is complete only when:

* the CLI can initialize NETUNE in a fresh test project
* the expected files are copied/generated correctly
* the user can understand how to use it
* the README contains usage instructions
* the current installation flow still works
* no unrelated project behavior is broken

---

## Required Outputs

The agent should provide:

1. implementation plan
2. files created or changed
3. CLI code
4. usage instructions
5. testing instructions
6. risk notes if any assumptions were made

---

## Acceptance Criteria

The solution is acceptable if all of these are true:

* a fresh repository can be prepared with minimal steps
* the CLI setup is simpler than manual copying
* rules and workflow end up in the correct paths
* the solution is stable enough for early real users
* the changes are small and understandable

---

## Preferred Implementation Style

The agent should prefer:

* small scope
* clarity
* maintainability
* minimal dependencies
* practical usability

The agent should avoid:

* abstraction for its own sake
* premature scalability design
* complicated architecture for version 1
* product ideas that are not directly helping installation

---

## Suggested Work Plan

### Step 1

Inspect current installation flow and repository layout.

### Step 2

Define the minimum CLI behavior needed for `init`.

### Step 3

Implement the CLI in the smallest viable way.

### Step 4

Update README with usage instructions.

### Step 5

Test installation in a fresh repository.

### Step 6

Document edge cases or known limitations.

---

## Suggested Prompting Rule for the Agent

The agent should think like this:

“Make NETUNE easier to install today, without turning version 1 into an overengineered platform.”

---

## Important Context

NETUNE is already technically validated.

This task is not about proving the core works.

This task is about reducing friction so more people can try it.

That means UX and adoption matter more here than architectural ambition.

---

## Final Instruction

Optimize for first-user success.

If a user cannot install and understand NETUNE quickly, this task has failed.
