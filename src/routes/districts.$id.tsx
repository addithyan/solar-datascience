import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { byId, sectionsIn } from "@/data";
import { fmt1, fmtInt, fmtKw, classBg } from "@/lib/format";
import { ScoreBar } from "@/components/ScoreBar";
import { Stat } from "@/components/Stat";
import { ClientChart } from "@/components/ClientChart";
import { Kind } from "@/components/Kind";
import { NARRATIVE } from "@/content/districts";

export const Route = createFileRoute("/districts/$id")({
  component: DistrictPage,
});

function DistrictPage() {
  const { id } = Route.useParams();
  const d = byId[id];
  if (!d) {
    return (
      <div className="p-8">
        <p>Unknown district.</p>
        <Link to="/districts" className="text-sm underline">
          Back
        </Link>
      </div>
    );
  }
  const secs = sectionsIn(d.name);
  const copy = NARRATIVE[d.id];
  const classData = [
    { name: "Very High", n: d.classCounts["Very High"] },
    { name: "High", n: d.classCounts.High },
    { name: "Medium", n: d.classCounts.Medium },
    { name: "Low", n: d.classCounts.Low },
    { name: "Very Low", n: d.classCounts["Very Low"] },
  ];

  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-6xl">
      <Link to="/districts" className="text-xs uppercase tracking-[0.16em] text-fg-subtle">
        All districts
      </Link>
      <div className="mt-3 flex flex-wrap items-end gap-4">
        <h1 className="font-display text-3xl md:text-5xl tracking-tight">{d.name}</h1>
        <p className="font-mono text-sm text-fg-muted">
          Overall #{d.rankOverall} · {d.quadrant} · {d.region} Kerala
        </p>
      </div>
      <p className="mt-4 max-w-2xl text-sm text-fg-muted leading-relaxed">
        {copy?.lede ?? d.recommendedAction}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat kind="DERIVED" label="Opportunity" value={d.opportunityScore.toFixed(1)} hint={`Profit #${d.rankProfit} · Tech #${d.rankTechnical}`} />
        <Stat kind="FACT" label="Sample remaining" value={`${fmt1(d.balanceMw)} MW`} hint={`${d.sampleSections} electrical sections in the 2,000-DTR extract`} />
        <Stat kind="FACT" label="PM Surya Ghar" value={fmtInt(d.pmsgInstalls)} hint={`${d.pmsgConversion}% app→install · ${d.pmsgPenetrationHh}% of households`} />
        <Stat kind="FACT" label="Per capita GDDP" value={`₹${fmtInt(d.pcGddp)}`} hint={`${d.urbanShare}% urban · ${fmtInt(d.households)} households`} />
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-bg-elev p-5 grid gap-3">
          <h2 className="font-display text-xl">Indices</h2>
          <ScoreBar label="Technical" value={d.technicalIndex} />
          <ScoreBar label="Market size" value={d.marketIndex} />
          <ScoreBar label="Purchasing capacity" value={d.purchasingIndex} />
          <ScoreBar label="Conversion" value={d.conversionIndex} />
          <ScoreBar label="Revenue" value={d.revenueIndex} />
          <ScoreBar label="Profit" value={d.profitIndex} />
          <ScoreBar label="Marketing ease" value={d.marketingEase} />
          <ScoreBar label="Solar ROI / resource" value={d.roiIndex} />
        </div>
        <div className="rounded-lg border border-line bg-bg-elev p-5">
          <h2 className="font-display text-xl mb-3">Feasibility mix</h2>
          <ClientChart height={220}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classData} layout="vertical" margin={{ left: 16 }}>
                <CartesianGrid stroke="#2a2e2a" horizontal={false} />
                <XAxis type="number" tick={{ fill: "#a8ada6", fontSize: 11 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: "#a8ada6", fontSize: 11 }} width={80} />
                <Tooltip contentStyle={{ background: "#121412", border: "1px solid #2a2e2a" }} />
                <Bar dataKey="n" fill="#d7dbd4" radius={2} />
              </BarChart>
            </ResponsiveContainer>
          </ClientChart>
          <p className="text-xs text-fg-subtle mt-2">
            Saturated share {fmt1(d.saturatedShare)}% · mean remaining {fmt1(d.meanPct)}% · median {fmt1(d.medianPct)}%
          </p>
        </div>
      </div>

      <section className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-line p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Do</p>
          <p className="mt-2 text-sm leading-relaxed">{d.recommendedAction}</p>
        </div>
        <div className="rounded-lg border border-line p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Segment</p>
          <p className="mt-2 text-sm leading-relaxed">{d.recommendedSegment}</p>
        </div>
        <div className="rounded-lg border border-line p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Channel</p>
          <p className="mt-2 text-sm leading-relaxed">{d.recommendedChannel}</p>
        </div>
      </section>

      {copy ? (
        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl mb-2">Why this rank</h2>
            <p className="text-sm text-fg-muted leading-relaxed">{copy.why}</p>
          </div>
          <div>
            <h2 className="font-display text-xl mb-2">Watch-outs</h2>
            <p className="text-sm text-fg-muted leading-relaxed">{copy.risk}</p>
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-display text-2xl mb-3">Electrical sections in sample</h2>
        <p className="text-xs text-fg-subtle mb-3 flex items-center gap-2">
          <Kind k="FACT" /> {secs.length} sections · not a panchayat list. KSEB admin units.
        </p>
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm min-w-[720px]">
            <thead className="text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev">
              <tr>
                <th className="px-3 py-2">Section</th>
                <th className="px-3 py-2">DTRs</th>
                <th className="px-3 py-2">Balance</th>
                <th className="px-3 py-2">High+</th>
                <th className="px-3 py-2">VL</th>
                <th className="px-3 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {secs.map((s) => (
                <tr key={s.id} className="border-t border-line">
                  <td className="px-3 py-2">
                    <span className="font-medium">{s.section}</span>
                    {s.sectionCode ? (
                      <span className="ml-2 font-mono text-[11px] text-fg-subtle">{s.sectionCode}</span>
                    ) : null}
                  </td>
                  <td className="px-3 py-2 font-mono">{s.transformers}</td>
                  <td className="px-3 py-2 font-mono">{fmtKw(s.balanceKw)}</td>
                  <td className="px-3 py-2 font-mono">{s.highPlusShare}%</td>
                  <td className="px-3 py-2">
                    <span className={s.saturatedShare > 15 ? classBg("Very Low") + " px-1.5 py-0.5 rounded-full text-xs" : "font-mono"}>
                      {s.saturatedShare}%
                    </span>
                  </td>
                  <td className="px-3 py-2 font-mono">{s.opportunityScore.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
