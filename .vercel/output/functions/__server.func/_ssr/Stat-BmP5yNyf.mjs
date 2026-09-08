import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-BcONUv7x.mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Stat-BmP5yNyf.js
var import_jsx_runtime = require_jsx_runtime();
function Stat({ label, value, hint, kind, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg border border-line bg-bg-elev p-4", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.14em] text-fg-subtle",
					children: label
				}), kind ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: kind }) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl tabular-nums tracking-tight",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-fg-muted leading-snug",
				children: hint
			}) : null
		]
	});
}
//#endregion
export { Stat as t };
