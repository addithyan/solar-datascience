import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { districts } from "@/data";
import { fmtInr, fmt1 } from "@/lib/format";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/roi")({ component: RoiPage });

const TARIFF = {
  note: "KSERC retail supply order, energy charges w.e.f. 01.04.2025–31.03.2027. Telescopic 0–50 ₹3.35, 51–100 ₹4.25, 101–150 ₹5.35, 151–200 ₹7.20, 201–250 ₹8.50. Non-telescopic 0–300 ₹6.75 … above 500 ₹9.20. Plus duty. Avoided-cost used here is a blended ESTIMATE.",
};

function simulate(opts: {
  kw: number;
  psh: number;
  tariff: number;
  costPerW: number;
  cfa: boolean;
  degradation: number;
  years: number;
}) {
  const annualKwh = opts.kw * opts.psh * 365 * 0.75; // PR 0.75 includes monsoon/soiling ESTIMATE
  const gross = opts.kw * 1000 * opts.costPerW;
  const cfaAmt = opts.cfa ? (opts.kw >= 3 ? 78000 : opts.kw >= 2 ? 60000 : 30000) : 0;
  const net = Math.max(gross - cfaAmt, 0);
  let prod = annualKwh;
  let save = 0;
  for (let y = 1; y <= opts.years; y++) {
    save += prod * opts.tariff;
    prod *= 1 - opts.degradation;
  }
  const payback = net <= 0 ? 0 : net / (annualKwh * opts.tariff);
  return { annualKwh, gross, cfaAmt, net, save, payback };
}

function RoiPage() {
  const [kw, setKw] = useState(3);
  const [distId, setDistId] = useState("kozhikode");
  const [tariff, setTariff] = useState(7.5);
  const [cost, setCost] = useState(62);
  const [cfa, setCfa] = useState(true);
  const [seg, setSeg] = useState<"home" | "shop">("home");
  const d = districts.find((x) => x.id === distId) ?? districts[0];

  const scen = useMemo(() => {
    const base = { kw, psh: d.psh, tariff, costPerW: cost, cfa: cfa && seg === "home", degradation: 0.006, years: 20 };
    return {
      conservative: simulate({ ...base, psh: d.psh - 0.3, tariff: tariff - 1, costPerW: cost + 8 }),
      base: simulate(base),
      optimistic: simulate({ ...base, psh: d.psh + 0.2, tariff: tariff + 1.2, costPerW: cost - 6 }),
    };
  }, [kw, d, tariff, cost, cfa, seg]);

  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-6xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        Financial attractiveness
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">ROI & profit</h1>
      <p className="mt-3 text-sm text-fg-muted max-w-2xl leading-relaxed">
        {TARIFF.note} Generation uses district peak-sun-hour ESTIMATES × 0.75 performance ratio.
        CFA is the published PM Surya Ghar ladder, residential only.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <label className="text-sm text-fg-muted">
          District
          <select className="mt-1 h-11 w-full rounded-md border border-line bg-bg-elev px-3 text-fg" value={distId} onChange={(e) => setDistId(e.target.value)}>
            {districts.map((x) => (
              <option key={x.id} value={x.id}>{x.name}</option>
            ))}
          </select>
        </label>
        <label className="text-sm text-fg-muted">
          System kW
          <input type="range" min={1} max={20} step={1} value={kw} onChange={(e) => setKw(Number(e.target.value))} className="mt-3 w-full" />
          <span className="font-mono text-fg">{kw} kW</span>
        </label>
        <label className="text-sm text-fg-muted">
          Avoided tariff ₹/kWh
          <input type="range" min={4} max={12} step={0.1} value={tariff} onChange={(e) => setTariff(Number(e.target.value))} className="mt-3 w-full" />
          <span className="font-mono text-fg">₹{tariff.toFixed(1)}</span>
        </label>
        <label className="text-sm text-fg-muted">
          Installed cost ₹/W
          <input type="range" min={45} max={85} step={1} value={cost} onChange={(e) => setCost(Number(e.target.value))} className="mt-3 w-full" />
          <span className="font-mono text-fg">₹{cost}/W</span>
        </label>
        <label className="text-sm text-fg-muted flex items-center gap-2 mt-6">
          <input type="checkbox" checked={cfa} onChange={(e) => setCfa(e.target.checked)} />
          Apply PM Surya Ghar CFA (homes)
        </label>
        <label className="text-sm text-fg-muted">
          Segment
          <select className="mt-1 h-11 w-full rounded-md border border-line bg-bg-elev px-3 text-fg" value={seg} onChange={(e) => setSeg(e.target.value as "home" | "shop")}>
            <option value="home">Residential</option>
            <option value="shop">Commercial (no CFA)</option>
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {(["conservative", "base", "optimistic"] as const).map((k) => {
          const s = scen[k];
          return (
            <div key={k} className="rounded-lg border border-line bg-bg-elev p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl capitalize">{k}</h2>
                <Kind k="ESTIMATE" />
              </div>
              <dl className="mt-3 grid gap-1 text-sm">
                <div className="flex justify-between"><dt className="text-fg-subtle">Year-1 kWh</dt><dd className="font-mono">{fmt1(s.annualKwh)}</dd></div>
                <div className="flex justify-between"><dt className="text-fg-subtle">Gross cost</dt><dd className="font-mono">{fmtInr(s.gross)}</dd></div>
                <div className="flex justify-between"><dt className="text-fg-subtle">CFA</dt><dd className="font-mono">{fmtInr(s.cfaAmt)}</dd></div>
                <div className="flex justify-between"><dt className="text-fg-subtle">Net investment</dt><dd className="font-mono">{fmtInr(s.net)}</dd></div>
                <div className="flex justify-between"><dt className="text-fg-subtle">Simple payback</dt><dd className="font-mono">{s.payback.toFixed(1)} yr</dd></div>
                <div className="flex justify-between"><dt className="text-fg-subtle">20-yr savings</dt><dd className="font-mono">{fmtInr(s.save)}</dd></div>
              </dl>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-fg-subtle">
        PSH for {d.name}: {d.psh} kWh/m²/day (ESTIMATE). Degradation 0.6%/yr. No financing interest in the simple payback.
        Sensitivity: a ₹1/kWh tariff move shifts payback ~12–15%. An 8 ₹/W cost move shifts it ~1 year on a 3 kW home.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Installer unit economics</h2>
        <p className="mt-2 text-sm text-fg-muted max-w-2xl leading-relaxed">
          No dealer price list was uploaded. The table below is a planning model so you
          do not optimise for “number of 1 kW installs”.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-bg-elev text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle">
              <tr>
                <th className="px-3 py-2">Package</th>
                <th className="px-3 py-2">Rev (EST.)</th>
                <th className="px-3 py-2">Gross margin</th>
                <th className="px-3 py-2">Target CAC</th>
                <th className="px-3 py-2">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 kW home", "₹55–70k", "Thin", "< ₹3k", "Usually destroys contribution after survey."],
                ["3 kW home", "₹1.8–2.5L", "Healthy", "< ₹8k", "CFA max. Default SKU."],
                ["5 kW villa", "₹2.8–3.6L", "Healthy", "< ₹12k", "No extra CFA vs 3 kW — sell on bill, not subsidy."],
                ["10 kW shop", "₹4.5–6.5L", "Better", "< ₹18k", "Daytime load. Storage rules may apply >10 kW domestic."],
                ["Apartment 20 kW", "₹9–14L", "Good", "Time, not ads", "Committee cycle. One referral street."],
                ["Industrial 100 kW", "₹40–55L", "Best ₹", "Sales hire", "Palakkad/Chalakkudy. Long cycle, fat contribution."],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-line">
                  {r.map((c) => (
                    <td key={c} className="px-3 py-2 text-fg-muted">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
