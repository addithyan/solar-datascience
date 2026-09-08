import { createFileRoute } from "@tanstack/react-router";
import { Kind } from "@/components/Kind";

export const Route = createFileRoute("/playbook")({ component: PlaybookPage });

function PlaybookPage() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-10 max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3">
        How to sell
      </p>
      <h1 className="font-display text-3xl md:text-4xl tracking-tight">Playbook</h1>

      <section className="mt-8">
        <h2 className="font-display text-2xl">Channel stack</h2>
        <p className="mt-2 text-sm text-fg-muted leading-relaxed">
          Do not run every channel. CAC in Kerala rooftop is destroyed by
          statewide Facebook spray and by knocking on Very Low DTRs.
        </p>
        <div className="mt-4 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="bg-bg-elev text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle">
              <tr>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Channel</th>
                <th className="px-3 py-2">Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Primary", "Google Search", "Intent: subsidy, KSEB solar, district + solar. Geo-restrict."],
                ["Primary", "WhatsApp", "Quote PDFs, NRI groups, electrician forwards, site-survey booking."],
                ["Secondary", "Facebook / Instagram (ml)", "Lead ads in Kozhikode, Thrissur, TVM, Kottayam only."],
                ["Secondary", "Electricians / contractors", "₹/kW referral. They already know the roof."],
                ["Secondary", "Google Maps", "C&I and 'solar installer near me'."],
                ["Experimental", "Apartment association nights", "One close = a building."],
                ["Experimental", "Church / mosque / temple committees", "Kottayam, Malappuram, Thrissur."],
                ["Avoid first", "Statewide TV / big hoardings", "Cannot filter DTR class."],
                ["Avoid first", "Door-to-door in Idukki/Wayanad", "Density kills walking CAC."],
                ["Avoid first", "Newspaper run-of-press", "Unmeasurable vs Search."],
              ].map((r) => (
                <tr key={r[1]} className="border-t border-line">
                  <td className="px-3 py-2 text-fg-subtle">{r[0]}</td>
                  <td className="px-3 py-2 font-medium">{r[1]}</td>
                  <td className="px-3 py-2 text-fg-muted">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Message</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted">
          <li><span className="text-fg">Lead with: </span>Your 200+ unit slab is the expensive one. Solar cuts that first.</li>
          <li><span className="text-fg">Second: </span>PM Surya Ghar CFA — ₹30k / ₹60k / ₹78k. We file it; we do not promise the credit date.</li>
          <li><span className="text-fg">Third: </span>Payback in years, not “free electricity forever”.</li>
          <li><span className="text-fg">NRI: </span>Caretaker + app monitoring. The house works while you are in Doha.</li>
          <li><span className="text-fg">C&I: </span>Daytime load match. Export tariff is a rounding error; self-use is the product.</li>
          <li><span className="text-fg">Never: </span>Guaranteed 1:1 lifetime net metering, “free solar”, attacking KSEB, or shaming neighbours.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Lead grades</h2>
        <p className="mt-2 text-xs flex items-center gap-2 text-fg-subtle">
          <Kind k="RECOMMENDATION" /> No CRM history was supplied. This is a scoring rubric, not a predicted close rate.
        </p>
        <dl className="mt-4 grid gap-3">
          {[
            ["A+", "Independent house or C&I, High/VH DTR with ≥40 kW remaining, bill ≥ ₹3,500/month or daytime load, owner-occupied or NRI with caretaker, 3-phase or clearly 1-phase ≤3 kW."],
            ["A", "Same but bill ₹2,000–3,500, or apartment common-load with committee champion."],
            ["B", "Medium class DTR, or tenant with NOC path, or 1 kW curiosity that can be upsold to 3 kW."],
            ["C", "Low class DTR — quote only with a feasibility disclaimer and a smaller system."],
            ["D", "Very Low DTR, BPL slab, no roof rights, or 'just checking subsidy'. Do not survey."],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-line px-4 py-3">
              <dt className="font-mono text-sm">{k}</dt>
              <dd className="text-sm text-fg-muted mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Funnel</h2>
        <ol className="mt-4 grid gap-2 text-sm">
          {[
            ["Awareness", "Search + geo social. KPI: cost/click, qualified geo %."],
            ["Lead", "Form or WhatsApp. Fail: statewide junk. Fix: pin the district."],
            ["Qualify", "Bill photo, roof photo, DTR class from this app. Fail: surveying D leads."],
            ["Survey", "48-hour SLA in priority theatres. Fail: 10-day waits."],
            ["Quote", "3 kW and 5 kW packages + one right-sized option. Fail: 20-page proposals."],
            ["Finance / CFA", "Bank loan + PM Surya Ghar file. Fail: promising subsidy dates."],
            ["Book / install", "Crew density in Kozhikode+Thrissur first. Fail: statewide hopping."],
            ["Commission", "Net meter chase. Fail: Kannur three-phase quotes in a stock-out."],
            ["Referral", "₹ incentive after first bill. Neighbourhood 'solarised street' in Central Kozhikode."],
          ].map(([k, v], i) => (
            <li key={k} className="flex gap-3 border border-line rounded-md px-3 py-3">
              <span className="font-mono text-xs text-fg-subtle">{i + 1}</span>
              <span><strong className="text-fg">{k}.</strong> <span className="text-fg-muted">{v}</span></span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 mb-6">
        <h2 className="font-display text-2xl">Psychology by district type</h2>
        <ul className="mt-3 grid gap-2 text-sm text-fg-muted leading-relaxed">
          <li><span className="text-fg">Kochi / TVM urban: </span>status + bill + speed. Neighbour already has it. Trust and after-sales beat a ₹2/W discount vs Tata.</li>
          <li><span className="text-fg">Thrissur / Kottayam: </span>community proof. One church or gold-showroom install is worth a week of ads.</li>
          <li><span className="text-fg">Malabar (Kozhikode, Kannur, Malappuram): </span>Gulf WhatsApp, Malayalam creative, 3 kW subsidy as the hero number.</li>
          <li><span className="text-fg">Palakkad industrial: </span>engineer-to-engineer. Irradiance and daytime kWh, not subsidy posters.</li>
          <li><span className="text-fg">Highlands: </span>do not educate the mass market from Kochi. If you go, go B2B to a named estate.</li>
        </ul>
      </section>
    </div>
  );
}
