import { i as meta, n as districts } from "./data-CGaxaat-.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
import { t as ClientChart } from "./ClientChart-DXEaOcV8.mjs";
import { a as Scatter, c as Bar, i as XAxis, l as ResponsiveContainer, n as BarChart, o as ZAxis, r as YAxis, s as CartesianGrid, t as ScatterChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
import { t as KeralaTiles } from "./KeralaTiles-DE5336LP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-DK_3KnTY.js
var import_jsx_runtime = require_jsx_runtime();
function MapPage() {
	const scatter = districts.map((d) => ({
		name: d.name,
		x: d.opportunityScore,
		y: d.marketingEase,
		z: d.balanceMw,
		q: d.quadrant
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "Opportunity vs difficulty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl tracking-tight",
				children: "Priority map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-sm text-fg-muted leading-relaxed",
				children: [
					"X is overall opportunity (profit-weighted). Y is marketing ease. Median split: ",
					meta.attMedian.toFixed(0),
					" opportunity · ",
					meta.easeMedian.toFixed(0),
					" ease. High technical scores in the highlands sit in the deprioritise box on purpose."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeralaTiles, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
					height: 340,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, {
							margin: {
								top: 8,
								right: 8,
								bottom: 8,
								left: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: "#2a2e2a" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "x",
									type: "number",
									name: "Opportunity",
									stroke: "#6e746d",
									tick: {
										fill: "#a8ada6",
										fontSize: 11
									},
									domain: [20, 80],
									label: {
										value: "Opportunity",
										fill: "#6e746d",
										fontSize: 11,
										position: "insideBottom",
										offset: -2
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									dataKey: "y",
									type: "number",
									name: "Ease",
									stroke: "#6e746d",
									tick: {
										fill: "#a8ada6",
										fontSize: 11
									},
									domain: [0, 100]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZAxis, {
									dataKey: "z",
									range: [40, 160]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: { stroke: "#3a403a" },
									contentStyle: {
										background: "#121412",
										border: "1px solid #2a2e2a",
										borderRadius: 8
									},
									formatter: (v, n) => [typeof v === "number" ? v.toFixed(1) : v, String(n)],
									labelFormatter: (_, p) => (p?.[0]?.payload)?.name ?? ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
									data: scatter,
									fill: "#d7dbd4"
								})
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-3 md:grid-cols-2",
				children: [
					["Prioritise", "High opportunity, easier acquisition. Put people here first."],
					["Invest", "High opportunity, harder slog. Worth it with a specialist motion (C&I, terrain, NRI)."],
					["Selective", "Easier to reach, thinner prize. Take overflow leads; don't fund it."],
					["Deprioritise", "Low opportunity and/or hard. Only enter with a named B2B reason."]
				].map(([q, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-fg-muted",
							children: copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-1",
							children: districts.filter((d) => d.quadrant === q).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/districts/$id",
								params: { id: d.id },
								className: "text-sm hover:text-accent",
								children: [d.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg-subtle font-mono text-xs ml-2",
									children: d.opportunityScore.toFixed(0)
								})]
							}) }, d.id))
						})
					]
				}, q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "White space"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "DERIVED" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-fg-muted max-w-2xl mb-4",
						children: [
							"High remaining DTR % is negatively correlated with PM Surya Ghar penetration (r = −0.84). Empty transformers often mean nobody could or would buy — not a waiting queue. True white space is high headroom",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " and" }),
							" purchasing power ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " and" }),
							" some existing adoption."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2",
						children: meta.whitespace.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-line px-4 py-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: w.district
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg-subtle font-mono text-xs ml-2",
									children: w.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-fg-muted mt-1",
									children: w.note
								})
							]
						}, w.district + w.type))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl mb-3",
						children: "Technical vs commercial"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
						height: 300,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: [...districts].sort((a, b) => a.rankOverall - b.rankOverall).map((d) => ({
									name: d.name.replace("Thiruvananthapuram", "TVM"),
									Technical: d.technicalIndex,
									Opportunity: d.opportunityScore
								})),
								margin: {
									top: 8,
									right: 8,
									left: 0,
									bottom: 48
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "#2a2e2a",
										vertical: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: {
											fill: "#a8ada6",
											fontSize: 10
										},
										interval: 0,
										angle: -35,
										textAnchor: "end"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
										fill: "#a8ada6",
										fontSize: 11
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "#121412",
										border: "1px solid #2a2e2a"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "Technical",
										fill: "#6e746d",
										radius: 2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "Opportunity",
										fill: "#d7dbd4",
										radius: 2
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-fg-subtle mt-2",
						children: "Idukki/Wayanad win the grey bar (technical) and lose the paper bar (opportunity). Correlation technical vs opportunity: r = −0.56."
					})
				]
			})
		]
	});
}
//#endregion
export { MapPage as component };
