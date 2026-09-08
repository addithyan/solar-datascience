import { cn } from "@/lib/cn";
import { Kind, type KindKey } from "./Kind";

export function Stat({
  label,
  value,
  hint,
  kind,
  className,
}: {
  label: string;
  value: string;
  hint?: string;
  kind?: KindKey;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-line bg-bg-elev p-4", className)}>
      <div className="flex items-center justify-between gap-2 mb-2">
        <p className="text-[11px] uppercase tracking-[0.14em] text-fg-subtle">{label}</p>
        {kind ? <Kind k={kind} /> : null}
      </div>
      <p className="font-display text-2xl tabular-nums tracking-tight">{value}</p>
      {hint ? <p className="mt-1 text-xs text-fg-muted leading-snug">{hint}</p> : null}
    </div>
  );
}
