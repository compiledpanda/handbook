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
The typical development flow for a Web App or API is to create short-lived feature branches, create and validate new functionality, and then deploy those changes out to production. Because versioning from a consumer perspective is usually inherent in the app or API itself, there is usually no need to provide strict versioning or long lived versions for these types of projects. As such the focus is on simplicity and speed, with the ability to understand what is deployed where at any given time.

## Tagging/Versioning, or why not use semver?
When deploying code that backs a web app and/or API, the actual version information is for reference or internal use only. There is no information within semver that the using party needs to know. The API contract itself handles versioning, and a web app does not gain anything by using semver over a release notes page. And what does a sever minor version bump even mean in a web app? Based on this it typically isn't worth the rigamorole of trying to do wemver, especially if you are continuiously deploying when changes hit master. It just adds complexity to the SDLC process (calculating/setting/tracking/incrementing the version) for the App/API without any major advantages. As such, use either the git has of the commit directly (`a5ad1258...`, either first 7 chars or the entire hash) since it provides the ability to know the exact code deployed by referencing git (the source of truth), or a combination of the git hash and build date (`2023-01-01-a5ad1258...`) to allow DevSecOps to easily see the build date and to also get a reference to the exact code.

## Workflows
The following workflows provide a basic CI/CD system for Web Apps and APIs.

### On PR
![API On PR](./img/api-on-pr.png)
* Checkout Code
    * Checkout branch under PR
* Lint Code
    * Lint code and fail when linter fails
    * (Optional) Update PR with lint results
* Test Code
   * Execute whichever tests build enough confidence to merge and deploy
   * Evaluate test coverage and fail if coverage is below desired levels
   * (Optional) Update PR with test results
* Scan Code
   * Scan code for security issues (SAST) and fail if severe issues are found
   * (Optional) Update PR with scan results
* Lint PR
    * Lint PR Title and fail if it does not match conventional commit syntax
    * (Optional) Evaluate the PR Description and fail if it does not contain required items
    * (Optional) Update PR with results
* Ready to Merge
    * Only passes if all other jobs pass. This is used to simplify branch protection so there is a single job required to pass before a PR is merged
    * (Optional) Post results to internal chat/email system

### On Merge To Main
![API On Merge To Main](./img/api-on-merge.png)
* Checkout Code
    * Checkout main branch
* Build Code
    * Build code/container with production settings/flags
    * (Optional) Embed the version as git hash w/ optional date
* Test Build
    * Start the built code/container and run a smoke test
    * (Optional) Run an e2e suite against the locally running
* Push Build
    * Tag with latest and version as git hash w/ optional date
    * (Optional) Push latest OpenAPI spec or other documentation
* Deploy Non-Prod
    * Update non-prod infrastructure to run the latest code (ideally using blue/green)
    * (Optional) Mark deployment in Observability System
    * (Optional) Post results to internal chat/email system
* Test Non-Prod
    * Execute smoke tests and/or e2e test suite and notify/rollback/fail if tests fail
    * (Optional) Execute security scans (DAST) and notify/rollback/fail if scans fail
    * (Optional) Post results to internal chat/email system
* Deploy Prod (if Continuously Deployed)
    * Update prod infrastructure to run the latest code (ideally using blue/green)
    * (Optional) Mark deployment in Observability System
    * (Optional) Post results to internal chat/email system
* Test Prod (if Continuously Deployed)
   * Execute smoke tests and/or e2e test suite and notify/rollback/fail if tests fail
   * (Optional) Post results to internal chat/email system

### On Manual Deploy
![API On Manual Deploy](./img/api-on-manual.png)
* Checkout Code
    * Checkout main branch
* Check Build
    * Validate inputs (hash/tag, env)
    * Ensure build was tagged/pushed
* Deploy (Non-Prod | Prod)
    * Update infrastructure to run the latest code (ideally using blue/green)
    * (Optional) Mark deployment in Observability System
    * (Optional) Post results to internal chat/email system
* Test (Non-Prod | Prod)
    * Execute smoke tests and/or e2e test suite and notify/rollback/fail if tests fail
    * (Optional) Execute security scans (DAST) and notify/rollback/fail if scans fail
    * (Optional) Post results to internal chat/email system

### On CRON
* E2E/Smoke Tests
* Security Scan (DAST)

# Infrastructure


### On PR:
* Checkout Code (branch)
    * Checkout branch under PR
* Lint Changes
    * Lint changes and fail when linter fails
    * (Optional) Update PR with lint results
* Plan Changes
    * Run a plan for all environments based on the changes
    * (Optional) Update PR with plan results
* Scan Changes (Optional)
    * (Optional) Run a security scan on the changes
    * (Optional) Run a cost analysis scan on the changes
    * (Optional) Run an allowed configuration scan on the changes
    * (Optional) Update PR with scan results
* Lint PR
    * Lint PR Title and fail if it does not match conventional commit syntax
    * (Optional) Evaluate the PR Description and fail if it does not contain required items
    * (Optional) Update PR with results
* Ready to Merge
    * Only passes if all other jobs pass. This is used to simplify branch protection so there is a single job required to pass before a PR is merged
    * (Optional) Post results to internal chat/email system

### On Merge To Main:
* Checkout Code (main)
* Plan Change
* Hold Non-Prod (Optional)
* Apply Non-Prod
* Hold Prod (Recommended)
* Apply Prod

### On CRON
* Diff Scan
* Security Scan
* 

# Library or Long-Lived Releases
Use https://semver.org/

On PR:
* Checkout Code (branch)
    * Checkout branch under PR
* Lint Code
    * Lint code and fail when linter fails
* Test Code
    * Execute whichever tests build enough confidence to merge and deploy
    * Evaluate test coverage and fail if coverage is below desired levels
* Scan Code
    * Scan code for security issues and fail if severe issues are found
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
