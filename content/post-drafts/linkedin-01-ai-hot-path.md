# LinkedIn Draft 01: Delete AI From The Boring Path

I like AI more after I remove it from a workflow.

Weird sentence, but it keeps happening.

In one document flow, I started with the usual version:

- send text to a model
- ask for fields
- normalize the loose answer
- let the workflow continue

Some of the document was messy.

Some of it was already structured enough.

I had put both parts through the same model-shaped pipe because it was convenient.

The better version was less magical:

parse the parts the system can already understand,

use the model only where the input is actually ambiguous,

then make the reviewed snapshot the thing the rest of the workflow trusts.

It cost less.

More importantly, it gave me places to inspect when a value looked wrong.

When a value looked wrong, I could inspect a parser, a mapping, or a review state. I was not negotiating with a blob of model output.

That lesson stuck.

AI is great at reading messy reality.

Business truth deserves a stricter owner.

Thumbnail: `assets/thumbnails/png/linkedin-01-ai-hot-path.png`
