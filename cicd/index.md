---
status: draft
---
# General
* Always squash merge w/ commit message pulled from the PR title
    * Use https://www.conventionalcommits.org/
    * `<type>[optional scope][!]: <description>` (i.e. `fix(PROJ-1234)!: breaking fix that ...`
    * The set of types and scopes should be agreed upon and encoded in the linter
    * Scope should consistently be the ticket number if an external ticketing system is used (i.e. Jira)
    * Use `!` for breaking changes
    * Body should be additional info that adds context (why) to the change
* Use a single main branch and protect that branch
    * Require PR to merge
    * Require reviews (optionally from code owners)
    * No force pushes (even from administrators)

# Web App or API
A single main branch representing production.

Branch off of main, create feature PR, squash merge back into main.

Why not semver? When deploying code that backs a web app and/or API, the actual version information is for reference or internal use only. There is no information within semver that the using party needs to know. The API contract itself handles versioning, and a web app does not gain anything by using semver over a release notes page. And what does a sever minor version bump even mean in a web app? Based on this it typically isn't worth the rigamorole of trying to do wemver, especially if you are continuiously deploying when changes hit master. It just adds complexity to the SDLC process (calculating/setting/tracking/incrementing the version) for the App/API without any major advantages.

On PR:
* Checkout Code (branch)
* Lint Code
* Test Code
* Lint PR
    * Title matches conventional commit syntax
    * Description contains required items
* Ready to Merge
    * Depends on all other jobs, and cannot merge unless this passes

On Merge To Main:
* Checkout Code (main)
* Build Code
    * Version is git hash w/ optional date
* Test Build
* Push Build
    * Tag with latest and version
* Deploy Non-Prod
* Test Non-Prod
* Deploy Prod (if Continuously Deployed)
* Test Prod (if Continuously Deployed)

On Manual Deploy
* Checkout Code (main)
* Check Build
    * Validate inputs (hash, env)
    * Ensure build was tagged/pushed
* Deploy (Non-Prod | Prod)
* Test (Non-Prod | Prod)

# Library or Long-Lived Releases
Use https://semver.org/

On PR:
* Checkout Code (branch)
* Lint Code
* Test Code
* Lint PR
    * Title matches conventional commit syntax
    * Description contains required items
* Ready to Merge
    * Depends on all other jobs, and cannot merge unless this passes

On Merge To Main:
* Checkout Code (main)
* Test Code
* Auto Release (Optional)
    * Same as `On Manual Release`

On Manual Release
* Checkout Code (based on input)
* Check Build
    * Ensure on a releaseable branch
* Build Code
* Test Build
* Publish Build
    * Bump version info in documentation
    * Update Change Log
    * Commit changes
    * Git Tag with version

# Infrastructure
On PR:
* Checkout Code (branch)
* Lint Changes
* Plan Changes
* Lint PR
    * Title matches conventional commit syntax
    * Description contains required items
* Ready to Merge
    * Depends on all other jobs, and cannot merge unless this passes

On Merge To Main:
* Checkout Code (main)
* Plan Change
* Hold Non-Prod (Optional)
* Apply Non-Prod
* Hold Prod (Recommended)
* Apply Prod