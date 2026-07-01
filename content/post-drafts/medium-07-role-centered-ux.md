# Role-centered UX

I keep thinking about a UI mistake I have made before: designing for "the user."

That phrase is useful until the product gets real.

In a small app, maybe one person does most of the work. In an operational system, the same screen can be touched by a cashier, an operator, a manager, an admin, an auditor, support, and sometimes the owner who just wants to know why today feels broken.

They are all users.

That label hides the important part.

Each role carries a different kind of responsibility.

A cashier needs speed and confidence. The customer is standing there. The UI has to keep the sale moving, even when the network is annoying or a peripheral decides to be dramatic.

An operator needs blocked work, evidence, and safe actions. They need to know why a record is stuck, what changed, and what they are allowed to confirm.

A manager needs workload, freshness, and priority. A pretty number with stale data can push the wrong decision.

An auditor needs the trail. Who did what, when, from which evidence, under which state. A dashboard is decoration if it cannot answer that.

Once you design from the role, the questions get sharper:

- What is this person responsible for right now?
- What can they accidentally damage?
- Which action should be obvious?
- Which action should disappear?
- Which state needs a warning instead of a badge?
- What evidence will this role need later?

This is where UI work becomes system design.

A role-centered workspace forces decisions that a generic dashboard can avoid. Permissions become part of the layout. Event logs become part of trust. Freshness becomes part of the number. Background jobs become something the user can reason about.

The cashier should not think about replay queues.

The operator should not guess whether a value is authoritative.

The manager should not plan from stale metrics.

The auditor should not reconstruct history from screenshots and luck.

That is the bar I care about now.

A good interface gives each role the smallest surface that still lets them do the work safely.

Thumbnail: `assets/thumbnails/png/medium-07-role-centered-ux.png`
