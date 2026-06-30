# Privacy Rules

These rules define what can be published from private production work.

## Never Publish

- Customer names, operator names, importer/exporter names, or legal entities.
- Raw documents, screenshots, generated PDFs, signatures, stamps, invoices, receipts, IDs, routes, tax values, or document numbers.
- Internal endpoint names, hostnames, IP addresses, credentials, DSNs, tokens, queue names, or database table names from private systems.
- Exact production counts, QPS, pool sizes, backlog numbers, incident timestamps, or provider failure details.
- Carrier-specific rules, government/customs field names, legal mapping details, or live payloads.
- Blame language, internal politics, author emails, or private branch names.

## Safe Replacements

| Risky | Safer |
|---|---|
| government/customs platform name | external system of record |
| exact document type | regulatory document |
| bill of lading / invoice identifiers | shipping document |
| exact stuck-case count | a large backlog |
| exact table or queue name | event log / work queue |
| real payload | synthetic payload |
| real screenshot | recreated schematic |

## Claim Discipline

- Do not say "fully automated." Say "automation with human review gates."
- Do not say "perfect accuracy." Say "improved reliability under the measured workflow."
- Do not say "AI failed." Say "deterministic parsing won where input was structured."
- Do not say "Kubernetes was wrong." Say "for this stage, simpler infrastructure was the better tradeoff."
- Do not say "event sourcing solved everything." Say "append-only events made retries, audits, and derived state easier to reason about."

