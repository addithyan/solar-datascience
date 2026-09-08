export const TOP3 = [
  {
    rank: 1,
    name: "Ernakulam",
    why: "Highest market + purchasing power + commercial AOV. Profit is made here — but only in unsaturated sections.",
    do: "C&I, apartments, villas. Work Aluva North (selectively), Angamaly, Kothamangalam-II, Koothattukulam. Skip Alangad and Amballoor.",
    avoid: "Door-to-door in transformer-saturated Kochi pockets. Tata Power already has 61k statewide installs and density is highest here.",
  },
  {
    rank: 2,
    name: "Thrissur",
    why: "Best conversion machinery in the state (96 conversion index) and a large urban market. Referrals compound.",
    do: "Residential 3–5 kW + churches/gold-commercial. Start in Big Bazar Thrissur, Chalakkudy, Ayyanthole.",
    avoid: "Puthenvelikkara (30% sampled DTRs saturated).",
  },
  {
    rank: 3,
    name: "Kozhikode",
    why: "Best sampled grid headroom in Kerala (192 MW) and the single strongest locality (Central Kozhikode, 39.8 MW, 99.5% High+). Urban, aware, not yet Ernakulam-crowded.",
    do: "Mass 3–5 kW + small commercial. Put a survey team in Central Kozhikode in week 1. Beach, Feroke, Balussery next.",
    avoid: "Treating North Kerala as 'poor' — Kozhikode urban bills are high-slab.",
  },
] as const;

export const LOCALITIES_FIRST = [
  { place: "Central Kozhikode", district: "Kozhikode", why: "39.8 MW remaining, 99.5% High/VH, 0% Very Low, 58 named commercial clues. Highest locality score in the state." },
  { place: "Burnasseri", district: "Kannur", why: "28.4 MW remaining, 87% High+. Strong — but net-meter stock-out (Sep 2026) is an operational gate. Qualify 1-phase 3 kW first." },
  { place: "Chalakkudy", district: "Thrissur", why: "26.5 MW, 330 transformers, industrial estate on the list. Mix of homes and sheds." },
  { place: "Cantonment TVM", district: "Thiruvananthapuram", why: "26.8 MW, 89% High+, institutional + villa roofs, capital-city bills." },
  { place: "Ettumanur", district: "Kottayam", why: "26.4 MW, NRI/rubber-belt purchasing, hotel + church density." },
  { place: "Thiruvalla", district: "Pathanamthitta", why: "26.6 MW remaining in a high-remittance town. Seasonal occupancy is the catch — sell to caretakers/NRIs, not empty houses blindly." },
  { place: "Kanjikode", district: "Palakkad", why: "Industrial white space. 90.9% High+, high irradiance. B2B first, not Facebook ads." },
  { place: "Angamaly / Kothamangalam-II / Koothattukulam", district: "Ernakulam", why: "Peri-urban Ernakulam with far better headroom than Alangad (34% saturated)." },
  { place: "Big Bazar Thrissur", district: "Thrissur", why: "Urban commercial cluster, 87% High+, almost no Very Low DTRs." },
  { place: "Beach Kozhikode + Feroke", district: "Kozhikode", why: "Coastal urban follow-on to Central Kozhikode. Watch salt/wind mounting quality." },
] as const;

export const FOCUS_ANSWERS = [
  { q: "Which 3 districts first?", a: "Ernakulam (profit/C&I), Thrissur (conversion), Kozhikode (headroom + urban efficiency). Kannur is #4 structurally but gated by the Sep 2026 net-meter shortage." },
  { q: "Which 5–10 localities first?", a: "Central Kozhikode, Chalakkudy, Cantonment TVM, Ettumanur, Big Bazar Thrissur, Angamaly, Kothamangalam-II, Koothattukulam, Kanjikode (B2B), Burnasseri (meter-aware)." },
  { q: "Which segments first?", a: "High-bill independent homes (3–5 kW, PM Surya Ghar), then small commercial (shops/showrooms 5–10 kW), then apartments (common load), then hotels/hospitals. Industrial sheds in Palakkad/Chalakkudy as a parallel B2B motion." },
  { q: "Who to avoid initially?", a: "BPL / <100 unit homes (weak ROI after slab collapse). Fully saturated DTRs (Very Low class). Ground-mount farmers without a C&I offtaker. Wayanad/Idukki mass residential. Large >10 kW domestic until storage rules and grid-support charges are priced into the quote." },
  { q: "Which channels?", a: "Primary: Google Search ('solar subsidy Kerala', 'KSEB solar', district + solar) + WhatsApp. Secondary: Facebook/Instagram Malayalam lead ads, electrician & contractor referral. Experimental: apartment-association evenings, church/mosque committees, industrial association talks." },
  { q: "What message?", a: "Lead with bill reduction + PM Surya Ghar ₹78,000 CFA + 3–4 year payback. Do not lead with 'save the planet'. Do not promise subsidy dates. For NRI homes: caretaker-ready, remote monitoring. For C&I: daytime load match, not export tariff." },
  { q: "Which systems?", a: "3 kW and 5 kW on-grid residential (subsidy maxes at 3 kW CFA). Three-phase 5–10 kW for villas/shops. 10–50 kW C&I with net-billing, not domestic net-metering. Add storage only when regulation forces it or backup is the buying reason." },
  { q: "Highest revenue?", a: "Ernakulam C&I + apartments. Highest rupee per closed deal." },
  { q: "Highest profit?", a: "Ernakulam (AOV) and Kozhikode (lower CAC, faster cycle). Statewide profit index: Kannur 72.6, Ernakulam 70.7, Kozhikode 70.4 — Kannur delayed by meters." },
  { q: "Lowest acquisition difficulty?", a: "Thrissur and Kozhikode urban (ease 77–82). Idukki/Wayanad are the hardest (terrain + density)." },
  { q: "Strongest competition?", a: "Ernakulam, then Thrissur and Thiruvananthapuram. Tata Power SolarRoof claims 61,000+ Kerala rooftops (Aug 2026). Compete on local service speed and unsaturated feeder geography, not on brand." },
  { q: "Best underserved opportunities?", a: "Kozhikode remaining headroom, Palakkad industrial (Kanjikode), Kottayam NRI belt, Malappuram 3 kW remittance volume. High technical scores in Idukki/Wayanad are a trap for mass marketing." },
  { q: "Where to spend most of the budget?", a: "45% Kozhikode+Thrissur residential digital; 30% Ernakulam C&I/apartment outbound; 15% TVM+Kottayam; 10% tests (Palakkad B2B, Malappuram 3 kW, Kannur meter-ready list)." },
  { q: "Where to test smaller?", a: "Palakkad industrial, Malappuram volume 3 kW, Kannur Burnasseri (if meters move), Pathanamthitta Thiruvalla NRI." },
  { q: "Next 7 days?", a: "Stand up Kozhikode Central and Thrissur Big Bazar/Chalakkudy campaigns. Pull KSEB section lists for those feeders. Call the 58 named clues in Central Kozhikode. Freeze Wayanad/Idukki ads." },
  { q: "Next 30 days?", a: "10 site surveys/week in Kozhikode Central, 8 in Thrissur, 6 Ernakulam peri-urban. Close first 8–12 residential bookings. One apartment association pitch in TVM or Kochi." },
  { q: "What to stop?", a: "State-wide generic ads. Selling into Very Low DTRs. Promising 1:1 net metering above the current domestic rules. Competing on lowest ₹/W against Tata in Kochi core." },
  { q: "What could change the recommendation?", a: "Net-meter supply restored in Kannur (promotes Kannur to top 3). KSERC actually implementing harsher prosumer charges (hurts export-heavy oversized systems). PM Surya Ghar CFA pause before Mar 2027. DTR upgrade programmes opening saturated city feeders." },
] as const;
