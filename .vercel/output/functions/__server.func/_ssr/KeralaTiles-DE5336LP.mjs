import { n as districts } from "./data-CGaxaat-.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-BcONUv7x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/KeralaTiles-DE5336LP.js
var import_jsx_runtime = require_jsx_runtime();
var LAYOUT = [
	{
		id: "kasaragod",
		col: "3 / 5",
		row: "1"
	},
	{
		id: "kannur",
		col: "2 / 4",
		row: "2"
	},
	{
		id: "wayanad",
		col: "4 / 6",
		row: "2"
	},
	{
		id: "kozhikode",
		col: "2 / 4",
		row: "3"
	},
	{
		id: "malappuram",
		col: "2 / 4",
		row: "4"
	},
	{
		id: "palakkad",
		col: "4 / 6",
		row: "4"
	},
	{
		id: "thrissur",
		col: "2 / 4",
		row: "5"
	},
	{
		id: "ernakulam",
		col: "2 / 4",
		row: "6"
	},
	{
		id: "idukki",
		col: "4 / 6",
		row: "6"
	},
	{
		id: "alappuzha",
		col: "1 / 3",
		row: "7"
	},
	{
		id: "kottayam",
		col: "3 / 5",
		row: "7"
	},
	{
		id: "pathanamthitta",
		col: "3 / 5",
		row: "8"
	},
	{
		id: "kollam",
		col: "2 / 4",
		row: "9"
	},
	{
		id: "thiruvananthapuram",
		col: "2 / 4",
		row: "10"
	}
];
function fill(score) {
	if (score >= 65) return "bg-vh/25 border-vh/50 text-fg";
	if (score >= 55) return "bg-high/20 border-high/40 text-fg";
	if (score >= 45) return "bg-med/15 border-med/35 text-fg";
	return "bg-bg-subtle border-line text-fg-muted";
}
function KeralaTiles({ activeId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-1.5 min-w-[280px] mx-auto",
			style: {
				gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
				gridTemplateRows: "repeat(10, minmax(44px, auto))"
			},
			children: LAYOUT.map((cell) => {
				const d = districts.find((x) => x.id === cell.id);
				if (!d) return null;
				const active = activeId === d.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/districts/$id",
					params: { id: d.id },
					className: cn("rounded-md border px-2 py-1.5 min-h-11 flex flex-col justify-center", fill(d.opportunityScore), active && "ring-1 ring-accent"),
					style: {
						gridColumn: cell.col,
						gridRow: cell.row
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] leading-tight font-medium truncate",
						children: d.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[11px] tabular-nums text-fg-muted",
						children: [
							d.opportunityScore.toFixed(0),
							" · #",
							d.rankOverall
						]
					})]
				}, d.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-[11px] text-fg-subtle",
			children: "Schematic geography — not a cadastral map. Fill = overall opportunity score. No lat/long in the KSEB files; this is administrative placement."
		})]
	});
}
//#endregion
export { KeralaTiles as t };
