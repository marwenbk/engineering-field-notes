# LinkedIn Draft 19: Role-Centered UX

User-centered UX is not enough for big systems.

It is a good starting point, but "the user" becomes too vague when the product has multiple operational roles.

A cashier, an operator, a manager, an auditor, and an admin may all use the same system.

They should not see the same interface.

The better design unit is the role:

| Role | Needs to see | Can act on |
|---|---|---|
| Cashier | current sale state | checkout |
| Operator | blocked work | review |
| Manager | fresh KPIs | prioritization |
| Auditor | event trail | verification |

Role-centered UX asks sharper questions:

- What does this role need to know now?
- What mistakes can this role create?
- Which actions are safe for this role?
- What should be hidden?
- When should the system warn, block, or escalate?

This is where UX becomes system design.

The interface is not just arranging components. It is encoding responsibility, permissions, risk, timing, and next action.

Generic dashboards show data.

Role-centered workspaces help the right person do the right thing without creating the wrong failure.

Thumbnail: `assets/thumbnails/png/linkedin-19-role-centered-ux.png`

