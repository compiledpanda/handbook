# Steps and Transitions
What follows is a description of each step and transition, including the major focus' and relevant activities and outcomes for each step, focus, and transition.

<img alt="System Pre-Launch Steps" src="./_img/system-steps.svg" style="max-height:320px" />

## Identify
Identify, Classify, and Justify items that impact the system.

<img alt="Identify Step" src="./_img/system-identify.svg" style="max-height:320px" />

This step focuses on identifying items that are required to transition this system through launch to the operation phase. 

### Identify
Identify items that impact the system and are required for launch. Items that are not required for launch should be moved to the operation phase and handled there.

> Note that a system is created to enable or support a product or process. The items identified in those life cycle steps should feed the requirements for items identified in this step.

> Note that organizational system requirements such as using approved architectures, languages, security methodologies, etc feed into the identification step.

> Note that a good place to identify and/or check for additional requirements is the System Launch Checklist.

> Note that this step does NOT specify _how_ the system should accomplish this. It should only identify _what_ the system should do from the perspective of the product or process that uses/relies on the system.

**Purpose**: To identify and describe _what_ the item is. to a degree sufficient that a justification of why this item should be addressed can be made and that a plan can be created to resolve this item.

**Outcome**: Each item 1) is recorded within the team's item-tracking/ticketing system and 2) contains a description of the item sufficient so that a justification can be created and the item accepted and moved to the Plan step.

**Example(s)**:
* Item X - The system must support user authentication for product X as described in Product Features A, B, and C...
* Item Y - The system must accept an email and password combination and return an authentication token for use throughout the product.

### Classify
Classify the item.

> Note that you usually only need 3 types of items: Epic, Task, and Sub-Task. Epics are for larger bodies of work that aren't worked on individually and need to be broken up. Tasks are for a small enough set of work that can be assigned to an individual to complete in a reasonable amount of time. Sub-Tasks are for the individual to use to break up the work into a series of discrete steps, or to track work that is not contiguous by nature (i.e. after Sub-Task 1 is complete, we need to wait for 24 hours for X to propagate, and then we can work on Sub-Task 2)

**Purpose**: To classify the item so that type-specific requirements, activities, and artifacts can be tracked.

**Outcome**: Each item 1) is assigned one of the approved System Item Types (TODO link).

**Examples**:
* Epic
* Task
* Sub-Task

### Justify
Justify the need to address the item.
TODO mention MVP/MVS

> Note that in many cases a link to a product or process item or to an organizational policy can be a sufficient justification. The reason to record the justification of _why_ this item is needed is to add context and ensure focus on the overall organizational purpose, and not to create busy work.

**Purpose**: To justify _why_ the item as identified should be addressed by the team and prioritized for planning and implementation.

**Outcome**: Each item 1) contains a justification of why this item needs to be completed with enough detail that the item can be accepted and moved to the Plan step.

**Examples**:
* See Product Item X
* See Policy Y section 1.3.b
* The system must cleanly handle the possible error states that may occur during implementation in a way that is both secure and properly communicates to the user what is occurring.

## Accepted


## Plan
Plan, Collaborate, and Prioritize

<img alt="Plan Step" src="./_img/system-plan.svg" style="max-height:320px" />

### Plan
Plan how to address the item
### Collaborate
Collaborate with others on the plan
### Prioritize
Prioritize the timing of the plan

## Scheduled

## Implement
Implement, Verify, and Communicate

<img alt="Implement Step" src="./_img/system-implement.svg" style="max-height:320px" />

### Implement
Implement the plan
### Verify
Verify the plan was implemented correctly (and has no unwanted side effects)
### Communicate
Communicate the state of the implementation

## Completed

## Review
Review, Validate, and Act

<img alt="Review Step" src="./_img/system-review.svg" style="max-height:320px" />

### Review
Review the item, plan, and implementation
### Validate
Validate that the implemented plan resolves the identified item
### Act
Act on any findings

## Done

