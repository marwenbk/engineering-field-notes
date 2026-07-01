# LinkedIn Draft 14: Stale Auth Has Rules

In a POS system, a network blink should not kick a cashier out mid-checkout.

Also, offline mode cannot become a free pass.

Both mistakes are easy.

The useful state is more precise:

this person authenticated recently,

the network is temporarily gone,

the system is degraded,

and only some work can continue.

Maybe checkout keeps moving for a short window.

Maybe manager actions pause.

Maybe risky discounts require reconnection.

Maybe every offline action gets stamped and reviewed later.

That design keeps safe work alive without pretending the system has full trust.

Offline product work is full of these tiny distinctions.

They feel like edge cases until you put the product in a real shop.

Then they become the product.

Thumbnail: `assets/thumbnails/png/linkedin-14-stale-auth.png`
