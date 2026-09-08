import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-BcONUv7x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Kind-BF0D3rxd.js
var import_jsx_runtime = require_jsx_runtime();
var labels = {
	FACT: "Fact",
	DERIVED: "Derived",
	ESTIMATE: "Estimate",
	ASSUMPTION: "Assumption",
	FORECAST: "Forecast",
	RECOMMENDATION: "Call"
};
function Kind({ k, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-1.5 py-px text-[10px] font-medium uppercase tracking-[0.12em] text-fg-subtle border border-line", k === "FACT" && "text-vh border-vh/30", k === "RECOMMENDATION" && "text-accent border-line-strong", k === "ASSUMPTION" && "text-med border-med/30", k === "ESTIMATE" && "text-high border-high/30", className),
		children: labels[k]
	});
}
//#endregion
export { Kind as t };
