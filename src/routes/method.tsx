import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/data";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/method")({ component: MethodPage });

function MethodPage() {
  const w = meta.weights;
  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        How this was built
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">Method & data</h1>

      <section className="mt-8">
        <h2 className="font-display text-2xl">The extract</h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
          14 KSEB Renewable Energy Feasibility PDFs dated 8 Sep 2026, 2,000
          transformers each, 28,000 rows. Columns: District, Section, Transformer,
          90% Cap kW, Issued kW, Connected kW, Balance kW, %, Class.
          Balance % = (Balance ÷ 90% DTR capacity) × 100.
        </p>
        <ul className="mt-3 grid gap-1 text-sm text-fg-muted">
          <li>Rows extracted: {String(meta.quality.rowsExtracted)}</li>
          <li>Duplicate district+section+name: {String(meta.quality.duplicateKeys)}</li>
          <li>Negatives: {String(meta.quality.negativeValues)}</li>
          <li>Missing % / Unknown class: {String(meta.quality.missingPct)} — imputed from balance/cap; retained.</li>
          <li>Formula mismatches: {String(meta.quality.formulaMismatches)} — overloaded DTRs floored at 0; retained as saturated.</li>
        </ul>
        <p className="mt-3 text-sm text-fg-muted leading-relaxed">{String(meta.quality.sampleCap)}</p>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">{String(meta.quality.adminMismatch)}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Data dictionary</h2>
        <div className="mt-4 grid gap-3">
          {meta.dictionary.map((v) => (
            <article key={v.name} className="rounded-md border border-line p-4">
              <h3 className="font-medium">{v.name}</h3>
              <p className="text-sm text-fg-muted mt-1">{v.desc}</p>
              <p className="text-xs text-fg-subtle mt-2">
                {v.type} · {v.unit} · {v.source} · {v.observed}
              </p>
              <p className="text-xs text-fg-muted mt-1">{v.limits}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Opportunity weights</h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
          The example 15% technical / 15% market split was rejected. Technical
          feasibility is abundant (median remaining 86%). The binding constraints
          are conversion, purchasing power, CAC and remaining feeder room in
          <em> places people actually buy</em>. Profit index is the heaviest term.
        </p>
        <ul className="mt-3 grid gap-1 text-sm font-mono">
          {Object.entries(w).map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-line py-1">
              <span className="text-fg-muted">{k}</span>
              <span>{Math.round(v * 100)}%</span>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 font-medium">Sensitivity (top 5)</h3>
        <ul className="mt-2 grid gap-2 text-sm text-fg-muted">
          {Object.entries(meta.sensitivity).map(([k, v]) => (
            <li key={k}>
              <span className="text-fg">{k}: </span>
              {v.order.slice(0, 5).join(" → ")}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-fg-muted">
          Top 5 membership is stable except under a technical-heavy scheme, which
          would wrongly promote Palakkad/Kottayam over Ernakulam — the error the
          user asked us not to make.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Correlations (n=14)</h2>
        <p className="text-xs text-fg-subtle mt-1">Directional only. Small n.</p>
        <ul className="mt-3 grid gap-1 text-sm font-mono">
          {meta.correlations.map((c) => (
            <li key={c.x + c.y} className="flex justify-between border-b border-line py-1">
              <span className="text-fg-muted mr-3">{c.x} vs {c.y}</span>
              <span>{c.r.toFixed(3)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Purchasing Capacity Index</h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
          40% per-capita GDDP (DES 2024–25 constant) + 20% urbanisation + 25%
          remittance score (<Kind k="ASSUMPTION" /> — not an official district
          remittance series) + 15% revealed willingness (PMSG installs / HH,
          capped so saturation is not rewarded as 'more ability'). Wealth ≠
          solar purchase; this is a proxy stack.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">This is not a purchase-probability model</h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
          No labelled won/lost leads were provided. Scores prioritise where to
          spend the next rupee. They do not output P(purchase). Do not quote
          conversion percentages as facts.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Sources</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
          <li>KSEB RE Feasibility PDFs, 14 districts, 8 Sep 2026 — DTR remaining capacity. FACT.</li>
          <li>Kerala Data Portal / DES — households, population, GDDP 2024–25. FACT.</li>
          <li>ETV Bharat, 21 Aug 2026, KSEB RTI — district PM Surya Ghar applications & installs. FACT.</li>
          <li>KSERC retail supply tariff order, energy charges 01.04.2025–31.03.2027. FACT.</li>
          <li>MNRE / PIB — PM Surya Ghar CFA ladder and national progress. FACT.</li>
          <li>Tata Power, 11–12 Aug 2026 — 61,000+ Kerala rooftops, 273 MWp, 16 channel partners. COMPANY CLAIM.</li>
          <li>Onmanorama, 6 Sep 2026 — Kannur net-meter shortage. FACT (journalism).</li>
          <li>The Hindu / Economic Review 2025 — state solar ~1.85 GW domestic rooftop by Mar 2026. FACT.</li>
          <li>FGE Solar summary of KSERC 2025 RE/net-metering rules (July 2026). SECONDARY — verify on gazette before quoting a customer.</li>
          <li>District PSH / generation — ESTIMATE from typical meteorological patterns, not a site TMY.</li>
          <li>Remittance scores, friction, competition 0–100 — ASSUMPTION informed by PMSG volume and terrain.</li>
          <li>Installer ₹/W and margins — ESTIMATE from 2025–26 Kerala residential quotes, not your books.</li>
        </ul>
      </section>

      <section className="mt-10 mb-6">
        <h2 className="font-display text-2xl">Collect next</h2>
        <ul className="mt-3 grid gap-1 text-sm text-fg-muted">
          <li>Your CRM: source, district, DTR class, won/lost, CAC, margin.</li>
          <li>Full KSEB DTR dump (uncapped) so Ernakulam/TVM cores are complete.</li>
          <li>Electrical-section to LSG (panchayat/municipality) crosswalk.</li>
          <li>Net-meter stock by circle, weekly.</li>
          <li>Actual module/inverter COGS.</li>
        </ul>
      </section>
    </div>
  );
}
