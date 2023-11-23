---
title: Teams
status: draft
---
# Teams
A team is dedicated people/person(s) who execute process(es) to engineer system(s) that delivering product(s) to the team's customer(s).

### Customer
A customer is a set of personas (backed by real people) that are the intended recipients of the product(s) that the team is responsible for. Note that customers do not have to be external to the company or even the team.

### Product
It is important to be very clear what product(s) the team is formed to deliver. A team without a clearly defined set of products tends to deliver a murky set of features.

Note that there are several difference classes of products, all of which _could_ be delivered by the same team.
* A "product" in the traditional sense, as in a set of features intended for personas external to the customer. This could be a web/mobile app, and API, etc...
* A "shared service", or a set of APIs and/or other functionality (widgets) used to build product(s) that other teams integrate into their products (An Identity/Authentication/Authorization API, etc...)
* A "platform", or a set of capabilities used by other teams to build products _on_ (A set of standardized terraform modules exposing preconfigured resources, a shared K8s cluster, etc...)
* A "service", or a set of tasks and services that are provided to other teams to enable that team to operate more efficiently (Dedicated OPS team, HR, etc..)

**Product vs System** A Product is what is sold to/used by the customer. A system is what is built to enable the product(s). For example a SaaS product may have several systems that enable it, such as a web app and a backend API.

### System
The set of software systems that enable the team to deliver their product(s).

### Process
The processes that a team creates, follows, and executes to engineer their systems and deliver their products

### People
The people organized together around a set of product(s) and system(s), and who are responsible for their engineering and delivery.
