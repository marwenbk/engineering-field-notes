# The Model Extracts; the System Decides

Reliable AI automation does not come from trusting the model harder.

It comes from separating two responsibilities:

1. probabilistic perception
2. deterministic authority

Models are useful at reading messy inputs: documents, tables, emails, inconsistent wording, visual layouts, and human language. But reading a field is not the same thing as deciding that the field is business truth.

In operational software, truth usually belongs somewhere else:

| Field type | Good reader | Good authority |
|---|---|---|
| messy document text | model or parser | reviewed snapshot |
| identity or ownership | document | system of record |
| exportability | rules | event gate |
| final workflow state | application logic | append-only event log |

That boundary changes how the system is designed.

The model can propose. The operator can confirm. The rules can block. The event log can explain.

The most useful architecture pattern is not "AI agent does the workflow."

It is:

```txt
extract -> confirm -> snapshot -> process -> event
```

The system becomes easier to debug because each boundary has a job. It becomes safer because irreversible actions depend on typed evidence, not model confidence. It becomes cheaper because deterministic parsing can replace model calls where the input is already structured.

The practical rule:

Use AI where ambiguity lives.

Use deterministic systems where authority exists.

Thumbnail: `assets/thumbnails/png/medium-01-model-extracts-system-decides.png`

