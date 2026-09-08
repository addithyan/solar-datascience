import { Link } from "@tanstack/react-router";
import { districts } from "@/data";
import { cn } from "@/lib/cn";

const LAYOUT: Array<{ id: string; col: string; row: string }> = [
  { id: "kasaragod", col: "3 / 5", row: "1" },
  { id: "kannur", col: "2 / 4", row: "2" },
  { id: "wayanad", col: "4 / 6", row: "2" },
  { id: "kozhikode", col: "2 / 4", row: "3" },
  { id: "malappuram", col: "2 / 4", row: "4" },
  { id: "palakkad", col: "4 / 6", row: "4" },
  { id: "thrissur", col: "2 / 4", row: "5" },
  { id: "ernakulam", col: "2 / 4", row: "6" },
  { id: "idukki", col: "4 / 6", row: "6" },
  { id: "alappuzha", col: "1 / 3", row: "7" },
  { id: "kottayam", col: "3 / 5", row: "7" },
  { id: "pathanamthitta", col: "3 / 5", row: "8" },
  { id: "kollam", col: "2 / 4", row: "9" },
  { id: "thiruvananthapuram", col: "2 / 4", row: "10" },
];

function fill(score: number) {
  if (score >= 65) return "bg-vh/25 border-vh/50 text-fg";
  if (score >= 55) return "bg-high/20 border-high/40 text-fg";
  if (score >= 45) return "bg-med/15 border-med/35 text-fg";
  return "bg-bg-subtle border-line text-fg-muted";
}

export function KeralaTiles({
  activeId,
}: {
  activeId?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <div
        className="grid gap-1.5 min-w-[280px] mx-auto"
        style={{
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gridTemplateRows: "repeat(10, minmax(44px, auto))",
        }}
      >
        {LAYOUT.map((cell) => {
          const d = districts.find((x) => x.id === cell.id);
          if (!d) return null;
          const active = activeId === d.id;
          return (
            <Link
              key={d.id}
              to="/districts/$id"
              params={{ id: d.id }}
              className={cn(
                "rounded-md border px-2 py-1.5 min-h-11 flex flex-col justify-center",
                fill(d.opportunityScore),
                active && "ring-1 ring-accent",
              )}
              style={{ gridColumn: cell.col, gridRow: cell.row }}
            >
              <span className="text-[11px] leading-tight font-medium truncate">
                {d.name}
              </span>
              <span className="font-mono text-[11px] tabular-nums text-fg-muted">
                {d.opportunityScore.toFixed(0)} · #{d.rankOverall}
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-[11px] text-fg-subtle">
        Schematic geography — not a cadastral map. Fill = overall opportunity score.
        No lat/long in the KSEB files; this is administrative placement.
      </p>
    </div>
  );
}
