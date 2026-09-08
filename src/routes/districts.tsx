import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { districts } from "@/data";
import { fmtInt, fmt1 } from "@/lib/format";
import { ScoreBar } from "@/components/ScoreBar";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/districts")({ component: DistrictsPage });

const SORTS = [
  ["rankOverall", "Overall"],
  ["rankProfit", "Profit"],
  ["rankMarket", "Market"],
  ["rankTechnical", "Technical"],
  ["rankPurchasing", "Purchasing"],
  ["rankConversion", "Conversion"],
] as const;

function DistrictsPage() {
  const [sort, setSort] = useState<(typeof SORTS)[number][0]>("rankOverall");
  const rows = useMemo(() => {
    return [...districts].sort((a, b) => {
      const av = a[sort] as number;
      const bv = b[sort] as number;
      return av - bv;
    });
  }, [sort]);

  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-6xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        All 14 districts
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">District ranking</h1>
      <p className="mt-3 text-sm text-fg-muted max-w-2xl leading-relaxed">
        Do not rank on Very High % alone. That ranking would put Wayanad first.
        This table is the profit-weighted score. Each file is a 2,000-DTR sample,
        so remaining MW is comparable as a sample, not as a complete inventory.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {SORTS.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSort(key)}
            className={
              sort === key
                ? "h-10 px-3 rounded-sm bg-accent text-accent-fg text-sm"
                : "h-10 px-3 rounded-sm border border-line text-sm text-fg-muted"
            }
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-sm min-w-[860px]">
          <thead className="text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev">
            <tr>
              <th className="px-3 py-2">#</th>
              <th className="px-3 py-2">District</th>
              <th className="px-3 py-2">Opp</th>
              <th className="px-3 py-2">Balance</th>
              <th className="px-3 py-2">VH+H</th>
              <th className="px-3 py-2">PMSG</th>
              <th className="px-3 py-2">₹/capita</th>
              <th className="px-3 py-2">Box</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id} className="border-t border-line">
                <td className="px-3 py-3 font-mono text-xs text-fg-subtle">{d.rankOverall}</td>
                <td className="px-3 py-3">
                  <Link to="/districts/$id" params={{ id: d.id }} className="font-medium hover:text-accent">
                    {d.name}
                  </Link>
                  <div className="mt-1 w-36">
                    <ScoreBar value={d.opportunityScore} />
                  </div>
                </td>
                <td className="px-3 py-3 font-mono tabular-nums">{d.opportunityScore.toFixed(1)}</td>
                <td className="px-3 py-3 font-mono tabular-nums">{fmt1(d.balanceMw)} MW</td>
                <td className="px-3 py-3 font-mono tabular-nums">{fmt1(d.highPlusShare)}%</td>
                <td className="px-3 py-3 font-mono tabular-nums">{fmtInt(d.pmsgInstalls)}</td>
                <td className="px-3 py-3 font-mono tabular-nums">{fmtInt(d.pcGddp)}</td>
                <td className="px-3 py-3 text-xs text-fg-muted">{d.quadrant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-fg-subtle flex items-center gap-2">
        <Kind k="FACT" /> Per capita GDDP is 2024–25 constant prices (DES Kerala).
        PMSG counts are 21 Aug 2026 RTI. Balance MW is the DTR sample.
      </p>
    </div>
  );
}
