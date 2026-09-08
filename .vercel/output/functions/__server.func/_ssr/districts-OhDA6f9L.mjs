import { i as __toESM } from "../_runtime.mjs";
import { n as districts } from "./data-CGaxaat-.mjs";
import { i as fmtInt, n as fmt1 } from "./format-885mhSkx.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ScoreBar } from "./ScoreBar-Bf4tyFZw.mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/districts-OhDA6f9L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SORTS = [
	["rankOverall", "Overall"],
	["rankProfit", "Profit"],
	["rankMarket", "Market"],
	["rankTechnical", "Technical"],
	["rankPurchasing", "Purchasing"],
	["rankConversion", "Conversion"]
];
function DistrictsPage() {
	const [sort, setSort] = (0, import_react.useState)("rankOverall");
	const rows = (0, import_react.useMemo)(() => {
		return [...districts].sort((a, b) => {
			return a[sort] - b[sort];
		});
	}, [sort]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "All 14 districts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl tracking-tight",
				children: "District ranking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fg-muted max-w-2xl leading-relaxed",
				children: "Do not rank on Very High % alone. That ranking would put Wayanad first. This table is the profit-weighted score. Each file is a 2,000-DTR sample, so remaining MW is comparable as a sample, not as a complete inventory."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: SORTS.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSort(key),
					className: sort === key ? "h-10 px-3 rounded-sm bg-accent text-accent-fg text-sm" : "h-10 px-3 rounded-sm border border-line text-sm text-fg-muted",
					children: label
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-lg border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm min-w-[860px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "#"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "District"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Opp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Balance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "VH+H"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "PMSG"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "₹/capita"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Box"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3 font-mono text-xs text-fg-subtle",
								children: d.rankOverall
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/districts/$id",
									params: { id: d.id },
									className: "font-medium hover:text-accent",
									children: d.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 w-36",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, { value: d.opportunityScore })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3 font-mono tabular-nums",
								children: d.opportunityScore.toFixed(1)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-3 font-mono tabular-nums",
								children: [fmt1(d.balanceMw), " MW"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-3 font-mono tabular-nums",
								children: [fmt1(d.highPlusShare), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3 font-mono tabular-nums",
								children: fmtInt(d.pmsgInstalls)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3 font-mono tabular-nums",
								children: fmtInt(d.pcGddp)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3 text-xs text-fg-muted",
								children: d.quadrant
							})
						]
					}, d.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-fg-subtle flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "FACT" }), " Per capita GDDP is 2024–25 constant prices (DES Kerala). PMSG counts are 21 Aug 2026 RTI. Balance MW is the DTR sample."]
			})
		]
	});
}
//#endregion
export { DistrictsPage as component };
