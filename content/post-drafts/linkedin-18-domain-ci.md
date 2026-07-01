# LinkedIn Draft 18: CI Should Test The Fear

I stopped thinking about CI as a row of green badges.

Lint passes.

Tests pass.

Build passes.

Good.

But the product can still be broken in the exact way users care about.

For operational systems, I like CI checks that encode domain fear.

Can the API contract still generate the client?

Can the dashboard import that client?

Can the worker replay the event it claims to handle?

Can the offline queue survive a restart?

Can the migration run twice without duplicating business state?

Those checks are specific.

That is why they help.

Now the failure I am afraid of has to show up before production.

Thumbnail: `assets/thumbnails/png/linkedin-18-domain-ci.png`
