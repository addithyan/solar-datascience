export type FeasClass =
  | "Very High"
  | "High"
  | "Medium"
  | "Low"
  | "Very Low"
  | "Unknown";

export type District = {
  id: string;
  name: string;
  region: string;
  terrain: string;
  sampleTransformers: number;
  sampleSections: number;
  balanceKw: number;
  balanceMw: number;
  capKw: number;
  issuedKw: number;
  connectedKw: number;
  existingSolarKw: number;
  meanPct: number;
  medianPct: number;
  minPct: number;
  maxPct: number;
  meanBalanceKw: number;
  medianBalanceKw: number;
  meanCapKw: number;
  classCounts: Record<FeasClass, number>;
  classShare: Record<FeasClass, number>;
  vhShare: number;
  highPlusShare: number;
  saturatedShare: number;
  tagCounts: Record<string, number>;
  namedLeadClues: number;
  households: number;
  population: number;
  urbanPop: number;
  ruralPop: number;
  urbanShare: number;
  pcGddp: number;
  gddpCurrentCr: number;
  pmsgApps: number;
  pmsgInstalls: number;
  pmsgConversion: number;
  pmsgPenetrationHh: number;
  psh: number;
  remitScore: number;
  floodRisk: number;
  friction: number;
  competition: number;
  feasibleSites: number;
  veryHighSites: number;
  purchasingIndex: number;
  technicalIndex: number;
  irradianceIndex: number;
  marketIndex: number;
  conversionIndex: number;
  roiIndex: number;
  competitionIndex: number;
  marketingDifficulty: number;
  marketingEase: number;
  revenueIndex: number;
  profitIndex: number;
  opportunityScore: number;
  quadrant: "Prioritise" | "Invest" | "Selective" | "Deprioritise";
  priorityBand: string;
  rankOverall: number;
  rankTechnical: number;
  rankMarket: number;
  rankPurchasing: number;
  rankConversion: number;
  rankRevenue: number;
  rankProfit: number;
  rankEase: number;
  rankRoi: number;
  recommendedSegment: string;
  recommendedChannel: string;
  recommendedAction: string;
};

export type NamedHit = {
  name: string;
  balance: number;
  pct: number;
  klass: string;
  tags: string[];
};

export type Section = {
  id: string;
  district: string;
  districtId: string;
  section: string;
  sectionCode: string | null;
  transformers: number;
  balanceKw: number;
  meanPct: number;
  medianPct: number;
  vh: number;
  high: number;
  medium: number;
  low: number;
  vl: number;
  unknown: number;
  highPlusShare: number;
  saturatedShare: number;
  namedClues: number;
  tagCounts: Record<string, number>;
  topNamed: NamedHit[];
  opportunityScore: number;
  priorityBand: string;
  rank: number;
};

export type Lead = {
  district: string;
  districtId: string;
  section: string;
  name: string;
  balanceKw: number;
  pct: number;
  klass: string;
  capKw: number;
  connectedKw: number;
  issuedKw: number;
  tags: string[];
  leadGrade: string;
};
