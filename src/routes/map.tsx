import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { districts, meta } from "@/data";
import { KeralaTiles } from "@/components/KeralaTiles";
import { ClientChart } from "@/components/ClientChart";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/map")({ component: MapPage });

function MapPage() {
  const scatter = districts.map((d) => ({
    name: d.name,
    x: d.opportunityScore,
    y: d.marketingEase,
    z: d.balanceMw,
    q: d.quadrant,
  }));

  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-6xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        Opportunity vs difficulty
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">
        Priority map
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-fg-muted leading-relaxed">
        X is overall opportunity (profit-weighted). Y is marketing ease.
        Median split: {meta.attMedian.toFixed(0)} opportunity · {meta.easeMedian.toFixed(0)} ease.
        High technical scores in the highlands sit in the deprioritise box on purpose.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <KeralaTiles />
        <ClientChart height={340}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
              <CartesianGrid stroke="#2a2e2a" />
              <XAxis
                dataKey="x"
                type="number"
                name="Opportunity"
                stroke="#6e746d"
                tick={{ fill: "#a8ada6", fontSize: 11 }}
                domain={[20, 80]}
                label={{ value: "Opportunity", fill: "#6e746d", fontSize: 11, position: "insideBottom", offset: -2 }}
              />
              <YAxis
                dataKey="y"
                type="number"
                name="Ease"
                stroke="#6e746d"
                tick={{ fill: "#a8ada6", fontSize: 11 }}
                domain={[0, 100]}
              />
              <ZAxis dataKey="z" range={[40, 160]} />
              <Tooltip
                cursor={{ stroke: "#3a403a" }}
                contentStyle={{ background: "#121412", border: "1px solid #2a2e2a", borderRadius: 8 }}
                formatter={(v, n) => [typeof v === "number" ? v.toFixed(1) : v, String(n)]}
                labelFormatter={(_, p) => (p?.[0]?.payload as { name: string } | undefined)?.name ?? ""}
              />
              <Scatter data={scatter} fill="#d7dbd4" />
            </ScatterChart>
          </ResponsiveContainer>
        </ClientChart>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {(
          [
            ["Prioritise", "High opportunity, easier acquisition. Put people here first."],
            ["Invest", "High opportunity, harder slog. Worth it with a specialist motion (C&I, terrain, NRI)."],
            ["Selective", "Easier to reach, thinner prize. Take overflow leads; don't fund it."],
            ["Deprioritise", "Low opportunity and/or hard. Only enter with a named B2B reason."],
          ] as const
        ).map(([q, copy]) => (
          <div key={q} className="rounded-lg border border-line p-4">
            <h2 className="font-display text-xl">{q}</h2>
            <p className="mt-1 text-sm text-fg-muted">{copy}</p>
            <ul className="mt-3 grid gap-1">
              {districts
                .filter((d) => d.quadrant === q)
                .map((d) => (
                  <li key={d.id}>
                    <Link
                      to="/districts/$id"
                      params={{ id: d.id }}
                      className="text-sm hover:text-accent"
                    >
                      {d.name}
                      <span className="text-fg-subtle font-mono text-xs ml-2">
                        {d.opportunityScore.toFixed(0)}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="font-display text-2xl">White space</h2>
          <Kind k="DERIVED" />
        </div>
        <p className="text-sm text-fg-muted max-w-2xl mb-4">
          High remaining DTR % is negatively correlated with PM Surya Ghar
          penetration (r = −0.84). Empty transformers often mean nobody could
          or would buy — not a waiting queue. True white space is high headroom
          <em> and</em> purchasing power <em> and</em> some existing adoption.
        </p>
        <ul className="grid gap-2">
          {meta.whitespace.map((w) => (
            <li key={w.district + w.type} className="rounded-md border border-line px-4 py-3 text-sm">
              <span className="font-medium">{w.district}</span>
              <span className="text-fg-subtle font-mono text-xs ml-2">{w.type}</span>
              <p className="text-fg-muted mt-1">{w.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl mb-3">Technical vs commercial</h2>
        <ClientChart height={300}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...districts].sort((a, b) => a.rankOverall - b.rankOverall).map((d) => ({
                name: d.name.replace("Thiruvananthapuram", "TVM"),
                Technical: d.technicalIndex,
                Opportunity: d.opportunityScore,
              }))}
              margin={{ top: 8, right: 8, left: 0, bottom: 48 }}
            >
              <CartesianGrid stroke="#2a2e2a" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#a8ada6", fontSize: 10 }} interval={0} angle={-35} textAnchor="end" />
              <YAxis tick={{ fill: "#a8ada6", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#121412", border: "1px solid #2a2e2a" }} />
              <Bar dataKey="Technical" fill="#6e746d" radius={2} />
              <Bar dataKey="Opportunity" fill="#d7dbd4" radius={2} />
            </BarChart>
          </ResponsiveContainer>
        </ClientChart>
        <p className="text-xs text-fg-subtle mt-2">
          Idukki/Wayanad win the grey bar (technical) and lose the paper bar (opportunity).
          Correlation technical vs opportunity: r = −0.56.
        </p>
      </section>
    </div>
  );
}
