# LinkedIn Draft 02: Graceful Failure Can Be Too Polite

I am suspicious of very polite fallbacks.

The kind where the UI stays green, the workflow keeps moving, and the system quietly lowers the quality of the state.

That kind of "graceful" can become expensive.

I saw this in an automation flow where a fallback kept a record alive after a weak extraction. No loud error. No broken screen. Everyone could keep clicking.

Downstream, the record had less authority than the rest of the product believed.

A crash would have been easier to understand.

The fix was to make degraded state visible:

- this value came from a weak source
- this action needs review
- this export is blocked until confirmation exists

It made the product feel less smooth for a moment.

Good.

Some failures deserve friction.

Reliability is partly the discipline of telling the user when the system is guessing.

Thumbnail: `assets/thumbnails/png/linkedin-02-fallbacks.png`
