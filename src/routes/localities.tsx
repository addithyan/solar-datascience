import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { districts, sections } from "@/data";
import { leads } from "@/data/leads";
import { classBg, fmtKw } from "@/lib/format";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/localities")({ component: LocalitiesPage });

function LocalitiesPage() {
  const [q, setQ] = useState("");
  const [dist, setDist] = useState("all");
  const [tab, setTab] = useState<"sections" | "named">("sections");

  const filtered = useMemo(() => {
    return sections.filter((s) => {
      if (dist !== "all" && s.districtId !== dist) return false;
      if (!q.trim()) return true;
      const n = q.toLowerCase();
      return s.section.toLowerCase().includes(n) || s.district.toLowerCase().includes(n);
    });
  }, [q, dist]);

  const named = useMemo(() => {
    return leads.filter((l) => {
      if (dist !== "all" && l.districtId !== dist) return false;
      if (!q.trim()) return true;
      const n = q.toLowerCase();
      return (
        l.name.toLowerCase().includes(n) ||
        l.section.toLowerCase().includes(n) ||
        l.district.toLowerCase().includes(n) ||
        l.tags.some((t) => t.includes(n))
      );
    });
  }, [q, dist]);

  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-6xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        229 electrical sections
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">Localities</h1>
      <p className="mt-3 text-sm text-fg-muted max-w-2xl leading-relaxed">
        These are KSEB electrical sections, not panchayats. Named clues are DTR
        nicknames that look like hotels, hospitals, schools, factories, shops or
        offices sitting on High / Very High remaining capacity — a calling list,
        not a CRM.
      </p>

      <div className="mt-5 flex flex-col sm:flex-row gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search section, transformer, tag…"
          className="h-11 flex-1 rounded-md border border-line bg-bg-elev px-3 text-sm outline-none focus:border-line-strong"
        />
        <select
          value={dist}
          onChange={(e) => setDist(e.target.value)}
          className="h-11 rounded-md border border-line bg-bg-elev px-3 text-sm"
        >
          <option value="all">All districts</option>
          {districts.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          className={tab === "sections" ? "h-10 px-3 rounded-sm bg-accent text-accent-fg text-sm" : "h-10 px-3 rounded-sm border border-line text-sm"}
          onClick={() => setTab("sections")}
        >
          Sections ({filtered.length})
        </button>
        <button
          className={tab === "named" ? "h-10 px-3 rounded-sm bg-accent text-accent-fg text-sm" : "h-10 px-3 rounded-sm border border-line text-sm"}
          onClick={() => setTab("named")}
        >
          Named clues ({named.length})
        </button>
      </div>

      {tab === "sections" ? (
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm min-w-[800px]">
            <thead className="text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Section</th>
                <th className="px-3 py-2">District</th>
                <th className="px-3 py-2">DTRs</th>
                <th className="px-3 py-2">Balance</th>
                <th className="px-3 py-2">High+</th>
                <th className="px-3 py-2">VL%</th>
                <th className="px-3 py-2">Named</th>
                <th className="px-3 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 80).map((s) => (
                <tr key={s.id} className="border-t border-line">
                  <td className="px-3 py-2 font-mono text-xs text-fg-subtle">{s.rank}</td>
                  <td className="px-3 py-2 font-medium">{s.section}</td>
                  <td className="px-3 py-2 text-fg-muted">{s.district}</td>
                  <td className="px-3 py-2 font-mono">{s.transformers}</td>
                  <td className="px-3 py-2 font-mono">{fmtKw(s.balanceKw)}</td>
                  <td className="px-3 py-2 font-mono">{s.highPlusShare}%</td>
                  <td className="px-3 py-2 font-mono">{s.saturatedShare}%</td>
                  <td className="px-3 py-2 font-mono">{s.namedClues}</td>
                  <td className="px-3 py-2 font-mono">{s.opportunityScore.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm min-w-[860px]">
            <thead className="text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev">
              <tr>
                <th className="px-3 py-2">Grade</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Section</th>
                <th className="px-3 py-2">District</th>
                <th className="px-3 py-2">Tags</th>
                <th className="px-3 py-2">Balance</th>
                <th className="px-3 py-2">Class</th>
              </tr>
            </thead>
            <tbody>
              {named.slice(0, 100).map((l, i) => (
                <tr key={l.district + l.section + l.name + i} className="border-t border-line">
                  <td className="px-3 py-2 font-mono text-xs">{l.leadGrade}</td>
                  <td className="px-3 py-2 font-medium">{l.name}</td>
                  <td className="px-3 py-2 text-fg-muted">{l.section}</td>
                  <td className="px-3 py-2 text-fg-muted">{l.district}</td>
                  <td className="px-3 py-2 text-xs text-fg-subtle">{l.tags.join(", ")}</td>
                  <td className="px-3 py-2 font-mono">{fmtKw(l.balanceKw)}</td>
                  <td className="px-3 py-2">
                    <span className={classBg(l.klass) + " px-1.5 py-0.5 rounded-full text-[11px]"}>
                      {l.klass}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-3 text-xs text-fg-subtle flex items-center gap-2">
        <Kind k="ASSUMPTION" /> Name tags are regex on DTR labels. A transformer called
        “HOTEL HIVE INN” may serve the hotel, the street, or both.
      </p>
    </div>
  );
}
