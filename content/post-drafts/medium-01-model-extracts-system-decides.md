# The model reads. The system decides.

The first version of an AI workflow usually feels simple.

Send the document to a model. Ask for the fields. Parse the answer. Move on.

Then the first real edge case arrives.

The document says one thing. The database says another. The operator fixes a value. A rule blocks the export. Someone asks why the system made that decision.

At that moment, model confidence is a terrible answer.

I learned this while working on operational workflows where a wrong field can create real downstream work. The model was useful. It could read messy text, weird layouts, scanned documents, inconsistent labels, all the stuff that makes deterministic parsing painful.

But reading a value and owning the truth are different jobs.

The split I trust now is simple:

- the model extracts
- the parser normalizes
- the operator confirms
- rules decide whether the next action is allowed
- events explain what happened

That architecture is boring on purpose.

It is much easier to debug at 2 AM.

When the model is only responsible for perception, you can inspect its output without pretending it has business authority. When the reviewed snapshot owns the confirmed value, the rest of the system has something typed and stable to depend on. When an event is emitted after each meaningful step, you have a trail instead of a mystery.

The best improvement I made in this kind of system was removing the model from places where the input was already structured enough.

Some fields needed a parser.

Some fields needed a lookup.

Some fields needed human confirmation.

Only a smaller part needed the model.

That change made the workflow cheaper.

It also made failures easier to name.

A failed parser, a blocked rule, and a missing confirmation all fail in different ways. The operator can see the difference. The code can see the difference. The audit trail can explain the difference later.

I still like AI in these systems.

I just prefer giving it the job it is actually good at: reading messy reality and proposing a shape.

The product still needs ordinary software to decide what can safely happen next.

Thumbnail: `assets/thumbnails/png/medium-01-model-extracts-system-decides.png`
