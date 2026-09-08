//#region node_modules/.nitro/vite/services/ssr/assets/format-885mhSkx.js
function fmtInt(n) {
	return Math.round(n).toLocaleString("en-IN");
}
function fmt1(n) {
	return n.toLocaleString("en-IN", {
		maximumFractionDigits: 1,
		minimumFractionDigits: 0
	});
}
function fmtKw(kw) {
	return `${kw.toLocaleString("en-IN", { maximumFractionDigits: 1 })} kW`;
}
function fmtInr(n) {
	if (Math.abs(n) >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
	if (Math.abs(n) >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
	return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
function classBg(klass) {
	if (klass === "Very High") return "bg-vh/15 text-vh";
	if (klass === "High") return "bg-high/15 text-high";
	if (klass === "Medium") return "bg-med/15 text-med";
	if (klass === "Low") return "bg-low/15 text-low";
	if (klass === "Very Low") return "bg-vl/15 text-vl";
	return "bg-unk/15 text-unk";
}
//#endregion
export { fmtKw as a, fmtInt as i, fmt1 as n, fmtInr as r, classBg as t };
