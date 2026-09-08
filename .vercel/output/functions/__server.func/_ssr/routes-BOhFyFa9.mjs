import { i as meta, n as districts } from "./data-CGaxaat-.mjs";
import { i as fmtInt, n as fmt1 } from "./format-885mhSkx.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
import { t as Stat } from "./Stat-BmP5yNyf.mjs";
import { t as KeralaTiles } from "./KeralaTiles-DE5336LP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BOhFyFa9.js
var import_jsx_runtime = require_jsx_runtime();
var TOP3 = [
	{
		rank: 1,
		name: "Ernakulam",
		why: "Highest market + purchasing power + commercial AOV. Profit is made here — but only in unsaturated sections.",
		do: "C&I, apartments, villas. Work Aluva North (selectively), Angamaly, Kothamangalam-II, Koothattukulam. Skip Alangad and Amballoor.",
		avoid: "Door-to-door in transformer-saturated Kochi pockets. Tata Power already has 61k statewide installs and density is highest here."
	},
	{
		rank: 2,
		name: "Thrissur",
		why: "Best conversion machinery in the state (96 conversion index) and a large urban market. Referrals compound.",
		do: "Residential 3–5 kW + churches/gold-commercial. Start in Big Bazar Thrissur, Chalakkudy, Ayyanthole.",
		avoid: "Puthenvelikkara (30% sampled DTRs saturated)."
	},
	{
		rank: 3,
		name: "Kozhikode",
		why: "Best sampled grid headroom in Kerala (192 MW) and the single strongest locality (Central Kozhikode, 39.8 MW, 99.5% High+). Urban, aware, not yet Ernakulam-crowded.",
		do: "Mass 3–5 kW + small commercial. Put a survey team in Central Kozhikode in week 1. Beach, Feroke, Balussery next.",
		avoid: "Treating North Kerala as 'poor' — Kozhikode urban bills are high-slab."
	}
];
var LOCALITIES_FIRST = [
	{
		place: "Central Kozhikode",
		district: "Kozhikode",
		why: "39.8 MW remaining, 99.5% High/VH, 0% Very Low, 58 named commercial clues. Highest locality score in the state."
	},
	{
		place: "Burnasseri",
		district: "Kannur",
		why: "28.4 MW remaining, 87% High+. Strong — but net-meter stock-out (Sep 2026) is an operational gate. Qualify 1-phase 3 kW first."
	},
	{
		place: "Chalakkudy",
		district: "Thrissur",
		why: "26.5 MW, 330 transformers, industrial estate on the list. Mix of homes and sheds."
	},
	{
		place: "Cantonment TVM",
		district: "Thiruvananthapuram",
		why: "26.8 MW, 89% High+, institutional + villa roofs, capital-city bills."
	},
	{
		place: "Ettumanur",
		district: "Kottayam",
		why: "26.4 MW, NRI/rubber-belt purchasing, hotel + church density."
	},
	{
		place: "Thiruvalla",
		district: "Pathanamthitta",
		why: "26.6 MW remaining in a high-remittance town. Seasonal occupancy is the catch — sell to caretakers/NRIs, not empty houses blindly."
	},
	{
		place: "Kanjikode",
		district: "Palakkad",
		why: "Industrial white space. 90.9% High+, high irradiance. B2B first, not Facebook ads."
	},
	{
		place: "Angamaly / Kothamangalam-II / Koothattukulam",
		district: "Ernakulam",
		why: "Peri-urban Ernakulam with far better headroom than Alangad (34% saturated)."
	},
	{
		place: "Big Bazar Thrissur",
		district: "Thrissur",
		why: "Urban commercial cluster, 87% High+, almost no Very Low DTRs."
	},
	{
		place: "Beach Kozhikode + Feroke",
		district: "Kozhikode",
		why: "Coastal urban follow-on to Central Kozhikode. Watch salt/wind mounting quality."
	}
];
var FOCUS_ANSWERS = [
	{
		q: "Which 3 districts first?",
		a: "Ernakulam (profit/C&I), Thrissur (conversion), Kozhikode (headroom + urban efficiency). Kannur is #4 structurally but gated by the Sep 2026 net-meter shortage."
	},
	{
		q: "Which 5–10 localities first?",
		a: "Central Kozhikode, Chalakkudy, Cantonment TVM, Ettumanur, Big Bazar Thrissur, Angamaly, Kothamangalam-II, Koothattukulam, Kanjikode (B2B), Burnasseri (meter-aware)."
	},
	{
		q: "Which segments first?",
		a: "High-bill independent homes (3–5 kW, PM Surya Ghar), then small commercial (shops/showrooms 5–10 kW), then apartments (common load), then hotels/hospitals. Industrial sheds in Palakkad/Chalakkudy as a parallel B2B motion."
	},
	{
		q: "Who to avoid initially?",
		a: "BPL / <100 unit homes (weak ROI after slab collapse). Fully saturated DTRs (Very Low class). Ground-mount farmers without a C&I offtaker. Wayanad/Idukki mass residential. Large >10 kW domestic until storage rules and grid-support charges are priced into the quote."
	},
	{
		q: "Which channels?",
		a: "Primary: Google Search ('solar subsidy Kerala', 'KSEB solar', district + solar) + WhatsApp. Secondary: Facebook/Instagram Malayalam lead ads, electrician & contractor referral. Experimental: apartment-association evenings, church/mosque committees, industrial association talks."
	},
	{
		q: "What message?",
		a: "Lead with bill reduction + PM Surya Ghar ₹78,000 CFA + 3–4 year payback. Do not lead with 'save the planet'. Do not promise subsidy dates. For NRI homes: caretaker-ready, remote monitoring. For C&I: daytime load match, not export tariff."
	},
	{
		q: "Which systems?",
		a: "3 kW and 5 kW on-grid residential (subsidy maxes at 3 kW CFA). Three-phase 5–10 kW for villas/shops. 10–50 kW C&I with net-billing, not domestic net-metering. Add storage only when regulation forces it or backup is the buying reason."
	},
	{
		q: "Highest revenue?",
		a: "Ernakulam C&I + apartments. Highest rupee per closed deal."
	},
	{
		q: "Highest profit?",
		a: "Ernakulam (AOV) and Kozhikode (lower CAC, faster cycle). Statewide profit index: Kannur 72.6, Ernakulam 70.7, Kozhikode 70.4 — Kannur delayed by meters."
	},
	{
		q: "Lowest acquisition difficulty?",
		a: "Thrissur and Kozhikode urban (ease 77–82). Idukki/Wayanad are the hardest (terrain + density)."
	},
	{
		q: "Strongest competition?",
		a: "Ernakulam, then Thrissur and Thiruvananthapuram. Tata Power SolarRoof claims 61,000+ Kerala rooftops (Aug 2026). Compete on local service speed and unsaturated feeder geography, not on brand."
	},
	{
		q: "Best underserved opportunities?",
		a: "Kozhikode remaining headroom, Palakkad industrial (Kanjikode), Kottayam NRI belt, Malappuram 3 kW remittance volume. High technical scores in Idukki/Wayanad are a trap for mass marketing."
	},
	{
		q: "Where to spend most of the budget?",
		a: "45% Kozhikode+Thrissur residential digital; 30% Ernakulam C&I/apartment outbound; 15% TVM+Kottayam; 10% tests (Palakkad B2B, Malappuram 3 kW, Kannur meter-ready list)."
	},
	{
		q: "Where to test smaller?",
		a: "Palakkad industrial, Malappuram volume 3 kW, Kannur Burnasseri (if meters move), Pathanamthitta Thiruvalla NRI."
	},
	{
		q: "Next 7 days?",
		a: "Stand up Kozhikode Central and Thrissur Big Bazar/Chalakkudy campaigns. Pull KSEB section lists for those feeders. Call the 58 named clues in Central Kozhikode. Freeze Wayanad/Idukki ads."
	},
	{
		q: "Next 30 days?",
		a: "10 site surveys/week in Kozhikode Central, 8 in Thrissur, 6 Ernakulam peri-urban. Close first 8–12 residential bookings. One apartment association pitch in TVM or Kochi."
	},
	{
		q: "What to stop?",
		a: "State-wide generic ads. Selling into Very Low DTRs. Promising 1:1 net metering above the current domestic rules. Competing on lowest ₹/W against Tata in Kochi core."
	},
	{
		q: "What could change the recommendation?",
		a: "Net-meter supply restored in Kannur (promotes Kannur to top 3). KSERC actually implementing harsher prosumer charges (hurts export-heavy oversized systems). PM Surya Ghar CFA pause before Mar 2027. DTR upgrade programmes opening saturated city feeders."
	}
];
function Command() {
	const sw = meta.statewide;
	const top = districts.slice(0, 5);
	const worst = [...districts].sort((a, b) => a.rankOverall - b.rankOverall).slice(-3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-fg-subtle mb-3",
				children: "Executive command"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl md:text-5xl leading-[1.12] tracking-tight max-w-3xl",
				children: "Sell where the grid still has room and the bills still hurt."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-fg-muted text-[15px] leading-relaxed",
				children: "28,000 KSEB distribution transformers across all 14 districts were scored against income, urbanisation, PM Surya Ghar adoption and competition. Technical headroom without purchasing power is a trap. Idukki and Wayanad look perfect on feasibility class — and rank last on profit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "FACT",
						label: "Sample remaining headroom",
						value: `${fmt1(sw.balanceMw)} MW`,
						hint: "Sum of DTR balance in the 2,000-per-district extract — a lower bound, not the state total."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "FACT",
						label: "High + Very High sites",
						value: fmtInt((sw.classCounts["Very High"] ?? 0) + (sw.classCounts.High ?? 0)),
						hint: `${fmt1((sw.classCounts["Very High"] + sw.classCounts.High) / sw.sampleTransformers * 100)}% of sampled DTRs can still take RE.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "FACT",
						label: "PM Surya Ghar installs",
						value: fmtInt(sw.pmsgInstallsKnown),
						hint: "KSEB RTI via ETV Bharat, 21 Aug 2026. Statewide, not just this DTR sample."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "DERIVED",
						label: "Median remaining %",
						value: `${fmt1(sw.medianPct)}%`,
						hint: "Most sampled transformers are still open. Saturation is clustered in rich, urban, already-solarised pockets."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "First three theatres"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "RECOMMENDATION" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: TOP3.map((t) => {
						const d = districts.find((x) => x.name === t.name);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/districts/$id",
							params: { id: d?.id ?? t.name.toLowerCase() },
							className: "rounded-lg border border-line bg-bg-elev p-5 hover:border-line-strong transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-fg-subtle",
									children: ["0", t.rank]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl mt-1",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-fg-muted leading-relaxed",
									children: t.why
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-fg leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg-subtle",
										children: "Do: "
									}), t.do]
								})
							]
						}, t.name);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight mb-4",
					children: "Priority geography"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeralaTiles, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight mb-4",
						children: "Scoreboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-1",
						children: top.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/districts/$id",
							params: { id: d.id },
							className: "flex items-center gap-3 rounded-md px-2 py-2 hover:bg-bg-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-fg-subtle w-5",
									children: d.rankOverall
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-sm",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm tabular-nums",
									children: d.opportunityScore.toFixed(1)
								})
							]
						}) }, d.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-fg-subtle",
						children: "Deprioritise this quarter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-1 mt-1",
						children: worst.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 px-2 py-1.5 text-fg-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs w-5",
									children: d.rankOverall
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-sm",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm tabular-nums",
									children: d.opportunityScore.toFixed(1)
								})
							]
						}, d.id))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight mb-2",
						children: "Localities to open first"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg-muted mb-4 max-w-2xl",
						children: "Ranked by remaining kW, High/VH share, named commercial clues and parent-district opportunity — not by sunshine alone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-lg border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 font-medium",
										children: "Locality"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 font-medium",
										children: "District"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 font-medium",
										children: "Why"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: LOCALITIES_FIRST.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line align-top",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3 font-medium whitespace-nowrap",
										children: row.place
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3 text-fg-muted whitespace-nowrap",
										children: row.district
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3 text-fg-muted",
										children: row.why
									})
								]
							}, row.place)) })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 rounded-lg border border-line bg-bg-elev p-5 md:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Kerala solar growth priority map"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "RECOMMENDATION" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						["Top district", "Ernakulam (profit) with Kozhikode as the efficiency spearhead"],
						["Top locality", "Central Kozhikode — 39.8 MW, 99.5% High+"],
						["Top customer segment", "High-bill independent homes, 3–5 kW, PM Surya Ghar"],
						["Top marketing channel", "Google Search + WhatsApp, then electrician referrals"],
						["Top sales message", "Cut the high-slab bill. ₹78,000 CFA. 3–4 year payback."],
						["Top system type", "3 kW / 5 kW on-grid rooftop; C&I 10–50 kW on the side"],
						["Expected opportunity", `${fmt1(sw.balanceMw)} MW sampled headroom; conversion, not kW, is the bottleneck`],
						["Expected profitability", "Highest in Ernakulam C&I and Kozhikode residential volume"],
						["Key risk", "Net-meter shortage, DTR saturation in rich urban pockets, KSERC prosumer-charge drift"],
						["Next action", "This week: Central Kozhikode + Chalakkudy/Big Bazar lists. Kill statewide generic ads."]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.14em] text-fg-subtle",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm leading-relaxed",
							children: v
						})]
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight mb-4",
					children: "Direct answers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: FOCUS_ANSWERS.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "rounded-lg border border-line bg-bg-elev px-4 py-3",
						open: i < 3,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "cursor-pointer text-sm font-medium",
							children: [
								i + 1,
								". ",
								row.q
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fg-muted leading-relaxed",
							children: row.a
						})]
					}, row.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight mb-3",
						children: "Next 7 days"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-2 text-sm",
						children: [
							"Export the Central Kozhikode, Chalakkudy, Big Bazar Thrissur and Cantonment TVM section lists from this app (Localities).",
							"Launch two Google Search campaigns: Kozhikode solar subsidy, Thrissur solar subsidy. Geo-radius those cities only.",
							"Call every hotel / hospital / school named clue in Central Kozhikode with High or Very High remaining kW.",
							"Ask KSEB / channel partners about three-phase net-meter stock before quoting Kannur Burnasseri.",
							"Kill any statewide or Wayanad/Idukki residential ads already running.",
							"Price a standard 3 kW and 5 kW package after CFA; put payback on the quote, not in a brochure.",
							"Book one apartment-association meeting in Kochi or TVM for week 3."
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-md border border-line px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-fg-subtle mt-0.5",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg-muted leading-relaxed",
								children: t
							})]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/plan",
							className: "inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg",
							children: ["Open 90-day plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/method",
							className: "inline-flex h-11 items-center gap-2 rounded-md border border-line px-4 text-sm",
							children: "Data, sources, assumptions"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-fg-subtle max-w-2xl leading-relaxed",
						children: "Confidence on district ranking: High for relative order of the top 5 (stable across weight schemes). Confidence on exact conversion rates: Low — no historical CRM was supplied; scores are a prioritisation model, not a trained purchase-probability model. Sample is capped at 2,000 DTRs per district."
					})
				]
			})
		]
	});
}
//#endregion
export { Command as component };
