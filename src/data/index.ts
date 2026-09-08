import districtsJson from "./districts.json";
import sectionsJson from "./sections.json";
import statewideJson from "./statewide.json";
import type { District, Section } from "./types";

export const districts = districtsJson as District[];
export const sections = sectionsJson as Section[];
export const meta = statewideJson as {
  statewide: {
    sampleTransformers: number;
    districts: number;
    sampleSections: number;
    balanceKw: number;
    balanceMw: number;
    capKw: number;
    issuedKw: number;
    connectedKw: number;
    classCounts: Record<string, number>;
    meanPct: number;
    medianPct: number;
    pmsgInstallsKnown: number;
    pmsgAppsKnown: number;
    households: number;
    capNote: string;
  };
  quality: Record<string, unknown>;
  dictionary: Array<{
    name: string;
    desc: string;
    type: string;
    unit: string;
    source: string;
    observed: string;
    modelling: boolean;
    limits: string;
  }>;
  weights: Record<string, number>;
  sensitivity: Record<string, { scores: Record<string, number>; order: string[] }>;
  correlations: Array<{ x: string; y: string; r: number; n: number; note: string }>;
  whitespace: Array<{ district: string; type: string; read?: string; note: string }>;
  attMedian: number;
  easeMedian: number;
};

export const byId = Object.fromEntries(districts.map((d) => [d.id, d])) as Record<
  string,
  District
>;
export const byName = Object.fromEntries(districts.map((d) => [d.name, d])) as Record<
  string,
  District
>;

export function sectionsIn(districtName: string) {
  return sections.filter((s) => s.district === districtName);
}
