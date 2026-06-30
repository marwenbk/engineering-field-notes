# Role-Centered UX

User-centered design is useful, but it is not enough for large operational systems.

The phrase "the user" works when the product has one dominant workflow. It breaks down when the same system is used by cashiers, operators, managers, admins, auditors, support staff, and owners.

Those people do not just have different preferences.

They have different responsibilities.

They can create different failures.

They need different information at different moments.

That is why the role is often the real design unit.

## From User-Centered To Role-Centered

User-centered UX asks:

> What does the user need?

Role-centered UX asks:

> What does this role need to see, decide, change, ignore, escalate, and prove?

That shift matters because operational interfaces are not only about comfort. They are about responsibility and risk.

| Role | Surface | Risk |
|---|---|---|
| Cashier | current sale | slow checkout |
| Operator | exceptions | wrong approval |
| Manager | workload and KPIs | bad priority |
| Auditor | events and evidence | missing trail |

The same database row can mean different things to different roles.

For a cashier, it may be noise.

For an operator, it may be the next action.

For a manager, it may be workload signal.

For an auditor, it may be evidence.

## A Dashboard Is Not A Workspace

Many internal products start as dashboards because dashboards are easy to build.

Tables, filters, cards, charts.

But operational work usually needs a workspace, not a dashboard.

A workspace should answer:

- what is blocked?
- why is it blocked?
- who can unblock it?
- what changed since last time?
- is the data fresh?
- what is the safest next action?
- what should this role not be allowed to do?

This connects UI/UX to permissions, state machines, event logs, background jobs, data freshness, and auditability.

The design work is not only visual.

It is domain modeling.

## The Practical Rule

Do not design one interface for "the user."

Design surfaces around roles:

- what they are responsible for
- what they are allowed to change
- what failure they can create
- what evidence they need
- what next action the system should make obvious

That is how a generic admin screen becomes an operational workspace.

Thumbnail: `assets/thumbnails/png/medium-07-role-centered-ux.png`
