import { cn } from "@/lib/cn";

export function ScoreBar({
  value,
  label,
  tone = "accent",
}: {
  value: number;
  label?: string;
  tone?: "accent" | "vh" | "med" | "vl";
}) {
  const w = Math.max(0, Math.min(100, value));
  return (
    <div className="min-w-0">
      {label ? (
        <div className="mb-1 flex items-baseline justify-between gap-3 text-xs">
          <span className="text-fg-muted truncate">{label}</span>
          <span className="font-mono tabular-nums text-fg">{value.toFixed(0)}</span>
        </div>
      ) : null}
      <div className="h-1.5 w-full rounded-full bg-bg-subtle overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full",
            tone === "accent" && "bg-accent",
            tone === "vh" && "bg-vh",
            tone === "med" && "bg-med",
            tone === "vl" && "bg-vl",
          )}
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}
