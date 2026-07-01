# LinkedIn Draft 12: KPI Bugs Hide In Definitions

A KPI can be wrong while the query runs perfectly.

The SQL works.

The chart renders.

The number looks clean.

Still wrong.

Wrong timezone.

Wrong denominator.

Wrong tenant scope.

Wrong definition of active.

Cancelled records included by accident.

A date boundary that made sense in code and made no sense to the business.

Most dashboard bugs I care about live in definitions.

So I like writing down the boring parts before the chart gets too confident:

- what counts
- what gets excluded
- which time boundary is used
- who is supposed to act on the number
- how fresh it needs to be

I want the dashboard to tell me the number, and what action that number can safely support.

Thumbnail: `assets/thumbnails/png/linkedin-12-kpi-truth.png`
