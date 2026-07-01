# LinkedIn Draft 07: Shadow-Run, Then Delete

My favorite refactor pattern is boring:

run both paths,

compare the result,

delete one.

The deletion is the part people postpone.

Shadow-running gives the new code room to prove itself without pretending it owns the workflow on day 1.

That part is healthy.

The old path staying forever is where the tax starts.

Two bug fixes.

Two behavior changes.

Two explanations for every incident.

Two mental models for the next person.

The comparison I care about sits at the product boundary.

Did the same event get emitted?

Did the operator see the same blocked work?

Did the final state match?

Did failure stay recoverable?

Once that contract holds, keeping the old path becomes its own risk.

Shadow-run long enough to earn confidence.

Then delete while everyone still remembers why the code exists.

Thumbnail: `assets/thumbnails/png/linkedin-07-shadow-delete.png`
