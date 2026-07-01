# LinkedIn Draft 08: Retry Loops Need An Exit Door

A retry loop can look busy while nothing useful is happening.

At first the design feels clean:

job failed,

increment attempts,

try again later.

Fine.

After a while, "still retrying" becomes the product's entire memory of the failure.

That is a waiting room with a cron schedule.

I started treating retries as state design instead of worker plumbing.

For each retry, I want the system to know:

- what failed
- whether anything changed since last time
- whether recovery is realistic
- when the loop stops
- who needs to see it

Some failures should become visible blocked work.

That feels less automated, which is sometimes the point.

An operator can act on a named blocked state.

They cannot act on a background loop quietly aging in the database.

Thumbnail: `assets/thumbnails/png/linkedin-08-retry-graveyard.png`
