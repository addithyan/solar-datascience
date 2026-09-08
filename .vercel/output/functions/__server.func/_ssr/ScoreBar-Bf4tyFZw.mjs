import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-BcONUv7x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ScoreBar-Bf4tyFZw.js
var import_jsx_runtime = require_jsx_runtime();
function ScoreBar({ value, label, tone = "accent" }) {
	const w = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-baseline justify-between gap-3 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg-muted truncate",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono tabular-nums text-fg",
				children: value.toFixed(0)
			})]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 w-full rounded-full bg-bg-subtle overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full", tone === "accent" && "bg-accent", tone === "vh" && "bg-vh", tone === "med" && "bg-med", tone === "vl" && "bg-vl"),
				style: { width: `${w}%` }
			})
		})]
	});
}
//#endregion
export { ScoreBar as t };
