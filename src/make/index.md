---
title: Make
status: draft
---
# Make
Just use make. It's not sexy, or new, or shiny, but it just works. It comes installed everywhere you are going to write software, and is a known quantity. Sooner or later you are going to have commands that you need to run that aren't really in the wheelhouse of the primary language of your repo, and trying to shoehorn them in isn't worth it in the long run. Just use make as the entry point to your software and be done. If you have complicated build, configuration, or other scripts, use make as the entrypoint and delegate the running of the command to another system or script inside (i.e. `make foo` can just run `./scripts/foo.sh`). Also remember that make supports variables.

## CI/CD
One of the primary benefits is that your CI/CD process just calls make commands. This helps keep everything clean and tidy, and helps with reproducibility in a local environment.

## Commands
Here are the initial make commands you should consider. You will undoubtedly have more than this over time, but filling this out should get you a fair bit of the way there.

### make init
This should prepare your repo to either build, test, lint, or run. Install any dependencies, take care of any directory creation, ensure tooling is in place and has the right versions, etc...

### make build
This should create your production ready deployable artifact. Make sure this returns a non-0 status code on build failure.

### make test
This should run the default set of tests that you would run prior to merging in any changes you just made to your main branch. Make sure this returns a non-0 status code on test failure.

## make lint
This should run your linter(s) against all of your source code. You can also run this command on commit to help catch things before you push. Make sure this returns a non-0 status code on test failure.

## make run
This should run and/or start your software with the default settings needed for local development and/or ci testing

## make clean
This should return your repo to the state in which it would be cloned. It should remove all cache, in-repo dependencies, and other build/temp files.

## make coverage (optional)
Depending on how you configure your tests, you may want a dedicated test coverage command that runs tests and outputs test coverage. Bonus points if it returns a non-0 status code if coverage is below the configured threshold

## make e2e (optional)
For software that has dedicated end to end and/or integration tests, you should have a command to run them. Make sure this returns a non-0 status code on test failure.

## Sample File

```makefile
.PHONY: init
init:
    echo "init"

.PHONY: build
build:
    echo "build"

.PHONY: test
test:
    echo "test"

.PHONY: lint
lint:
    echo "lint"

.PHONY: run
run:
    echo "run"

.PHONY: clean
clean:
    echo "clean"
```