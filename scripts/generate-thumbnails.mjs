import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = new URL(".", import.meta.url).pathname;
const svgDir = join(outDir, "svg");

mkdirSync(svgDir, { recursive: true });

const W = {
  linkedin: [1200, 1200],
  medium: [1600, 900],
};

const colors = {
  paper: "#f4efe6",
  paper2: "#efe7da",
  ink: "#171717",
  softInk: "#292524",
  muted: "#69635d",
  faint: "#d9cec0",
  panel: "#fffaf1",
  panel2: "#fbf3e6",
  code: "#151515",
  code2: "#22201d",
  green: "#17803d",
  red: "#b42318",
  blue: "#1d4ed8",
  amber: "#b45309",
  violet: "#6d28d9",
  teal: "#0f766e",
};

const mono = "SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace";
const sans = "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";

const linkedin = [
  {
    id: "linkedin-01-ai-hot-path",
    topic: "AI boundary",
    title: "The AI win was deleting AI from the hot path",
    note: "Structured input stopped needing a model call.",
    artifact: {
      kind: "diff",
      filename: "extract/route.ts",
      lines: [
        ["-", "const fields = await llm.extract(document);"],
        ["-", "return normalizeLooseJson(fields);"],
        ["+", "const rows = parseCarrierTable(document.text);"],
        ["+", "return mapRowsToConfirmedFields(rows);"],
        [" ", ""],
        ["#", "model remains only for ambiguous pages"],
      ],
    },
  },
  {
    id: "linkedin-02-fallbacks",
    topic: "Reliability",
    title: "Graceful fallback was hiding broken contracts",
    note: "A degraded state must be visible, bounded, and harmless.",
    artifact: {
      kind: "log",
      filename: "worker.log",
      lines: [
        ["warn", "fallback_json_mode enabled after schema miss"],
        ["warn", "status kept green; operator sees no reason"],
        ["fail", "downstream consumed partial authority"],
        ["fix", "emit EXPLICIT_DEGRADED_STATE"],
        ["fix", "block irreversible action until reviewed"],
      ],
    },
  },
  {
    id: "linkedin-03-hitl-contracts",
    topic: "HITL",
    title: "Human review is a typed contract, not a text box",
    note: "Operator edits should become auditable snapshots.",
    artifact: {
      kind: "json",
      filename: "confirmed-snapshot.json",
      lines: [
        ['"documentId": "synthetic-42",'],
        ['"confirmedBy": "operator",'],
        ['"fields": {'],
        ['  "amount": { "value": "123.450", "source": "review" },'],
        ['  "office": { "value": "A1", "source": "system" }'],
        ["}"],
      ],
    },
  },
  {
    id: "linkedin-04-provider-migration",
    topic: "AI infrastructure",
    title: "Provider migration ends when the old path is deleted",
    note: "Factories, tests, settings, and scripts keep failure surfaces alive.",
    artifact: {
      kind: "checklist",
      filename: "migration-cutover.md",
      lines: [
        ["done", "new client contract stabilized"],
        ["done", "parity fixtures passed"],
        ["done", "old env vars removed"],
        ["done", "legacy tests deleted"],
        ["warn", "search scripts still import old adapter"],
      ],
    },
  },
  {
    id: "linkedin-05-authority",
    topic: "Source precedence",
    title: "Model confidence is not business truth",
    note: "The model reads. Authoritative sources decide.",
    artifact: {
      kind: "table",
      filename: "field-authority.tsv",
      headers: ["field", "first source", "fallback"],
      rows: [
        ["amount", "reviewed doc", "model"],
        ["identity", "system record", "operator"],
        ["route", "external mirror", "document"],
        ["final state", "event log", "never model"],
      ],
    },
  },
  {
    id: "linkedin-06-events",
    topic: "State design",
    title: "Status columns are not an audit trail",
    note: "Append-only events made retries explainable.",
    artifact: {
      kind: "events",
      filename: "case_events",
      rows: [
        ["08:12", "DOC_EXTRACTED", "ocr:v2"],
        ["08:15", "REVIEW_CONFIRMED", "user"],
        ["08:17", "RULES_APPLIED", "system"],
        ["08:18", "EXPORT_BLOCKED", "missing proof"],
      ],
    },
  },
  {
    id: "linkedin-07-shadow-delete",
    topic: "Migration",
    title: "Shadow-run first. Delete second.",
    note: "Deletion became safe only after parity had evidence.",
    artifact: {
      kind: "parity",
      filename: "shadow-run.csv",
      rows: [
        ["path", "cases", "mismatch"],
        ["old", "synthetic", "baseline"],
        ["new", "synthetic", "0"],
        ["cutover", "enabled", "guarded"],
      ],
    },
  },
  {
    id: "linkedin-08-retry-graveyard",
    topic: "Workers",
    title: "A retry counter became a failure machine",
    note: "Per-record attempts were replaced with idempotent reflection.",
    artifact: {
      kind: "queue",
      filename: "queue-state.txt",
      rows: [
        ["stale", "attempt=7", "no new evidence"],
        ["stale", "attempt=8", "same upstream state"],
        ["fix", "reflect()", "derive state from source"],
        ["fix", "project()", "emit only changed events"],
      ],
    },
  },
  {
    id: "linkedin-09-domain-gates",
    topic: "Safe automation",
    title: "Bad automation needed a better gate",
    note: "The system learned when to refuse action.",
    artifact: {
      kind: "code",
      filename: "domain-gate.ts",
      lines: [
        "if (!hasRequiredEvidence(caseFile)) {",
        '  return block("missing-evidence");',
        "}",
        "if (isCarrierSpecific(caseFile)) {",
        '  return requireReview("carrier-rule");',
        "}",
        "return allowDeterministicExport();",
      ],
    },
  },
  {
    id: "linkedin-10-operator-workspace",
    topic: "Operational UX",
    title: "The admin table became an operator workspace",
    note: "The UI started routing attention instead of dumping rows.",
    artifact: {
      kind: "wire",
      filename: "ops-console.sketch",
      labels: ["work queue", "freshness", "next action", "case facts"],
    },
  },
  {
    id: "linkedin-11-freshness",
    topic: "Data freshness",
    title: "A green chart still needs a freshness envelope",
    note: "Operators need to know if the loop behind the chart is alive.",
    artifact: {
      kind: "health",
      filename: "loop-heartbeat",
      rows: [
        ["api", "green", "12 ms"],
        ["mirror", "stale", "18 min"],
        ["scanner", "recovering", "backoff"],
        ["exports", "blocked", "review gate"],
      ],
    },
  },
  {
    id: "linkedin-12-kpi-truth",
    topic: "Metrics",
    title: "A KPI is wrong if scope is wrong",
    note: "Date, denominator, and tenant scope became part of the contract.",
    artifact: {
      kind: "sql",
      filename: "metric.sql",
      lines: [
        "select day, tenant_id,",
        "  count(*) filter (where final=true) as completed,",
        "  count(*) as denominator",
        "from events",
        "where day between :start and :end",
        "group by day, tenant_id;",
      ],
    },
  },
  {
    id: "linkedin-13-offline-queue",
    topic: "Retail POS",
    title: "Offline-first meant owning the queue",
    note: "Checkout resilience was not just local caching.",
    artifact: {
      kind: "state",
      filename: "sale-sync.machine",
      states: ["draft", "queued", "synced", "receipt"],
      notes: ["local write", "retryable", "server ack", "operator proof"],
    },
  },
  {
    id: "linkedin-14-stale-auth",
    topic: "Resilience",
    title: "Offline auth should degrade, not logout",
    note: "The cashier workflow survived a network blink.",
    artifact: {
      kind: "state",
      filename: "session.machine",
      states: ["fresh", "stale", "limited", "reauth"],
      notes: ["online", "cached claims", "safe actions", "only when needed"],
    },
  },
  {
    id: "linkedin-15-hardware",
    topic: "Edge systems",
    title: "Hardware support was protocol archaeology",
    note: "Scales, scanners, and printers failed at physical boundaries.",
    artifact: {
      kind: "terminal",
      filename: "device-probe",
      lines: [
        "$ scan-devices --lan",
        "scale: tcp://192.0.2.14:4001 protocol=ascii-weight",
        "printer: usb://epson mode=escpos",
        "scanner: hid://vendor synthetic events",
        "note: normalize units before sale total",
      ],
    },
  },
  {
    id: "linkedin-16-sdk",
    topic: "API contracts",
    title: "Generated SDKs are product surface",
    note: "CI and runtime imports made generated code part of the contract.",
    artifact: {
      kind: "ci",
      filename: "sdk-entrypoints.test",
      rows: [
        ["openapi", "generated", "ok"],
        ["package exports", "checked", "ok"],
        ["runtime import", "compiled", "ok"],
        ["stale artifact", "blocked", "fail fast"],
      ],
    },
  },
  {
    id: "linkedin-17-revert-wave",
    topic: "Engineering taste",
    title: "Revert noise. Keep correctness.",
    note: "The rollback kept security and packaging fixes.",
    artifact: {
      kind: "matrix",
      filename: "revert-review.md",
      headers: ["change", "decision"],
      rows: [
        ["broad lint churn", "revert"],
        ["security guard", "keep"],
        ["SDK packaging", "keep"],
        ["coverage noise", "rewrite"],
      ],
    },
  },
  {
    id: "linkedin-18-domain-ci",
    topic: "Quality",
    title: "CI got better when it encoded failure modes",
    note: "Badges mattered less than domain-specific checks.",
    artifact: {
      kind: "ci",
      filename: "domain-ci",
      rows: [
        ["authority precedence", "fixture", "pass"],
        ["stale mirror", "blocking", "pass"],
        ["missing proof", "gate", "pass"],
        ["happy path only", "removed", "skip"],
      ],
    },
  },
];

const medium = [
  {
    id: "medium-01-model-extracts-system-decides",
    topic: "AI workflow architecture",
    title: "The Model Extracts; the System Decides",
    note: "A practical boundary between probabilistic perception and deterministic authority.",
    artifact: {
      kind: "authorityWide",
      filename: "authority-map",
      rows: [
        ["field", "read by", "decided by"],
        ["amount", "model/document", "reviewed snapshot"],
        ["identity", "document", "system record"],
        ["exportability", "rules", "event gate"],
      ],
    },
  },
  {
    id: "medium-02-hitl-typed-contract",
    topic: "HITL as a typed contract",
    title: "Human Review Is Not a Text Box",
    note: "The review step should create a durable payload that downstream systems can trust.",
    artifact: {
      kind: "apiWide",
      filename: "extract-confirm-process",
      steps: ["extract", "confirm", "snapshot", "process", "event"],
    },
  },
  {
    id: "medium-03-shadow-run-delete",
    topic: "Refactoring automation safely",
    title: "Shadow-Run, Then Delete",
    note: "The safest refactor proved parity before removing the obsolete worker.",
    artifact: {
      kind: "parityWide",
      filename: "cutover-notes",
      rows: [
        ["phase", "old worker", "new projector", "decision"],
        ["shadow", "runs", "runs", "compare"],
        ["cutover", "read-only", "writes events", "guard"],
        ["cleanup", "deleted", "source of truth", "ship"],
      ],
    },
  },
  {
    id: "medium-04-health-operation-alive",
    topic: "Reliability beyond /health",
    title: "A Green API Ping Does Not Mean the Operation Is Alive",
    note: "Health has to include loops, freshness, queues, and recovery pressure.",
    artifact: {
      kind: "healthWide",
      filename: "operational-health",
      rows: [
        ["signal", "state", "operator meaning"],
        ["api", "green", "requests accepted"],
        ["mirror", "stale", "numbers may lie"],
        ["queue", "recovering", "expect delay"],
        ["export", "blocked", "review needed"],
      ],
    },
  },
  {
    id: "medium-05-offline-pos-queue",
    topic: "Edge systems",
    title: "Offline POS Is Queue Ownership, Not Just Caching",
    note: "Checkout resilience is a distributed-systems problem inside cashier UX.",
    artifact: {
      kind: "offlineWide",
      filename: "sale-sync",
      steps: ["local sale", "queued write", "sync ack", "receipt proof"],
    },
  },
  {
    id: "medium-06-revert-wave",
    topic: "Undoing cleanup without losing fixes",
    title: "The Revert Wave",
    note: "Engineering maturity is knowing what to revert, what to preserve, and what to rewrite.",
    artifact: {
      kind: "matrixWide",
      filename: "rollback-decision",
      rows: [
        ["bucket", "examples", "decision"],
        ["noise", "broad cleanup", "revert"],
        ["correctness", "money, auth, SDK", "keep"],
        ["process", "weak quality gates", "rewrite"],
      ],
    },
  },
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(text, x, y, maxChars, size, fill = colors.ink, weight = 800, lineHeight = 1.12, family = sans) {
  return wrap(text, maxChars)
    .map((line, index) => `<text x="${x}" y="${y + index * size * lineHeight}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`)
    .join("\n");
}

function monoText(text, x, y, size = 24, fill = colors.softInk, weight = 650) {
  return `<text x="${x}" y="${y}" font-family="${mono}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(text)}</text>`;
}

function panel(x, y, w, h, title = "", tone = "light") {
  const fill = tone === "dark" ? colors.code : colors.panel;
  const stroke = tone === "dark" ? "#34302b" : colors.faint;
  const header = title
    ? `<rect x="${x}" y="${y}" width="${w}" height="54" rx="10" fill="${tone === "dark" ? colors.code2 : colors.panel2}" stroke="${stroke}" stroke-width="2"/>
       ${monoText(title, x + 24, y + 35, 20, tone === "dark" ? "#ddd6ce" : colors.muted, 700)}`
    : "";
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    ${header}
  `;
}

function lineColor(prefix) {
  if (["+", "fix", "done", "pass", "green", "ok"].includes(prefix)) return colors.green;
  if (["-", "fail", "warn", "stale", "blocked"].includes(prefix)) return colors.red;
  if (["#", "note", "skip", "recovering"].includes(prefix)) return colors.amber;
  return colors.muted;
}

function renderDiff(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.lines.forEach(([prefix, text], index) => {
    const yy = y + 92 + index * 42;
    out += monoText(prefix, x + 28, yy, 24, lineColor(prefix), 850);
    out += monoText(text, x + 72, yy, 24, prefix === " " ? "#d6d3d1" : "#f5f5f4", 650);
  });
  return out;
}

function renderLog(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.lines.forEach(([level, text], index) => {
    const yy = y + 94 + index * 45;
    out += monoText(level.padEnd(5), x + 28, yy, 23, lineColor(level), 850);
    out += monoText(text, x + 125, yy, 23, "#f5f5f4", 620);
  });
  return out;
}

function renderCode(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.lines.forEach((line, index) => {
    out += monoText(String(index + 1).padStart(2, " "), x + 28, y + 92 + index * 39, 21, "#78716c", 700);
    out += monoText(line, x + 88, y + 92 + index * 39, 21, "#f5f5f4", 620);
  });
  return out;
}

function renderJson(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.lines.forEach((line, index) => {
    out += monoText(line, x + 36, y + 92 + index * 39, 22, "#f5f5f4", 620);
  });
  return out;
}

function renderChecklist(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  a.lines.forEach(([state, text], index) => {
    const yy = y + 95 + index * 58;
    const c = lineColor(state);
    out += `<rect x="${x + 30}" y="${yy - 25}" width="30" height="30" rx="6" fill="${c}" opacity="0.16" stroke="${c}" stroke-width="2"/>`;
    out += monoText(state === "done" ? "x" : "!", x + 40, yy - 3, 22, c, 900);
    out += monoText(text, x + 82, yy, 24, colors.softInk, 650);
  });
  return out;
}

function renderTable(a, x, y, w, h) {
  const headers = a.headers || a.rows[0] || [];
  const rows = a.headers ? a.rows : a.rows.slice(1);
  const colW = w / headers.length;
  let out = panel(x, y, w, h, a.filename);
  headers.forEach((head, index) => {
    out += monoText(head, x + 26 + index * colW, y + 92, 22, colors.muted, 850);
  });
  out += `<line x1="${x + 24}" y1="${y + 113}" x2="${x + w - 24}" y2="${y + 113}" stroke="${colors.faint}" stroke-width="2"/>`;
  rows.forEach((row, r) => {
    const yy = y + 158 + r * 58;
    row.forEach((cell, c) => {
      out += monoText(cell, x + 26 + c * colW, yy, 21, c === 0 ? colors.ink : colors.softInk, c === 0 ? 850 : 650);
    });
  });
  return out;
}

function renderEvents(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  a.rows.forEach((row, index) => {
    const yy = y + 95 + index * 62;
    out += `<circle cx="${x + 44}" cy="${yy - 7}" r="8" fill="${colors.blue}"/>`;
    if (index < a.rows.length - 1) out += `<line x1="${x + 44}" y1="${yy + 4}" x2="${x + 44}" y2="${yy + 48}" stroke="${colors.faint}" stroke-width="3"/>`;
    out += monoText(row[0], x + 70, yy, 21, colors.muted, 700);
    out += monoText(row[1], x + 160, yy, 22, colors.ink, 850);
    out += monoText(row[2], x + 495, yy, 21, colors.softInk, 600);
  });
  return out;
}

function renderParity(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  const rows = a.rows;
  rows.forEach((row, index) => {
    const yy = y + 90 + index * 68;
    row.forEach((cell, col) => {
      const fill = index === 0 ? colors.muted : col === row.length - 1 && /0|enabled|guarded|ship/.test(cell) ? colors.green : colors.softInk;
      out += monoText(cell, x + 32 + col * (w - 64) / row.length, yy, index === 0 ? 21 : 24, fill, index === 0 ? 850 : 650);
    });
    if (index === 0) out += `<line x1="${x + 28}" y1="${yy + 23}" x2="${x + w - 28}" y2="${yy + 23}" stroke="${colors.faint}" stroke-width="2"/>`;
  });
  return out;
}

function renderQueue(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.rows.forEach((row, index) => {
    const yy = y + 92 + index * 55;
    out += monoText(row[0], x + 30, yy, 22, lineColor(row[0]), 850);
    out += monoText(row[1], x + 150, yy, 22, "#f5f5f4", 650);
    out += monoText(row[2], x + 365, yy, 22, "#d6d3d1", 600);
  });
  return out;
}

function renderWire(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  out += `<rect x="${x + 34}" y="${y + 82}" width="${w - 68}" height="${h - 120}" rx="8" fill="#f7f0e5" stroke="${colors.faint}" stroke-width="2"/>`;
  out += `<rect x="${x + 58}" y="${y + 112}" width="${w * 0.32}" height="${h - 180}" rx="8" fill="${colors.panel}" stroke="${colors.faint}" stroke-width="2"/>`;
  out += `<rect x="${x + w * 0.42}" y="${y + 112}" width="${w * 0.47}" height="116" rx="8" fill="${colors.panel}" stroke="${colors.teal}" stroke-width="3"/>`;
  out += `<rect x="${x + w * 0.42}" y="${y + 260}" width="${w * 0.47}" height="${h - 328}" rx="8" fill="${colors.panel}" stroke="${colors.faint}" stroke-width="2"/>`;
  for (let i = 0; i < 5; i++) {
    out += `<line x1="${x + 86}" y1="${y + 155 + i * 52}" x2="${x + w * 0.34}" y2="${y + 155 + i * 52}" stroke="${colors.faint}" stroke-width="14" stroke-linecap="round"/>`;
  }
  a.labels.forEach((label, index) => {
    const coords = [
      [x + 80, y + 118],
      [x + w * 0.43, y + 146],
      [x + w * 0.62, y + 206],
      [x + w * 0.45, y + 300],
    ][index];
    out += monoText(label, coords[0], coords[1], 20, index === 2 ? colors.teal : colors.muted, 850);
  });
  return out;
}

function renderHealth(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  a.rows.forEach((row, index) => {
    const yy = y + 95 + index * 61;
    const c = lineColor(row[1]);
    out += monoText(row[0], x + 34, yy, 23, colors.ink, 850);
    out += `<rect x="${x + w * 0.34}" y="${yy - 30}" width="180" height="36" rx="18" fill="${c}" opacity="0.14"/>`;
    out += monoText(row[1], x + w * 0.34 + 22, yy - 6, 20, c, 850);
    out += monoText(row[2], x + w * 0.64, yy, 22, colors.softInk, 650);
  });
  return out;
}

function renderState(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  const stateW = (w - 90) / a.states.length;
  a.states.forEach((state, index) => {
    const bx = x + 38 + index * stateW;
    const by = y + 120;
    out += `<rect x="${bx}" y="${by}" width="${stateW - 28}" height="116" rx="12" fill="${colors.panel2}" stroke="${index === 0 ? colors.blue : colors.faint}" stroke-width="3"/>`;
    out += monoText(state, bx + 20, by + 48, 22, colors.ink, 850);
    out += textBlock(a.notes[index], bx + 20, by + 82, 14, 17, colors.muted, 650, 1.08, mono);
    if (index < a.states.length - 1) {
      const ax = bx + stateW - 22;
      out += `<line x1="${ax}" y1="${by + 58}" x2="${ax + 26}" y2="${by + 58}" stroke="${colors.muted}" stroke-width="3"/><path d="M ${ax + 17} ${by + 48} L ${ax + 30} ${by + 58} L ${ax + 17} ${by + 68}" fill="none" stroke="${colors.muted}" stroke-width="3"/>`;
    }
  });
  return out;
}

function renderTerminal(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.lines.forEach((line, index) => {
    out += monoText(line, x + 34, y + 94 + index * 42, 21, index === 0 ? colors.green : "#f5f5f4", index === 0 ? 850 : 620);
  });
  return out;
}

function renderCi(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename, "dark");
  a.rows.forEach((row, index) => {
    const yy = y + 94 + index * 50;
    const status = row[row.length - 1];
    out += monoText(status.toUpperCase().padEnd(8), x + 32, yy, 21, lineColor(status), 850);
    out += monoText(row.slice(0, -1).join("  "), x + 172, yy, 21, "#f5f5f4", 620);
  });
  return out;
}

function renderMatrix(a, x, y, w, h) {
  let out = panel(x, y, w, h, a.filename);
  const rows = a.headers ? [a.headers, ...a.rows] : a.rows;
  rows.forEach((row, index) => {
    const yy = y + 90 + index * 58;
    row.forEach((cell, col) => {
      const c = col === row.length - 1 && index > 0 ? (cell === "keep" ? colors.green : cell === "revert" ? colors.red : colors.amber) : index === 0 ? colors.muted : colors.softInk;
      out += monoText(cell, x + 30 + col * ((w - 60) / row.length), yy, index === 0 ? 20 : 22, c, index === 0 || col === row.length - 1 ? 850 : 620);
    });
  });
  return out;
}

function renderWideSteps(a, x, y, w, h, accent = colors.blue) {
  let out = panel(x, y, w, h, a.filename);
  const gap = 32;
  const boxW = (w - 76 - gap * (a.steps.length - 1)) / a.steps.length;
  a.steps.forEach((step, index) => {
    const bx = x + 38 + index * (boxW + gap);
    const by = y + 122;
    out += `<rect x="${bx}" y="${by}" width="${boxW}" height="145" rx="10" fill="${colors.panel2}" stroke="${index === 0 ? accent : colors.faint}" stroke-width="3"/>`;
    out += textBlock(step, bx + 22, by + 58, 12, 24, colors.ink, 850, 1.05, mono);
    if (index < a.steps.length - 1) {
      const ax = bx + boxW + 6;
      out += `<line x1="${ax}" y1="${by + 72}" x2="${ax + gap - 12}" y2="${by + 72}" stroke="${colors.muted}" stroke-width="3"/><path d="M ${ax + gap - 22} ${by + 62} L ${ax + gap - 10} ${by + 72} L ${ax + gap - 22} ${by + 82}" fill="none" stroke="${colors.muted}" stroke-width="3"/>`;
    }
  });
  return out;
}

function artifact(a, x, y, w, h) {
  switch (a.kind) {
    case "diff": return renderDiff(a, x, y, w, h);
    case "log": return renderLog(a, x, y, w, h);
    case "code":
    case "sql": return renderCode(a, x, y, w, h);
    case "json": return renderJson(a, x, y, w, h);
    case "checklist": return renderChecklist(a, x, y, w, h);
    case "table":
    case "authorityWide": return renderTable(a, x, y, w, h);
    case "events": return renderEvents(a, x, y, w, h);
    case "parity":
    case "parityWide": return renderParity(a, x, y, w, h);
    case "queue": return renderQueue(a, x, y, w, h);
    case "wire": return renderWire(a, x, y, w, h);
    case "health":
    case "healthWide": return renderHealth(a, x, y, w, h);
    case "state": return renderState(a, x, y, w, h);
    case "terminal": return renderTerminal(a, x, y, w, h);
    case "ci": return renderCi(a, x, y, w, h);
    case "matrix":
    case "matrixWide": return renderMatrix(a, x, y, w, h);
    case "apiWide":
    case "offlineWide": return renderWideSteps(a, x, y, w, h, a.kind === "offlineWide" ? colors.teal : colors.blue);
    default: return renderCode({ filename: a.filename || "note", lines: ["artifact missing"] }, x, y, w, h);
  }
}

function bg(width, height) {
  return `
    <defs>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.1" fill="#d8ccbb" opacity="0.58"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="${colors.paper}"/>
    <rect width="${width}" height="${height}" fill="url(#dots)" opacity="0.68"/>
    <path d="M 0 ${height * 0.82} C ${width * 0.28} ${height * 0.74}, ${width * 0.58} ${height * 0.92}, ${width} ${height * 0.78} L ${width} ${height} L 0 ${height} Z" fill="${colors.paper2}" opacity="0.72"/>
  `;
}

function linkedinFrame(item, index) {
  const [width, height] = W.linkedin;
  const accent = [colors.teal, colors.blue, colors.amber, colors.red, colors.green, colors.violet][index % 6];
  const artX = 82;
  const artY = 474;
  const artW = 1036;
  const artH = 590;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${bg(width, height)}
  <rect x="58" y="54" width="1084" height="1092" rx="14" fill="none" stroke="${colors.faint}" stroke-width="2"/>
  <text x="82" y="112" font-family="${mono}" font-size="23" font-weight="850" fill="${accent}">FIELD NOTE ${String(index + 1).padStart(2, "0")} / ${esc(item.topic.toUpperCase())}</text>
  ${textBlock(item.title, 82, 210, 26, 62, colors.ink, 900, 1.02)}
  ${textBlock(item.note, 84, 365, 54, 29, colors.muted, 650, 1.14)}
  ${artifact(item.artifact, artX, artY, artW, artH)}
  <text x="82" y="1110" font-family="${mono}" font-size="20" font-weight="750" fill="${colors.muted}">synthetic artifact - no customer data - Marwen Ben Khemis</text>
</svg>`;
}

function mediumFrame(item, index) {
  const [width, height] = W.medium;
  const accent = [colors.teal, colors.blue, colors.green, colors.amber, colors.violet, colors.red][index % 6];
  const artX = 720;
  const artY = 136;
  const artW = 790;
  const artH = 605;
  const longTitle = item.title.length > 42;
  const titleSize = longTitle ? 58 : 72;
  const titleChars = longTitle ? 14 : 17;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${bg(width, height)}
  <rect x="64" y="60" width="1472" height="780" rx="12" fill="none" stroke="${colors.faint}" stroke-width="2"/>
  <text x="104" y="142" font-family="${mono}" font-size="24" font-weight="850" fill="${accent}">${esc(item.topic.toUpperCase())}</text>
  ${textBlock(item.title, 104, 255, titleChars, titleSize, colors.ink, 920, 1.02)}
  ${textBlock(item.note, 108, 574, 36, 31, colors.muted, 650, 1.16)}
  ${artifact(item.artifact, artX, artY, artW, artH)}
  <text x="104" y="790" font-family="${mono}" font-size="20" font-weight="750" fill="${colors.muted}">sanitized engineering artifact - Marwen Ben Khemis</text>
</svg>`;
}

function writeSet(items, platform) {
  items.forEach((item, index) => {
    const svg = platform === "linkedin" ? linkedinFrame(item, index) : mediumFrame(item, index);
    writeFileSync(join(svgDir, `${item.id}.svg`), svg);
  });
}

writeSet(linkedin, "linkedin");
writeSet(medium, "medium");

const manifest = {
  generatedAt: new Date().toISOString(),
  style: "v2 artifact-first thumbnails. Synthetic engineering evidence, sanitized snippets, no private screenshots or data.",
  linkedin: linkedin.map(({ id, title, topic }) => ({ id, title, kicker: topic, svg: `svg/${id}.svg`, png: `png/${id}.png` })),
  medium: medium.map(({ id, title, topic }) => ({ id, title, kicker: topic, svg: `svg/${id}.svg`, png: `png/${id}.png` })),
};

function contactSheetSvg() {
  const entries = [...manifest.linkedin, ...manifest.medium];
  const cols = 4;
  const cellW = 520;
  const cellH = 530;
  const pad = 46;
  const width = cols * cellW + pad * 2;
  const rows = Math.ceil(entries.length / cols);
  const height = rows * cellH + pad * 2 + 32;
  const cards = entries.map((entry, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = pad + col * cellW;
    const y = pad + 40 + row * cellH;
    const isMedium = entry.id.startsWith("medium-");
    const imageW = isMedium ? 420 : 390;
    const imageH = isMedium ? 236 : 390;
    const imageX = x + (cellW - imageW) / 2;
    const imageY = y + 30;
    const label = entry.title.length > 42 ? `${entry.title.slice(0, 39)}...` : entry.title;
    return `
      <g>
        <rect x="${x + 12}" y="${y + 12}" width="${cellW - 24}" height="${cellH - 34}" rx="10" fill="${colors.panel}" stroke="${colors.faint}" stroke-width="2"/>
        <image href="${entry.png}" x="${imageX}" y="${imageY}" width="${imageW}" height="${imageH}" preserveAspectRatio="xMidYMid meet"/>
        <text x="${x + 42}" y="${y + 455}" font-family="${sans}" font-size="20" font-weight="850" fill="${colors.ink}">${esc(label)}</text>
        <text x="${x + 42}" y="${y + 490}" font-family="${mono}" font-size="17" font-weight="750" fill="${colors.muted}">${esc(entry.kicker)}</text>
      </g>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${bg(width, height)}
  <text x="${pad + 12}" y="52" font-family="${sans}" font-size="30" font-weight="900" fill="${colors.ink}">Artifact-first thumbnails v2</text>
  <text x="${pad + 12}" y="84" font-family="${mono}" font-size="17" font-weight="650" fill="${colors.muted}">synthetic snippets, real engineering shape, no private data</text>
  ${cards}
</svg>`;
}

writeFileSync(join(outDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
writeFileSync(join(outDir, "contact-sheet.svg"), contactSheetSvg());

console.log(`Generated ${linkedin.length + medium.length} v2 SVG thumbnails in ${svgDir}`);
