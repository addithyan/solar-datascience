import { cn } from "@/lib/cn";

const labels = {
  FACT: "Fact",
  DERIVED: "Derived",
  ESTIMATE: "Estimate",
  ASSUMPTION: "Assumption",
  FORECAST: "Forecast",
  RECOMMENDATION: "Call",
} as const;

export type KindKey = keyof typeof labels;

export function Kind({ k, className }: { k: KindKey; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-1.5 py-px text-[10px] font-medium uppercase tracking-[0.12em] text-fg-subtle border border-line",
        k === "FACT" && "text-vh border-vh/30",
        k === "RECOMMENDATION" && "text-accent border-line-strong",
        k === "ASSUMPTION" && "text-med border-med/30",
        k === "ESTIMATE" && "text-high border-high/30",
        className,
      )}
    >
      {labels[k]}
    </span>
  );
}
