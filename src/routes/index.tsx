import { createFileRoute, Link } from "@tanstack/react-router";
import { districts, meta } from "@/data";
import { fmtInt, fmt1 } from "@/lib/format";
import { Kind } from "@/components/Kind";
import { Stat } from "@/components/Stat";
import { KeralaTiles } from "@/components/KeralaTiles";
import { FOCUS_ANSWERS, LOCALITIES_FIRST, TOP3 } from "@/content/focus";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Command });

function Command() {
  const sw = meta.statewide;
  const top = districts.slice(0, 5);
  const worst = [...districts].sort((a, b) => a.rankOverall - b.rankOverall).slice(-3);

  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-6xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        Executive command
      </p>
      <h1 className="font-display text-3xl md:text-5xl leading-[1.12] tracking-tight max-w-3xl">
        Sell where the grid still has room and the bills still hurt.
      </h1>
      <p className="mt-4 max-w-2xl text-fg-muted text-[15px] leading-relaxed">
        28,000 KSEB distribution transformers across all 14 districts were scored
        against income, urbanisation, PM Surya Ghar adoption and competition.
        Technical headroom without purchasing power is a trap. Idukki and Wayanad
        look perfect on feasibility class — and rank last on profit.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          kind="FACT"
          label="Sample remaining headroom"
          value={`${fmt1(sw.balanceMw)} MW`}
          hint="Sum of DTR balance in the 2,000-per-district extract — a lower bound, not the state total."
        />
        <Stat
          kind="FACT"
          label="High + Very High sites"
          value={fmtInt((sw.classCounts["Very High"] ?? 0) + (sw.classCounts.High ?? 0))}
          hint={`${fmt1(((sw.classCounts["Very High"] + sw.classCounts.High) / sw.sampleTransformers) * 100)}% of sampled DTRs can still take RE.`}
        />
        <Stat
          kind="FACT"
          label="PM Surya Ghar installs"
          value={fmtInt(sw.pmsgInstallsKnown)}
          hint="KSEB RTI via ETV Bharat, 21 Aug 2026. Statewide, not just this DTR sample."
        />
        <Stat
          kind="DERIVED"
          label="Median remaining %"
          value={`${fmt1(sw.medianPct)}%`}
          hint="Most sampled transformers are still open. Saturation is clustered in rich, urban, already-solarised pockets."
        />
      </div>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4 mb-4">
          <h2 className="font-display text-2xl tracking-tight">First three theatres</h2>
          <Kind k="RECOMMENDATION" />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {TOP3.map((t) => {
            const d = districts.find((x) => x.name === t.name);
            return (
              <Link
                key={t.name}
                to="/districts/$id"
                params={{ id: d?.id ?? t.name.toLowerCase() }}
                className="rounded-lg border border-line bg-bg-elev p-5 hover:border-line-strong transition-colors"
              >
                <p className="font-mono text-xs text-fg-subtle">0{t.rank}</p>
                <h3 className="font-display text-2xl mt-1">{t.name}</h3>
                <p className="mt-2 text-sm text-fg-muted leading-relaxed">{t.why}</p>
                <p className="mt-3 text-sm text-fg leading-relaxed">
                  <span className="text-fg-subtle">Do: </span>
                  {t.do}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-2xl tracking-tight mb-4">Priority geography</h2>
          <KeralaTiles />
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-tight mb-4">Scoreboard</h2>
          <ol className="grid gap-1">
            {top.map((d) => (
              <li key={d.id}>
                <Link
                  to="/districts/$id"
                  params={{ id: d.id }}
                  className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-bg-hover"
                >
                  <span className="font-mono text-xs text-fg-subtle w-5">
                    {d.rankOverall}
                  </span>
                  <span className="flex-1 text-sm">{d.name}</span>
                  <span className="font-mono text-sm tabular-nums">{d.opportunityScore.toFixed(1)}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-fg-subtle">Deprioritise this quarter</p>
          <ol className="grid gap-1 mt-1">
            {worst.map((d) => (
              <li key={d.id} className="flex items-center gap-3 px-2 py-1.5 text-fg-muted">
                <span className="font-mono text-xs w-5">{d.rankOverall}</span>
                <span className="flex-1 text-sm">{d.name}</span>
                <span className="font-mono text-sm tabular-nums">{d.opportunityScore.toFixed(1)}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight mb-2">
          Localities to open first
        </h2>
        <p className="text-sm text-fg-muted mb-4 max-w-2xl">
          Ranked by remaining kW, High/VH share, named commercial clues and parent-district
          opportunity — not by sunshine alone.
        </p>
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev">
              <tr>
                <th className="px-3 py-2 font-medium">Locality</th>
                <th className="px-3 py-2 font-medium">District</th>
                <th className="px-3 py-2 font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              {LOCALITIES_FIRST.map((row) => (
                <tr key={row.place} className="border-t border-line align-top">
                  <td className="px-3 py-3 font-medium whitespace-nowrap">{row.place}</td>
                  <td className="px-3 py-3 text-fg-muted whitespace-nowrap">{row.district}</td>
                  <td className="px-3 py-3 text-fg-muted">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-line bg-bg-elev p-5 md:p-7">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-display text-2xl tracking-tight">Kerala solar growth priority map</h2>
          <Kind k="RECOMMENDATION" />
        </div>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Top district", "Ernakulam (profit) with Kozhikode as the efficiency spearhead"],
            ["Top locality", "Central Kozhikode — 39.8 MW, 99.5% High+"],
            ["Top customer segment", "High-bill independent homes, 3–5 kW, PM Surya Ghar"],
            ["Top marketing channel", "Google Search + WhatsApp, then electrician referrals"],
            ["Top sales message", "Cut the high-slab bill. ₹78,000 CFA. 3–4 year payback."],
            ["Top system type", "3 kW / 5 kW on-grid rooftop; C&I 10–50 kW on the side"],
            ["Expected opportunity", `${fmt1(sw.balanceMw)} MW sampled headroom; conversion, not kW, is the bottleneck`],
            ["Expected profitability", "Highest in Ernakulam C&I and Kozhikode residential volume"],
            ["Key risk", "Net-meter shortage, DTR saturation in rich urban pockets, KSERC prosumer-charge drift"],
            ["Next action", "This week: Central Kozhikode + Chalakkudy/Big Bazar lists. Kill statewide generic ads."],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-line pt-3">
              <dt className="text-[11px] uppercase tracking-[0.14em] text-fg-subtle">{k}</dt>
              <dd className="mt-1 text-sm leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-tight mb-4">Direct answers</h2>
        <div className="grid gap-3">
          {FOCUS_ANSWERS.map((row, i) => (
            <details
              key={row.q}
              className="rounded-lg border border-line bg-bg-elev px-4 py-3"
              open={i < 3}
            >
              <summary className="cursor-pointer text-sm font-medium">
                {i + 1}. {row.q}
              </summary>
              <p className="mt-2 text-sm text-fg-muted leading-relaxed">{row.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="font-display text-2xl tracking-tight mb-3">Next 7 days</h2>
        <ol className="grid gap-2 text-sm">
          {[
            "Export the Central Kozhikode, Chalakkudy, Big Bazar Thrissur and Cantonment TVM section lists from this app (Localities).",
            "Launch two Google Search campaigns: Kozhikode solar subsidy, Thrissur solar subsidy. Geo-radius those cities only.",
            "Call every hotel / hospital / school named clue in Central Kozhikode with High or Very High remaining kW.",
            "Ask KSEB / channel partners about three-phase net-meter stock before quoting Kannur Burnasseri.",
            "Kill any statewide or Wayanad/Idukki residential ads already running.",
            "Price a standard 3 kW and 5 kW package after CFA; put payback on the quote, not in a brochure.",
            "Book one apartment-association meeting in Kochi or TVM for week 3.",
          ].map((t, i) => (
            <li key={t} className="flex gap-3 rounded-md border border-line px-3 py-3">
              <span className="font-mono text-xs text-fg-subtle mt-0.5">{i + 1}</span>
              <span className="text-fg-muted leading-relaxed">{t}</span>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/plan"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
          >
            Open 90-day plan <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/method"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-4 text-sm"
          >
            Data, sources, assumptions
          </Link>
        </div>
        <p className="mt-6 text-xs text-fg-subtle max-w-2xl leading-relaxed">
          Confidence on district ranking: High for relative order of the top 5
          (stable across weight schemes). Confidence on exact conversion rates: Low —
          no historical CRM was supplied; scores are a prioritisation model, not a
          trained purchase-probability model. Sample is capped at 2,000 DTRs per
          district.
        </p>
      </section>
    </div>
  );
}
