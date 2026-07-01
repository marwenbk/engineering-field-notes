# LinkedIn Draft 16: Generated Clients Are Product Surface

Generated SDKs look like build output until another package depends on them.

Then they become product surface.

If CI imports the generated client, if the dashboard builds against it, if another package consumes compiled output directly, the generated files have a contract.

Breaking them is an integration break.

The discipline I like is simple:

generate from the contract,

verify the generated output,

make the import path explicit.

When the server changes shape, the client should change predictably.

When the client changes unexpectedly, CI should complain.

When a package consumes compiled output, the build should prove that output exists.

Generated code can stay boring.

It only stays boring when the contract around it is strong.

Thumbnail: `assets/thumbnails/png/linkedin-16-sdk.png`
