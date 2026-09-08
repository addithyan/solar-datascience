export function fmtInt(n: number) {
  return Math.round(n).toLocaleString("en-IN");
}
export function fmt1(n: number) {
  return n.toLocaleString("en-IN", { maximumFractionDigits: 1, minimumFractionDigits: 0 });
}
export function fmtMw(kw: number) {
  return `${(kw / 1000).toLocaleString("en-IN", { maximumFractionDigits: 1 })} MW`;
}
export function fmtKw(kw: number) {
  return `${kw.toLocaleString("en-IN", { maximumFractionDigits: 1 })} kW`;
}
export function fmtInr(n: number) {
  if (Math.abs(n) >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (Math.abs(n) >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
export function classTone(klass: string) {
  if (klass === "Very High") return "text-vh";
  if (klass === "High") return "text-high";
  if (klass === "Medium") return "text-med";
  if (klass === "Low") return "text-low";
  if (klass === "Very Low") return "text-vl";
  return "text-unk";
}
export function classBg(klass: string) {
  if (klass === "Very High") return "bg-vh/15 text-vh";
  if (klass === "High") return "bg-high/15 text-high";
  if (klass === "Medium") return "bg-med/15 text-med";
  if (klass === "Low") return "bg-low/15 text-low";
  if (klass === "Very Low") return "bg-vl/15 text-vl";
  return "bg-unk/15 text-unk";
}
export function bandTone(band: string) {
  if (band === "Exceptional" || band === "Very High") return "text-vh";
  if (band === "High") return "text-high";
  if (band === "Medium") return "text-med";
  if (band === "Low") return "text-low";
  return "text-fg-subtle";
}
