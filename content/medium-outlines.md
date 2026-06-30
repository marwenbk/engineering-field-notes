# Medium Outlines

## 1. The Model Extracts; the System Decides

Thesis: reliable AI automation comes from separating probabilistic perception from deterministic authority.

Outline:

1. Why model confidence is not business truth.
2. Field-level authority: document, system of record, operator confirmation, event gate.
3. When deterministic parsing beat a model call.
4. How provider migration forced cleaner contracts.
5. Practical rule: use AI where ambiguity lives, not where authority exists.

Thumbnail: `assets/thumbnails/png/medium-01-model-extracts-system-decides.png`

## 2. Human Review Is Not a Text Box

Thesis: human-in-the-loop workflows work best when operator edits become typed, auditable snapshots.

Outline:

1. The problem with "please review this JSON."
2. Split extract, confirm, and process.
3. Apply confirmed overlays without re-calling the model.
4. Delete re-normalization and fallback paths that weaken the contract.
5. Design gates that block dangerous ambiguity.

Thumbnail: `assets/thumbnails/png/medium-02-hitl-typed-contract.png`

## 3. Shadow-Run, Then Delete

Thesis: the safest major refactor proves parity before removing obsolete systems.

Outline:

1. Retry counters that became permanent failure machines.
2. Replacing per-record polling with idempotent reflection.
3. Event logs over mutable status fields.
4. Backfills, duplicate emissions, and parity checks.
5. How to know when deletion is safer than compatibility.

Thumbnail: `assets/thumbnails/png/medium-03-shadow-run-delete.png`

## 4. A Green API Ping Does Not Mean the Operation Is Alive

Thesis: production health must include background loops, freshness, queues, upstream outages, and recovery pressure.

Outline:

1. Why `/health` can lie.
2. Loop heartbeats and stale/missing/error states.
3. Freshness envelopes for mirrored upstream data.
4. Durable wakeups, token buckets, and recovery backpressure.
5. Turning observability from noise into operational signal.

Thumbnail: `assets/thumbnails/png/medium-04-health-operation-alive.png`

## 5. Offline POS Is Queue Ownership, Not Just Caching

Thesis: offline-first checkout is a distributed-systems problem hiding inside cashier UX.

Outline:

1. Why local retry loops are not enough.
2. Local CRUD queue and replayable sale writes.
3. Reactive offline count and operator trust.
4. Stale auth vs unauthenticated auth.
5. Hardware realities: scales, scanners, printers, LAN identity.

Thumbnail: `assets/thumbnails/png/medium-05-offline-pos-queue.png`

## 6. The Revert Wave

Thesis: engineering maturity is knowing what to revert, what to preserve, and what to rewrite.

Outline:

1. How broad static-analysis cleanup created noise.
2. Controlled revert vs panic rollback.
3. Selectively preserving security, correctness, and packaging fixes.
4. Generated SDKs, coverage artifacts, and review noise.
5. Better CI: domain gates over badge collection.

Thumbnail: `assets/thumbnails/png/medium-06-revert-wave.png`

