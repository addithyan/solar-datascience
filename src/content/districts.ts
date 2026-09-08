export const NARRATIVE: Record<
  string,
  { lede: string; why: string; risk: string }
> = {
  ernakulam: {
    lede: "Kerala’s commercial capital still has 165 MW of sampled headroom, but 11% of those DTRs are already Very Low. The money is in peri-urban C&I and apartments, not in fighting Tata for the last roof on a full transformer.",
    why: "Rank 1 overall because market size, per-capita GDDP (₹2.61 lakh, #1) and C&I density dominate. Conversion is proven (48,072 PM Surya Ghar installs). Technical index is poor (17.5) precisely because the market already works.",
    risk: "Highest competition. Alangad is 34% saturated in-sample; Aluva West 25%. Thodupuzha sections in this file are electrical-admin bleed from Idukki — treat as a hill-town cluster, not Kochi.",
  },
  thrissur: {
    lede: "Best conversion index in the state. People here already buy solar; your job is to be the installer they trust next, on feeders that are not full.",
    why: "Urban, culturally networked, 34,144 PMSG installs from 48,335 applications (70.6%). Big Bazar and Chalakkudy still have room. Referrals and church/gold-merchant networks compress CAC.",
    risk: "Puthenvelikkara is 30% Very Low. Don’t spray the whole district. Chalakkudy industrial estate is a B2B side-door.",
  },
  kozhikode: {
    lede: "The efficiency spearhead. 192 MW remaining in the sample — the most in Kerala — and Central Kozhikode is the single best locality in the dataset.",
    why: "Urban (67%), 19k existing installs so the category is understood, competition index 52 vs Ernakulam’s 92. Mean remaining  high, Very Low only 1.7%.",
    risk: "Coastal corrosion and monsoon. Cyberpark-style C&I exists but the volume play is 3–5 kW homes. Don’t under-staff after-sales; North Kerala will punish distant Kochi crews.",
  },
  kannur: {
    lede: "Structurally a top-four profit district (highest profit index). Operationally gated in September 2026 by a three-phase net-meter shortage of more than two months.",
    why: "High remittance, 65% urban, 19,982 installs, Burnasseri alone has 28 MW remaining. Conversion 71.2%.",
    risk: "Do not promise commissioning dates. Prefill a 1-phase 3 kW waiting list. Re-rank Kannur into the top three the week meters move.",
  },
  thiruvananthapuram: {
    lede: "Capital-city bills, apartments, secretariat-adjacent institutions. Cantonment and Beach sections still show 87–89% High+.",
    why: "30,056 PMSG installs, large household base, strong Google-search intent. Remaining 176 MW in sample is second only to Kozhikode.",
    risk: "Political/media scrutiny on quality. Two Unknown-class DTRs in the extract. Don’t sell oversized export systems into tightening KSERC rules.",
  },
  kottayam: {
    lede: "Rubber and NRI money with church-school density. Ettumanur and Changanachery are the openers; Peerumade is highland/estate — different motion.",
    why: "Per capita #4, remittance high, only 3.4% Very Low. Purchasing index 67. Market size is the limiter (smaller HH base).",
    risk: "Empty NRI houses: the bill is low until occupancy. Sell via WhatsApp to the Gulf, install via a local caretaker, monitor remotely.",
  },
  malappuram: {
    lede: "Largest population, lowest official per-capita GDDP, highest remittance score. This is a 3 kW subsidy volume market, not an English ROI-deck market.",
    why: "22,527 installs already — the category is not unknown. 1,164 Very High DTRs. Official income understates Gulf cash.",
    risk: "Do not equate low GDDP with no ability to pay. Do equate it with different messaging, community trust, and smaller ticket sizes.",
  },
  kollam: {
    lede: "Rich (per capita #3) and already solarised. Lowest remaining MW in the 14-district sample. Treat as a remainder-pocket and referral market.",
    why: "25,654 PMSG installs. Technical index 3.6 — the worst. 8.6% Very Low. High willingness, low remaining feeder room.",
    risk: "Feasibility rejections will poison your reviews. Filter every lead against DTR class before the site visit.",
  },
  palakkad: {
    lede: "Industrial white space with the state’s best practical irradiance after Idukki. Kanjikode is the B2B beach-head, not Facebook.",
    why: "1,400 Very High DTRs, PMSG penetration only 2.8%. Gap climate, sheds, and daytime factory loads.",
    risk: "Household purchasing power is weak (index 27). A residential blitz will under-convert. Go industrial first.",
  },
  alappuzha: {
    lede: "Second-richest per capita, water-logged, and 7.8% Very Low. Tourism roofs are the honest segment; mass residential fights floods and saturation.",
    why: "High bills in urban Alappuzha, 24,914 installs. Hospitality named clues (Beach Resort, ice plants) still show Very High remaining.",
    risk: "Flood / laterite / thatch-to-concrete mix. Raised structures and corrosion-spec mounting are not optional. Seasonal tourism cashflow.",
  },
  kasaragod: {
    lede: "Smaller northern market with laterite roofs and 5 Unknown-class DTRs. Test budget only.",
    why: "1,457 Very High DTRs look tempting; market index 14.7 says otherwise. Conversion is actually high (71%) — those who apply, install.",
    risk: "Unknown rows clustered here. Laterite/tile roofs need a specialist pitch. Don’t fund a branch on this sample.",
  },
  pathanamthitta: {
    lede: "NRI belt, ageing population, Thiruvalla as the one town-scale opening. Not a volume district.",
    why: "Remittance 85. Fastest GDDP growth 2024–25, still a small base. 10,198 installs.",
    risk: "Empty houses, long drives, low density. High-touch NRI WhatsApp only.",
  },
  idukki: {
    lede: "Technical paradise (87 technical index, 1,775 Very High) and a commercial desert for mass rooftop. Estates, resorts, homestays only.",
    why: "3,303 PMSG installs from 5,158 applications. Terrain friction 78. Urban share 4.7%.",
    risk: "High feasibility here is the absence of demand, not a queue. CAC will destroy residential margins.",
  },
  wayanad: {
    lede: "Last on every commercial index. 1,802 Very High DTRs because almost nobody has solar. 1,675 PMSG installs in the whole district.",
    why: "Population 8.2 lakh, 3.9% urban, lowest GDDP. Hospitality pockets exist; they do not justify a campaign.",
    risk: "Post-landslide reconstruction optics, tribal land, terrain. Direct resort outreach only, if at all.",
  },
};
