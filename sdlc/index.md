---
status: draft
---
# Software Development Life Cycle
Not to be confused with a System Life Cycle.

The Software Development Life Cycle (SDLC) is ...

# Team Structure
This SDLC assumes the following team structure and ownership.

| <img alt="Team Structure" src="./img/team-structure.png" style="max-height:260px" /> | <img alt="Team Product System" src="./img/product-system-team.png" style="max-height:300px" /> |
| --- | --- |

* The company is organized into cross-functional teams
* Teams are staffed based on the products/systems they own and their scope/charter
* Teams directly own internal/external products (or clearly defined product sections/areas)
* Every product (and product section/area) is owned by a single team (See "Ownership/Stewardship")
* Teams directly own internal/external systems
* Every system is owned by a single team (See "Ownership/Stewardship" document)

# Overview
Opportunity/Problem Solution (OPS?) SDLC

<img alt="SDLC" src="./img/overview.png" style="max-height:300px" />

TODO classify Item as analagous to an instance of an opportunity/problem

There is a single general process used for all items that go through each stage of the SDLC. First, an opportunity or problem is identified and determined to be worth solving. Next a solution is crafted and determined to be ready for implementation. Then the opportunity/problem solution is prioritized against all other opportunity/problem solutions and scheduled. Then the opportunity/problem solution enters implementation and is considered complete when released. Finally, the item and the process it went through is reflected upon. At each of these stages additional opportunities/problems may be identified, and the identified opportunity/problem follows the same process.

There are two additional areas marked as "decomposition" and "composition". As the actual size of a given opportunity/problem does not always match the desired size a team or individual would like to work at, opportunities and problems frequenctly undergo decomposition in a tight identify/solve loop. This loop decomposes an opportunity or problem by breaking down a solution into smaller and smaller items until an optimal size of item has been reached. See Decomposition for further information TODO link. Compisition is the opposite, where the items are recomposed into the full solution created to solve the original opportunity/problem identified.

Processes and controls within the SDLC are mapped to Stage/Type combinations (todo more here), meaning that a process or control takes effect when a particular type of item hits a certain stage in the SDLC.

### Who, What, When, Where, Why, How
Another way to look the SDLC is to view it through the lense of answering who, what, when, where why, and how.

// TODO Image

In essence, each stage of the SDLC seeks to answer these questions prior to implementation, and then to reflect on those questions after implementation is complete.

# Identification

<img alt="Identification" src="./img/identification.png" style="max-height:300px" />

* Identification
    * One liner
    * Additional detail if needed
    * Ideally given an identifier
* Classification
    * Archetype of the item
    * Size (roughly) of the item
    * Team to route item to
    * Urgency of the item
* Investigation (Optional)
    * Based on the classification additional investigation may be required
        * Market opportunities may need research or review
        * Bug reports may need verification
* Justification
    * Why should this problem be solved
        * Can be obvious and not need to be stated?
* Decision
    * Go/No Go to start solutioning
    * Concept of standing decisions
    * Who decides needs to be articulated

# Solution

* Constraints
* Requirements
* Resources
* Design/Plan
* Approvals/Sign Off

## Decomposition
Rather than try to fully develop a monolothic solution prior to prioritization, it is better to decompose the problem or opportunity into smaller pieces. These smaller pieces can then be run through the SDLC and worked on until the are recomposed into an implemented solution that addresses the original opportunity/problem.

Also note that a solution does not have to have all of its pieces fully solutioned prior to starting work on any one given piece. In fact, it is often better to break down an item roughly, fully solution the first piece or two, and then start implementation on those pieces. The information gained from those pieces can then be used to flesh out the solutions to the subsequent pieces, until a full solution is formed and implemented. In essence, you can move a "high-level" solution into implementation without specifying every component piece of that solution (aka building iteratively). Note that this can come at the cost of not having a full plan at the beginning that can be fully scheduled out.

# Prioritization

# Implementation

* Doing
* Done

## Composition

# Reflection


# Definitions
* Composition - TODO
* Control - TODO
* Decomposition - TODO
* Item - a generic name for an opportunity or problem
* Process - TODO
* Stage - a part of the sdlc
* Type - A type or classification of an item at a particular stage of the SDLC
