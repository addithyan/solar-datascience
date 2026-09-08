import { i as __toESM } from "../_runtime.mjs";
import { n as districts } from "./data-CGaxaat-.mjs";
import { n as fmt1, r as fmtInr } from "./format-885mhSkx.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roi-ivbS9Dra.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TARIFF = { note: "KSERC retail supply order, energy charges w.e.f. 01.04.2025–31.03.2027. Telescopic 0–50 ₹3.35, 51–100 ₹4.25, 101–150 ₹5.35, 151–200 ₹7.20, 201–250 ₹8.50. Non-telescopic 0–300 ₹6.75 … above 500 ₹9.20. Plus duty. Avoided-cost used here is a blended ESTIMATE." };
function simulate(opts) {
	const annualKwh = opts.kw * opts.psh * 365 * .75;
	const gross = opts.kw * 1e3 * opts.costPerW;
	const cfaAmt = opts.cfa ? opts.kw >= 3 ? 78e3 : opts.kw >= 2 ? 6e4 : 3e4 : 0;
	const net = Math.max(gross - cfaAmt, 0);
	let prod = annualKwh;
	let save = 0;
	for (let y = 1; y <= opts.years; y++) {
		save += prod * opts.tariff;
		prod *= 1 - opts.degradation;
	}
	const payback = net <= 0 ? 0 : net / (annualKwh * opts.tariff);
	return {
		annualKwh,
		gross,
		cfaAmt,
		net,
		save,
		payback
	};
}
function RoiPage() {
	const [kw, setKw] = (0, import_react.useState)(3);
	const [distId, setDistId] = (0, import_react.useState)("kozhikode");
	const [tariff, setTariff] = (0, import_react.useState)(7.5);
	const [cost, setCost] = (0, import_react.useState)(62);
	const [cfa, setCfa] = (0, import_react.useState)(true);
	const [seg, setSeg] = (0, import_react.useState)("home");
	const d = districts.find((x) => x.id === distId) ?? districts[0];
	const scen = (0, import_react.useMemo)(() => {
		const base = {
			kw,
			psh: d.psh,
			tariff,
			costPerW: cost,
			cfa: cfa && seg === "home",
			degradation: .006,
			years: 20
		};
		return {
			conservative: simulate({
				...base,
				psh: d.psh - .3,
				tariff: tariff - 1,
				costPerW: cost + 8
			}),
			base: simulate(base),
			optimistic: simulate({
				...base,
				psh: d.psh + .2,
				tariff: tariff + 1.2,
				costPerW: cost - 6
			})
		};
	}, [
		kw,
		d,
		tariff,
		cost,
		cfa,
		seg
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "Financial attractiveness"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl tracking-tight",
				children: "ROI & profit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg-muted max-w-2xl leading-relaxed",
				children: [TARIFF.note, " Generation uses district peak-sun-hour ESTIMATES × 0.75 performance ratio. CFA is the published PM Surya Ghar ladder, residential only."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-fg-muted",
						children: ["District", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 h-11 w-full rounded-md border border-line bg-bg-elev px-3 text-fg",
							value: distId,
							onChange: (e) => setDistId(e.target.value),
							children: districts.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: x.id,
								children: x.name
							}, x.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-fg-muted",
						children: [
							"System kW",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 1,
								max: 20,
								step: 1,
								value: kw,
								onChange: (e) => setKw(Number(e.target.value)),
								className: "mt-3 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-fg",
								children: [kw, " kW"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-fg-muted",
						children: [
							"Avoided tariff ₹/kWh",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 4,
								max: 12,
								step: .1,
								value: tariff,
								onChange: (e) => setTariff(Number(e.target.value)),
								className: "mt-3 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-fg",
								children: ["₹", tariff.toFixed(1)]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-fg-muted",
						children: [
							"Installed cost ₹/W",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 45,
								max: 85,
								step: 1,
								value: cost,
								onChange: (e) => setCost(Number(e.target.value)),
								className: "mt-3 w-full"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-fg",
								children: [
									"₹",
									cost,
									"/W"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-fg-muted flex items-center gap-2 mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: cfa,
							onChange: (e) => setCfa(e.target.checked)
						}), "Apply PM Surya Ghar CFA (homes)"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm text-fg-muted",
						children: ["Segment", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "mt-1 h-11 w-full rounded-md border border-line bg-bg-elev px-3 text-fg",
							value: seg,
							onChange: (e) => setSeg(e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "home",
								children: "Residential"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "shop",
								children: "Commercial (no CFA)"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-3",
				children: [
					"conservative",
					"base",
					"optimistic"
				].map((k) => {
					const s = scen[k];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line bg-bg-elev p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl capitalize",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "ESTIMATE" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid gap-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Year-1 kWh"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: fmt1(s.annualKwh)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Gross cost"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: fmtInr(s.gross)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "CFA"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: fmtInr(s.cfaAmt)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Net investment"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: fmtInr(s.net)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "Simple payback"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-mono",
										children: [s.payback.toFixed(1), " yr"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-fg-subtle",
										children: "20-yr savings"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-mono",
										children: fmtInr(s.save)
									})]
								})
							]
						})]
					}, k);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-fg-subtle",
				children: [
					"PSH for ",
					d.name,
					": ",
					d.psh,
					" kWh/m²/day (ESTIMATE). Degradation 0.6%/yr. No financing interest in the simple payback. Sensitivity: a ₹1/kWh tariff move shifts payback ~12–15%. An 8 ₹/W cost move shifts it ~1 year on a 3 kW home."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Installer unit economics"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted max-w-2xl leading-relaxed",
						children: "No dealer price list was uploaded. The table below is a planning model so you do not optimise for “number of 1 kW installs”."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-x-auto rounded-lg border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-bg-elev text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Package"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Rev (EST.)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Gross margin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Target CAC"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Why"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
								[
									"1 kW home",
									"₹55–70k",
									"Thin",
									"< ₹3k",
									"Usually destroys contribution after survey."
								],
								[
									"3 kW home",
									"₹1.8–2.5L",
									"Healthy",
									"< ₹8k",
									"CFA max. Default SKU."
								],
								[
									"5 kW villa",
									"₹2.8–3.6L",
									"Healthy",
									"< ₹12k",
									"No extra CFA vs 3 kW — sell on bill, not subsidy."
								],
								[
									"10 kW shop",
									"₹4.5–6.5L",
									"Better",
									"< ₹18k",
									"Daytime load. Storage rules may apply >10 kW domestic."
								],
								[
									"Apartment 20 kW",
									"₹9–14L",
									"Good",
									"Time, not ads",
									"Committee cycle. One referral street."
								],
								[
									"Industrial 100 kW",
									"₹40–55L",
									"Best ₹",
									"Sales hire",
									"Palakkad/Chalakkudy. Long cycle, fat contribution."
								]
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "border-t border-line",
								children: r.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-fg-muted",
									children: c
								}, c))
							}, r[0])) })]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { RoiPage as component };
