# System Operation
The ongoing operation and development of the system is contained within the Operation Phase, and covers all system development activity up to the retirement transition into the Disposal Phase.

> Note that many SDLCs break this phase up into initial development, maintenance, etc. Those distinctions are useful from an amount and type of work perspective, but the underlying steps, focus', outcomes, and activities are the same for all of them. The only difference is the items that are identified and the input on what gets accepted and scheduled changes based on where it is in the operations phase (shortly after launch, in the middle, or nearing retirement).

# Activities
Note that the activities here are usually a superset of activities when in pre-launch.

TODO reference and link to the outcomes for each step

## Identify
* System Analysis
    * Usage
    * Performance
    * Error/Correctness/Failure
    * Code
        * Manual or Automated
    * Security
        * Dependency Scanning
        * Infrastructure Scanning
        * Code Scanning (SAST, CodeQL, Vulnerability)
        * Application Scanning (DAST)
        * Secret Scanning
    * Cost
    * Documentation?
* System Request Analysis?
    * Product
    * Process
    * Governance?
* System Issue
    * Bug
    * Outage
    * Vulnerability

## Accept
* Acceptance
    * Async or Synchronous
    * Traditional Refinement meeting?
    * All outcomes done and checked off (who verifies that they are done)

## Plan
* Decomposition(/Recomposition?)
    * Decomposing Epics into Tasks and/or Tasks into Sub-Tasks
* Task/Sub-Task definition
    * Create requirements/AC/Implementation Plan
* Prioritization
    * Backlog Grooming?

## Schedule
* Scheduling
    * Sprint Planning meeting?
    * Scheduling/backlog refinement for Kanban?
    * All outcomes done and checked off (who verifies that they are done)

## Implement
* Coding/Doing
    * Write Code
    * Testing
    * Documentation
    * Other tasks as needed based on type and requirements?
* Peer Review
* Integration/Merge
* Verification? (QA? E2e/Regression?)
* Deployment
    * Pre Deployment Verification
    * Deployment to lowers and prod
    * Post Deployment Verification

## Complete
* Completing
    * Approval/Sign Off process?
    * All outcomes done and checked off (who verifies that they are done)

## Review
* Item Review/Reflect
* RCAs