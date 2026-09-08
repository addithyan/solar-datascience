import { i as __toESM } from "../_runtime.mjs";
import { a as sections, n as districts, r as leads } from "./data-CGaxaat-.mjs";
import { a as fmtKw, t as classBg } from "./format-885mhSkx.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/localities-CpMMrTZv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LocalitiesPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [dist, setDist] = (0, import_react.useState)("all");
	const [tab, setTab] = (0, import_react.useState)("sections");
	const filtered = (0, import_react.useMemo)(() => {
		return sections.filter((s) => {
			if (dist !== "all" && s.districtId !== dist) return false;
			if (!q.trim()) return true;
			const n = q.toLowerCase();
			return s.section.toLowerCase().includes(n) || s.district.toLowerCase().includes(n);
		});
	}, [q, dist]);
	const named = (0, import_react.useMemo)(() => {
		return leads.filter((l) => {
			if (dist !== "all" && l.districtId !== dist) return false;
			if (!q.trim()) return true;
			const n = q.toLowerCase();
			return l.name.toLowerCase().includes(n) || l.section.toLowerCase().includes(n) || l.district.toLowerCase().includes(n) || l.tags.some((t) => t.includes(n));
		});
	}, [q, dist]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "229 electrical sections"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-4xl tracking-tight",
				children: "Localities"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-fg-muted max-w-2xl leading-relaxed",
				children: "These are KSEB electrical sections, not panchayats. Named clues are DTR nicknames that look like hotels, hospitals, schools, factories, shops or offices sitting on High / Very High remaining capacity — a calling list, not a CRM."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col sm:flex-row gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search section, transformer, tag…",
					className: "h-11 flex-1 rounded-md border border-line bg-bg-elev px-3 text-sm outline-none focus:border-line-strong"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: dist,
					onChange: (e) => setDist(e.target.value),
					className: "h-11 rounded-md border border-line bg-bg-elev px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All districts"
					}), districts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: d.id,
						children: d.name
					}, d.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: tab === "sections" ? "h-10 px-3 rounded-sm bg-accent text-accent-fg text-sm" : "h-10 px-3 rounded-sm border border-line text-sm",
					onClick: () => setTab("sections"),
					children: [
						"Sections (",
						filtered.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: tab === "named" ? "h-10 px-3 rounded-sm bg-accent text-accent-fg text-sm" : "h-10 px-3 rounded-sm border border-line text-sm",
					onClick: () => setTab("named"),
					children: [
						"Named clues (",
						named.length,
						")"
					]
				})]
			}),
			tab === "sections" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-lg border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm min-w-[800px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "#"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Section"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "District"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "DTRs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Balance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "High+"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "VL%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Named"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Score"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.slice(0, 80).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs text-fg-subtle",
								children: s.rank
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-medium",
								children: s.section
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg-muted",
								children: s.district
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono",
								children: s.transformers
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono",
								children: fmtKw(s.balanceKw)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 font-mono",
								children: [s.highPlusShare, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 font-mono",
								children: [s.saturatedShare, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono",
								children: s.namedClues
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono",
								children: s.opportunityScore.toFixed(1)
							})
						]
					}, s.id)) })]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-lg border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm min-w-[860px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Grade"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Section"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "District"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Tags"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Balance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2",
								children: "Class"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: named.slice(0, 100).map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-xs",
								children: l.leadGrade
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-medium",
								children: l.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg-muted",
								children: l.section
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-fg-muted",
								children: l.district
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-xs text-fg-subtle",
								children: l.tags.join(", ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono",
								children: fmtKw(l.balanceKw)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: classBg(l.klass) + " px-1.5 py-0.5 rounded-full text-[11px]",
									children: l.klass
								})
							})
						]
					}, l.district + l.section + l.name + i)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-fg-subtle flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "ASSUMPTION" }), " Name tags are regex on DTR labels. A transformer called “HOTEL HIVE INN” may serve the hotel, the street, or both."]
			})
		]
	});
}
//#endregion
export { LocalitiesPage as component };
