# LinkedIn Draft 01: Deleting AI From The Hot Path

The best AI extraction win was deleting AI from the hot path.

That sounds anti-AI, but it was the opposite.

In a private logistics automation workflow, one document path looked like an extraction problem. The first version treated it like one: send the text to a model, parse loose output, normalize the result, and hope the downstream contract was still valid.

But part of the input was already structured enough.

So the better version did something less impressive and more useful:

```ts
- const fields = await llm.extract(document);
- return normalizeLooseJson(fields);
+ const rows = parseCarrierTable(document.text);
+ return mapRowsToConfirmedFields(rows);
```

The model stayed useful where ambiguity lived.

Deterministic code took over where the input already had structure.

The result was easier to debug, cheaper to run, and safer to review because the system stopped pretending every field needed probabilistic perception.

The lesson I keep coming back to:

Use AI to read messy reality.

Use deterministic systems to decide what becomes business truth.

Thumbnail: `assets/thumbnails/png/linkedin-01-ai-hot-path.png`

