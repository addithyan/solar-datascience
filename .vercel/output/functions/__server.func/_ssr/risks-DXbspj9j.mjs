import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/risks-DXbspj9j.js
var import_jsx_runtime = require_jsx_runtime();
var RISKS = [
	{
		r: "KSERC / KSEB prosumer charging",
		p: "High",
		i: "High",
		m: "Sell self-consumption, not export. Do not oversize vs load. Watch the 8 Sep 2026 tariff-on-prosumers news — it is a recommendation, not yet a billed rule."
	},
	{
		r: "PM Surya Ghar CFA change or FY 26–27 cliff",
		p: "Medium",
		i: "High",
		m: "Always quote with and without CFA. Front-load residential in the next two quarters."
	},
	{
		r: "Net-meter stock-out (Kannur statewide 3-phase, Sep 2026)",
		p: "High",
		i: "High",
		m: "1-phase 3 kW SKU. Don't take 3-phase bookings you cannot commission."
	},
	{
		r: "DTR saturation in rich urban pockets",
		p: "High",
		i: "High",
		m: "Qualify on this app's class before survey. Zero-export / storage only as a last resort."
	},
	{
		r: "False feasibility positives (sample cap, issued≠connected)",
		p: "Medium",
		i: "Medium",
		m: "Re-check KSEB portal at quote. Issued kW may never commission — or may, tomorrow."
	},
	{
		r: "Installer quality / trust backlash",
		p: "Medium",
		i: "High",
		m: "Don't compete on ₹/W in Kochi. Warranty + local crew."
	},
	{
		r: "Tata / national brand density",
		p: "High",
		i: "Medium",
		m: "Avoid Kochi core price war. Win on speed in Kozhikode/Thrissur unsaturated feeders."
	},
	{
		r: "Flood / coastal corrosion (Alappuzha, Beach sections)",
		p: "Medium",
		i: "Medium",
		m: "Structure spec, not a cheaper rail. Skip low-lying VL areas."
	},
	{
		r: "Monsoon install delays",
		p: "High",
		i: "Low",
		m: "Survey in rain, install in dry. NRI remote-close continues."
	},
	{
		r: "Storage mandate creep (5–10 kW from Apr 2027 in some readings)",
		p: "Medium",
		i: "Medium",
		m: "Price storage as optional now; don't be surprised in FY28 quotes."
	},
	{
		r: "Module / inverter price spike",
		p: "Low",
		i: "Medium",
		m: "Hold 30-day quote validity. Dual-source ALMM modules."
	},
	{
		r: "Crew capacity at CFA rush",
		p: "High",
		i: "High",
		m: "Cap digital spend to what you can install in 45 days."
	}
];
function RisksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "What can break this"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl tracking-tight",
				children: "Risks & experiments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-x-auto rounded-lg border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-bg-elev text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Risk"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "P"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "I"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Mitigation"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RISKS.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-medium",
								children: x.r
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg-muted",
								children: x.p
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg-muted",
								children: x.i
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg-muted",
								children: x.m
							})
						]
					}, x.r)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Experiments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs text-fg-subtle flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "RECOMMENDATION" }), " Decision rules beat opinions. Sample sizes below are planning floors, not power calculations from your CRM."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3",
						children: [
							{
								h: "Kozhikode vs Thrissur residential CAC",
								hyp: "Kozhikode produces cheaper A+ leads because headroom is higher and competition is lower.",
								kpi: "CAC to booking, 30 days, ≥80 leads/geo",
								win: "Shift 10 points of budget to the cheaper geo.",
								fail: "If both CAC > ₹12k, pause paid social and keep Search only."
							},
							{
								h: "Subsidy-first vs bill-first creative",
								hyp: "Bill-first wins among 200+ unit homes; subsidy-first wins in Malappuram 3 kW.",
								kpi: "CPL and qualified-lead rate",
								win: "Keep both, mapped to segment.",
								fail: "If subsidy-first attracts D leads (no bill), kill it in Kochi/TVM."
							},
							{
								h: "Electrician referral vs cold Search",
								hyp: "Referral close rate ≥ 2× Search, CAC lower despite payout.",
								kpi: "Close rate, 40 referred leads",
								win: "Raise bounty.",
								fail: "If they send VL-DTR junk, add DTR-class filter to the payout rules."
							},
							{
								h: "Kannur 1-phase 3 kW waiting list",
								hyp: "Meter shortage is the only blocker.",
								kpi: "List size, eventual commissioning %",
								win: "Promote Kannur the week stock moves.",
								fail: "If list stays cold, the barrier was demand, not meters."
							}
						].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg border border-line p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: e.h
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-fg-muted mt-1",
									children: e.hyp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg-subtle",
										children: "KPI "
									}), e.kpi]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg-subtle",
										children: "Win "
									}), e.win]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg-subtle",
										children: "Fail "
									}), e.fail]
								})
							]
						}, e.h))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "What not to do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm text-fg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not prioritise Idukki or Wayanad because they are 88–90% Very High." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not run Kerala-wide ads. You will pay to generate leads on full transformers." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not survey Very Low class DTRs “just in case”." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not promise 1:1 net metering on 15 kW domestic systems." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not open a Wayanad office this quarter." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not treat Malappuram as poor — treat it as a 3 kW Malayalam market." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not fight Tata on brand in Edappally. Fight on unsaturated feeders they ignore." })
					]
				})]
			})
		]
	});
}
//#endregion
export { RisksPage as component };
