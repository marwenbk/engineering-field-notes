# LinkedIn Draft 04: Provider Migrations Leave Dust Everywhere

A provider migration always looks smaller before you open the repo.

"Change the client."

"Swap the env vars."

"Update the model name."

Then the old provider appears in tests, factories, retry assumptions, response helpers, scripts, CI, and one little utility file with a name everyone has learned to fear.

Getting the new provider to answer once usually happens early.

Removing the old provider's vocabulary from the system takes longer.

Old mocks.

Old settings.

Old compatibility paths.

Old response shapes hiding behind innocent helper names.

If those survive, the migration leaves behind 2 mental models. The product moved, but the code still thinks in the previous contract.

I like migrations that end with deletion.

Delete the old path while the reason is still fresh.

Make the new boundary boring.

Future you has enough problems already.

Thumbnail: `assets/thumbnails/png/linkedin-04-provider-migration.png`
