# LinkedIn Draft 02: Graceful Failure Can Hide Broken Contracts

The most dangerous code in production was the code that made failures look graceful.

Fallbacks often start with good intent:

- keep the workflow moving
- avoid blocking the operator
- recover from partial model output
- tolerate upstream weirdness

But a fallback is only safe if the degraded state is explicit, observable, and harmless.

In one private automation workflow, a fallback path made the system look healthier than it was. The UI stayed green. The downstream process received a weaker state. The real contract break was hidden until much later.

The fix was not to add another fallback.

The fix was to remove the path that pretended partial authority was enough.

The system became more reliable when it started saying:

```txt
EXPLICIT_DEGRADED_STATE
block irreversible action
require review
```

That is less smooth.

It is also more honest.

Reliability is not making every failure disappear. Sometimes reliability is making the right failure impossible to ignore.

Thumbnail: `assets/thumbnails/png/linkedin-02-fallbacks.png`

