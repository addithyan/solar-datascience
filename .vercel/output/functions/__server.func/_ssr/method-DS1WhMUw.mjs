import { i as meta } from "./data-CGaxaat-.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/method-DS1WhMUw.js
var import_jsx_runtime = require_jsx_runtime();
function MethodPage() {
	const w = meta.weights;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "How this was built"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl tracking-tight",
				children: "Method & data"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "The extract"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted leading-relaxed",
						children: "14 KSEB Renewable Energy Feasibility PDFs dated 8 Sep 2026, 2,000 transformers each, 28,000 rows. Columns: District, Section, Transformer, 90% Cap kW, Issued kW, Connected kW, Balance kW, %, Class. Balance % = (Balance ÷ 90% DTR capacity) × 100."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 grid gap-1 text-sm text-fg-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Rows extracted: ", String(meta.quality.rowsExtracted)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Duplicate district+section+name: ", String(meta.quality.duplicateKeys)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Negatives: ", String(meta.quality.negativeValues)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Missing % / Unknown class: ",
								String(meta.quality.missingPct),
								" — imputed from balance/cap; retained."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Formula mismatches: ",
								String(meta.quality.formulaMismatches),
								" — overloaded DTRs floored at 0; retained as saturated."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-fg-muted leading-relaxed",
						children: String(meta.quality.sampleCap)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted leading-relaxed",
						children: String(meta.quality.adminMismatch)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Data dictionary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3",
					children: meta.dictionary.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-md border border-line p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium",
								children: v.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-fg-muted mt-1",
								children: v.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-fg-subtle mt-2",
								children: [
									v.type,
									" · ",
									v.unit,
									" · ",
									v.source,
									" · ",
									v.observed
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-fg-muted mt-1",
								children: v.limits
							})
						]
					}, v.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Opportunity weights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-fg-muted leading-relaxed",
						children: [
							"The example 15% technical / 15% market split was rejected. Technical feasibility is abundant (median remaining 86%). The binding constraints are conversion, purchasing power, CAC and remaining feeder room in",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " places people actually buy" }),
							". Profit index is the heaviest term."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-1 text-sm font-mono",
						children: Object.entries(w).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-b border-line py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg-muted",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(v * 100), "%"] })]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-medium",
						children: "Sensitivity (top 5)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 grid gap-2 text-sm text-fg-muted",
						children: Object.entries(meta.sensitivity).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg",
							children: [k, ": "]
						}), v.order.slice(0, 5).join(" → ")] }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted",
						children: "Top 5 membership is stable except under a technical-heavy scheme, which would wrongly promote Palakkad/Kottayam over Ernakulam — the error the user asked us not to make."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Correlations (n=14)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-fg-subtle mt-1",
						children: "Directional only. Small n."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-1 text-sm font-mono",
						children: meta.correlations.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-b border-line py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-fg-muted mr-3",
								children: [
									c.x,
									" vs ",
									c.y
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.r.toFixed(3) })]
						}, c.x + c.y))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Purchasing Capacity Index"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-fg-muted leading-relaxed",
					children: [
						"40% per-capita GDDP (DES 2024–25 constant) + 20% urbanisation + 25% remittance score (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "ASSUMPTION" }),
						" — not an official district remittance series) + 15% revealed willingness (PMSG installs / HH, capped so saturation is not rewarded as 'more ability'). Wealth ≠ solar purchase; this is a proxy stack."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "This is not a purchase-probability model"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg-muted leading-relaxed",
					children: "No labelled won/lost leads were provided. Scores prioritise where to spend the next rupee. They do not output P(purchase). Do not quote conversion percentages as facts."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Sources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm text-fg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "KSEB RE Feasibility PDFs, 14 districts, 8 Sep 2026 — DTR remaining capacity. FACT." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Kerala Data Portal / DES — households, population, GDDP 2024–25. FACT." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ETV Bharat, 21 Aug 2026, KSEB RTI — district PM Surya Ghar applications & installs. FACT." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "KSERC retail supply tariff order, energy charges 01.04.2025–31.03.2027. FACT." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "MNRE / PIB — PM Surya Ghar CFA ladder and national progress. FACT." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tata Power, 11–12 Aug 2026 — 61,000+ Kerala rooftops, 273 MWp, 16 channel partners. COMPANY CLAIM." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Onmanorama, 6 Sep 2026 — Kannur net-meter shortage. FACT (journalism)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The Hindu / Economic Review 2025 — state solar ~1.85 GW domestic rooftop by Mar 2026. FACT." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "FGE Solar summary of KSERC 2025 RE/net-metering rules (July 2026). SECONDARY — verify on gazette before quoting a customer." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "District PSH / generation — ESTIMATE from typical meteorological patterns, not a site TMY." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Remittance scores, friction, competition 0–100 — ASSUMPTION informed by PMSG volume and terrain." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Installer ₹/W and margins — ESTIMATE from 2025–26 Kerala residential quotes, not your books." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Collect next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-1 text-sm text-fg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your CRM: source, district, DTR class, won/lost, CAC, margin." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Full KSEB DTR dump (uncapped) so Ernakulam/TVM cores are complete." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Electrical-section to LSG (panchayat/municipality) crosswalk." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Net-meter stock by circle, weekly." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Actual module/inverter COGS." })
					]
				})]
			})
		]
	});
}
//#endregion
export { MethodPage as component };
