import { createFileRoute } from "@tanstack/react-router";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function PlanPage() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        When
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">90-day plan</h1>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">
        Resource splits are <Kind k="RECOMMENDATION" /> based on opportunity scores,
        not on a finance model of your actual P&L. Three modes below.
      </p>

      <section className="mt-8">
        <h2 className="font-display text-2xl">Budget split</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-bg-elev text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle">
              <tr>
                <th className="px-3 py-2">Theatre</th>
                <th className="px-3 py-2">Conservative</th>
                <th className="px-3 py-2">Balanced</th>
                <th className="px-3 py-2">Aggressive</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Kozhikode residential", "30%", "25%", "20%"],
                ["Ernakulam C&I + apartments", "25%", "24%", "28%"],
                ["Thrissur residential + referral", "20%", "16%", "14%"],
                ["TVM Cantonment / apartments", "10%", "12%", "12%"],
                ["Kannur (meter-gated)", "5%", "8%", "10%"],
                ["Kottayam NRI", "5%", "6%", "6%"],
                ["Tests: Palakkad B2B, Malappuram 3 kW", "5%", "6%", "7%"],
                ["Wayanad / Idukki mass", "0%", "0%", "0%"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-line">
                  {r.map((c) => (
                    <td key={c} className="px-3 py-2">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Days 1–30</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
          <li>Geo-fence Google Search to Kozhikode, Thrissur, Ernakulam peri-urban, TVM.</li>
          <li>Stand a survey pair in Central Kozhikode. Target 10 surveys/week, 4 quotes/week, 3 bookings.</li>
          <li>Call named High/VH hotels-hospitals-schools in Central Kozhikode and Chalakkudy.</li>
          <li>Build a 3 kW and 5 kW standard quote with CFA line and payback — one page.</li>
          <li>Filter every inbound lead against DTR class before dispatching a survey.</li>
          <li>KPI: cost per A/A+ lead, survey-show rate, quote-to-book. Stop if CAC {'>'} ₹12k on 3 kW.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-display text-2xl">Days 31–60</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
          <li>Open Thrissur Big Bazar + Chalakkudy as a second crew base.</li>
          <li>One apartment-association pitch (Kochi or TVM). One industrial walk in Kanjikode or Chalakkudy estate.</li>
          <li>Launch electrician referral (₹/closed kW). Duplicate the winning Malayalam ad set, kill the loser.</li>
          <li>If Kannur meters move, dump 8% budget into Burnasseri immediately.</li>
          <li>KPI: 12–18 bookings/month combined. Referral share ≥ 15%.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-display text-2xl">Days 61–90</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
          <li>Scale the winning district only. Do not 'cover Kerala'.</li>
          <li>Neighbourhood 'solarised street' in the first Kozhikode ward with 3+ installs.</li>
          <li>Hire or contract one C&I closer if two industrial/apartment deals are in proposal.</li>
          <li>Stop Palakkad or Malappuram tests unless CAC and close rate beat Kozhikode.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Six months</h2>
        <ol className="mt-3 grid gap-2 text-sm">
          {[
            "M1 — Kozhikode + Thrissur residential machine. Learn CAC.",
            "M2 — Add Ernakulam peri-urban C&I. First apartment file.",
            "M3 — Double down on the cheaper CAC district. Kill the other digital geo if it loses.",
            "M4 — Kottayam NRI WhatsApp + TVM apartments. Palakkad B2B go/no-go.",
            "M5 — Referral-led, lower paid media. After-sales as the moat vs Tata.",
            "M6 — Pre-FY-end CFA rush. Crew capacity is the constraint, not leads.",
          ].map((t, i) => (
            <li key={t} className="border border-line rounded-md px-3 py-3 text-fg-muted">
              <span className="font-mono text-xs text-fg-subtle mr-2">{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 mb-6">
        <h2 className="font-display text-2xl">Seasonality (hypothesis)</h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
          No monthly sales series was uploaded. Working hypotheses only: monsoon
          (Jun–Sep) suppresses surveys and installs on tile roofs; Onam/Vishu cash
          and FY-end CFA rushes lift bookings; March is historically a close month
          for subsidy schemes. Spend more on leads in Dec–Feb and post-Onam; keep
          crews for Jan–May installs; do not buy expensive clicks in peak monsoon
          unless you have indoor-close NRI deals.
        </p>
      </section>
    </div>
  );
}
