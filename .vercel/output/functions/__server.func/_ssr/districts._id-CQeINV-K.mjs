import { o as sectionsIn, t as byId } from "./data-CGaxaat-.mjs";
import { a as fmtKw, i as fmtInt, n as fmt1, t as classBg } from "./format-885mhSkx.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-BcONUv7x.mjs";
import { t as ScoreBar } from "./ScoreBar-Bf4tyFZw.mjs";
import { t as Kind } from "./Kind-BF0D3rxd.mjs";
import { t as Stat } from "./Stat-BmP5yNyf.mjs";
import { t as ClientChart } from "./ClientChart-DXEaOcV8.mjs";
import { c as Bar, i as XAxis, l as ResponsiveContainer, n as BarChart, r as YAxis, s as CartesianGrid, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/districts._id-CQeINV-K.js
var import_jsx_runtime = require_jsx_runtime();
var NARRATIVE = {
	ernakulam: {
		lede: "Kerala’s commercial capital still has 165 MW of sampled headroom, but 11% of those DTRs are already Very Low. The money is in peri-urban C&I and apartments, not in fighting Tata for the last roof on a full transformer.",
		why: "Rank 1 overall because market size, per-capita GDDP (₹2.61 lakh, #1) and C&I density dominate. Conversion is proven (48,072 PM Surya Ghar installs). Technical index is poor (17.5) precisely because the market already works.",
		risk: "Highest competition. Alangad is 34% saturated in-sample; Aluva West 25%. Thodupuzha sections in this file are electrical-admin bleed from Idukki — treat as a hill-town cluster, not Kochi."
	},
	thrissur: {
		lede: "Best conversion index in the state. People here already buy solar; your job is to be the installer they trust next, on feeders that are not full.",
		why: "Urban, culturally networked, 34,144 PMSG installs from 48,335 applications (70.6%). Big Bazar and Chalakkudy still have room. Referrals and church/gold-merchant networks compress CAC.",
		risk: "Puthenvelikkara is 30% Very Low. Don’t spray the whole district. Chalakkudy industrial estate is a B2B side-door."
	},
	kozhikode: {
		lede: "The efficiency spearhead. 192 MW remaining in the sample — the most in Kerala — and Central Kozhikode is the single best locality in the dataset.",
		why: "Urban (67%), 19k existing installs so the category is understood, competition index 52 vs Ernakulam’s 92. Mean remaining  high, Very Low only 1.7%.",
		risk: "Coastal corrosion and monsoon. Cyberpark-style C&I exists but the volume play is 3–5 kW homes. Don’t under-staff after-sales; North Kerala will punish distant Kochi crews."
	},
	kannur: {
		lede: "Structurally a top-four profit district (highest profit index). Operationally gated in September 2026 by a three-phase net-meter shortage of more than two months.",
		why: "High remittance, 65% urban, 19,982 installs, Burnasseri alone has 28 MW remaining. Conversion 71.2%.",
		risk: "Do not promise commissioning dates. Prefill a 1-phase 3 kW waiting list. Re-rank Kannur into the top three the week meters move."
	},
	thiruvananthapuram: {
		lede: "Capital-city bills, apartments, secretariat-adjacent institutions. Cantonment and Beach sections still show 87–89% High+.",
		why: "30,056 PMSG installs, large household base, strong Google-search intent. Remaining 176 MW in sample is second only to Kozhikode.",
		risk: "Political/media scrutiny on quality. Two Unknown-class DTRs in the extract. Don’t sell oversized export systems into tightening KSERC rules."
	},
	kottayam: {
		lede: "Rubber and NRI money with church-school density. Ettumanur and Changanachery are the openers; Peerumade is highland/estate — different motion.",
		why: "Per capita #4, remittance high, only 3.4% Very Low. Purchasing index 67. Market size is the limiter (smaller HH base).",
		risk: "Empty NRI houses: the bill is low until occupancy. Sell via WhatsApp to the Gulf, install via a local caretaker, monitor remotely."
	},
	malappuram: {
		lede: "Largest population, lowest official per-capita GDDP, highest remittance score. This is a 3 kW subsidy volume market, not an English ROI-deck market.",
		why: "22,527 installs already — the category is not unknown. 1,164 Very High DTRs. Official income understates Gulf cash.",
		risk: "Do not equate low GDDP with no ability to pay. Do equate it with different messaging, community trust, and smaller ticket sizes."
	},
	kollam: {
		lede: "Rich (per capita #3) and already solarised. Lowest remaining MW in the 14-district sample. Treat as a remainder-pocket and referral market.",
		why: "25,654 PMSG installs. Technical index 3.6 — the worst. 8.6% Very Low. High willingness, low remaining feeder room.",
		risk: "Feasibility rejections will poison your reviews. Filter every lead against DTR class before the site visit."
	},
	palakkad: {
		lede: "Industrial white space with the state’s best practical irradiance after Idukki. Kanjikode is the B2B beach-head, not Facebook.",
		why: "1,400 Very High DTRs, PMSG penetration only 2.8%. Gap climate, sheds, and daytime factory loads.",
		risk: "Household purchasing power is weak (index 27). A residential blitz will under-convert. Go industrial first."
	},
	alappuzha: {
		lede: "Second-richest per capita, water-logged, and 7.8% Very Low. Tourism roofs are the honest segment; mass residential fights floods and saturation.",
		why: "High bills in urban Alappuzha, 24,914 installs. Hospitality named clues (Beach Resort, ice plants) still show Very High remaining.",
		risk: "Flood / laterite / thatch-to-concrete mix. Raised structures and corrosion-spec mounting are not optional. Seasonal tourism cashflow."
	},
	kasaragod: {
		lede: "Smaller northern market with laterite roofs and 5 Unknown-class DTRs. Test budget only.",
		why: "1,457 Very High DTRs look tempting; market index 14.7 says otherwise. Conversion is actually high (71%) — those who apply, install.",
		risk: "Unknown rows clustered here. Laterite/tile roofs need a specialist pitch. Don’t fund a branch on this sample."
	},
	pathanamthitta: {
		lede: "NRI belt, ageing population, Thiruvalla as the one town-scale opening. Not a volume district.",
		why: "Remittance 85. Fastest GDDP growth 2024–25, still a small base. 10,198 installs.",
		risk: "Empty houses, long drives, low density. High-touch NRI WhatsApp only."
	},
	idukki: {
		lede: "Technical paradise (87 technical index, 1,775 Very High) and a commercial desert for mass rooftop. Estates, resorts, homestays only.",
		why: "3,303 PMSG installs from 5,158 applications. Terrain friction 78. Urban share 4.7%.",
		risk: "High feasibility here is the absence of demand, not a queue. CAC will destroy residential margins."
	},
	wayanad: {
		lede: "Last on every commercial index. 1,802 Very High DTRs because almost nobody has solar. 1,675 PMSG installs in the whole district.",
		why: "Population 8.2 lakh, 3.9% urban, lowest GDDP. Hospitality pockets exist; they do not justify a campaign.",
		risk: "Post-landslide reconstruction optics, tribal land, terrain. Direct resort outreach only, if at all."
	}
};
function DistrictPage() {
	const { id } = Route.useParams();
	const d = byId[id];
	if (!d) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unknown district." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/districts",
			className: "text-sm underline",
			children: "Back"
		})]
	});
	const secs = sectionsIn(d.name);
	const copy = NARRATIVE[d.id];
	const classData = [
		{
			name: "Very High",
			n: d.classCounts["Very High"]
		},
		{
			name: "High",
			n: d.classCounts.High
		},
		{
			name: "Medium",
			n: d.classCounts.Medium
		},
		{
			name: "Low",
			n: d.classCounts.Low
		},
		{
			name: "Very Low",
			n: d.classCounts["Very Low"]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 md:px-8 md:py-10 max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/districts",
				className: "text-xs uppercase tracking-[0.16em] text-fg-subtle",
				children: "All districts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-end gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-5xl tracking-tight",
					children: d.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-fg-muted",
					children: [
						"Overall #",
						d.rankOverall,
						" · ",
						d.quadrant,
						" · ",
						d.region,
						" Kerala"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-sm text-fg-muted leading-relaxed",
				children: copy?.lede ?? d.recommendedAction
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "DERIVED",
						label: "Opportunity",
						value: d.opportunityScore.toFixed(1),
						hint: `Profit #${d.rankProfit} · Tech #${d.rankTechnical}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "FACT",
						label: "Sample remaining",
						value: `${fmt1(d.balanceMw)} MW`,
						hint: `${d.sampleSections} electrical sections in the 2,000-DTR extract`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "FACT",
						label: "PM Surya Ghar",
						value: fmtInt(d.pmsgInstalls),
						hint: `${d.pmsgConversion}% app→install · ${d.pmsgPenetrationHh}% of households`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						kind: "FACT",
						label: "Per capita GDDP",
						value: `₹${fmtInt(d.pcGddp)}`,
						hint: `${d.urbanShare}% urban · ${fmtInt(d.households)} households`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-bg-elev p-5 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl",
							children: "Indices"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Technical",
							value: d.technicalIndex
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Market size",
							value: d.marketIndex
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Purchasing capacity",
							value: d.purchasingIndex
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Conversion",
							value: d.conversionIndex
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Revenue",
							value: d.revenueIndex
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Profit",
							value: d.profitIndex
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Marketing ease",
							value: d.marketingEase
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreBar, {
							label: "Solar ROI / resource",
							value: d.roiIndex
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-bg-elev p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl mb-3",
							children: "Feasibility mix"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientChart, {
							height: 220,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: classData,
									layout: "vertical",
									margin: { left: 16 },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "#2a2e2a",
											horizontal: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											type: "number",
											tick: {
												fill: "#a8ada6",
												fontSize: 11
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											type: "category",
											dataKey: "name",
											tick: {
												fill: "#a8ada6",
												fontSize: 11
											},
											width: 80
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											background: "#121412",
											border: "1px solid #2a2e2a"
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "n",
											fill: "#d7dbd4",
											radius: 2
										})
									]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-fg-subtle mt-2",
							children: [
								"Saturated share ",
								fmt1(d.saturatedShare),
								"% · mean remaining ",
								fmt1(d.meanPct),
								"% · median ",
								fmt1(d.medianPct),
								"%"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.14em] text-fg-subtle",
							children: "Do"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: d.recommendedAction
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.14em] text-fg-subtle",
							children: "Segment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: d.recommendedSegment
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.14em] text-fg-subtle",
							children: "Channel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: d.recommendedChannel
						})]
					})
				]
			}),
			copy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl mb-2",
					children: "Why this rank"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted leading-relaxed",
					children: copy.why
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl mb-2",
					children: "Watch-outs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-muted leading-relaxed",
					children: copy.risk
				})] })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl mb-3",
						children: "Electrical sections in sample"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-fg-subtle mb-3 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind, { k: "FACT" }),
							" ",
							secs.length,
							" sections · not a panchayat list. KSEB admin units."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-lg border border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm min-w-[720px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-left text-[11px] uppercase tracking-[0.12em] text-fg-subtle bg-bg-elev",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Section"
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
										children: "VL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Score"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: secs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: s.section
										}), s.sectionCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 font-mono text-[11px] text-fg-subtle",
											children: s.sectionCode
										}) : null]
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: s.saturatedShare > 15 ? classBg("Very Low") + " px-1.5 py-0.5 rounded-full text-xs" : "font-mono",
											children: [s.saturatedShare, "%"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 font-mono",
										children: s.opportunityScore.toFixed(1)
									})
								]
							}, s.id)) })]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { DistrictPage as component };
