# LinkedIn Draft 03: Human Review Is Not A Text Box

Human review is not a text box.

It is a contract boundary.

The weak version of human-in-the-loop is:

> Here is model output. Please review it.

That sounds reasonable, but it often produces vague approval. The downstream system still has to guess what was confirmed, where it came from, and whether it can be used for an irreversible action.

The stronger version is:

```json
{
  "confirmedBy": "operator",
  "fields": {
    "amount": { "value": "123.450", "source": "review" },
    "office": { "value": "A1", "source": "system" }
  }
}
```

Now the operator action creates a typed snapshot.

The system can audit it.

Rules can consume it.

Exports can be blocked when required evidence is missing.

The important product detail is that review should not be a loose comment layered on top of AI output. It should become structured state that every later step can trust or reject.

That is where HITL becomes engineering, not just UX.

Thumbnail: `assets/thumbnails/png/linkedin-03-hitl-contracts.png`

