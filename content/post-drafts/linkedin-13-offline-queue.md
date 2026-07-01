# LinkedIn Draft 13: Offline Checkout Is About Ownership

Offline POS starts with a simple promise:

the sale survives the network outage.

Once you take that seriously, the details start multiplying.

The cashier needs to know the sale is saved.

The queue needs stable IDs.

Replay needs idempotency.

The UI needs to show pending work without making the cashier think like a backend engineer.

Then comes the uncomfortable question:

who owns the sale while the server is unreachable?

The browser?

The device?

The cashier session?

The backend after replay?

If the product leaves that vague, people create their own process. Paper notes. Screenshots. Duplicate entries. Whatever gets the customer through the line.

That is usually where trust leaks out.

Offline-first, for me, is queue ownership made visible.

Thumbnail: `assets/thumbnails/png/linkedin-13-offline-queue.png`
