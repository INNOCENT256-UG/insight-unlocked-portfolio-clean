/**
 * RESUME CONTENT — edit this file to update the /resume page.
 *
 * Keep this file limited to verified professional information.
 */

export const resumeHeader = {
  name: "Innocent Watsala",
  role: "Data Analyst",
  disciplines: "Business Intelligence • Data Analytics • AI",
  statement: "Turning complex data into clear, actionable insights.",
};

export const professionalSummary = [
  "Data Analyst focused on business intelligence, data cleaning and analysis, and reporting that answers real business questions. I work in Python, SQL, Excel and Power BI to turn messy, fragmented records into dependable datasets, dashboards and written findings.",
  "My analytical work covers exploratory analysis, KPI definition, data-quality auditing and visualisation, supported by AI-assisted workflows and intelligent automation to remove repetitive steps from the reporting cycle. I communicate results in plain business language, so decisions rest on evidence rather than opinion.",
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period?: string;
  context: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Loader",
    company: "Transguard Group / dnata",
    location: "Dubai, UAE",
    context:
      "Ground and warehouse operations role. Listed honestly as operational work — not an analytics position — with the data-handling and accuracy skills it developed.",
    points: [
      "Operational data handling through RF scanning, recording movements accurately at the point they happen.",
      "Working within SAP WMS for inventory transactions, location accuracy and stock traceability.",
      "Inventory and data accuracy checks, including validation of scanned records against physical stock.",
      "Auditing and discrepancy follow-up, identifying where records and reality diverge.",
      "Supporting operational reporting with accurate, timely source data.",
      "Process discipline, safety and compliance in a high-tempo airport environment.",
    ],
  },
];

export const transferableNote =
  "Operational experience → daily exposure to real transactional data → data accuracy and auditing discipline → analytics, SQL and business intelligence → AI and automation → a professional Data Analytics career.";

export type CredentialItem = {
  title: string;
  institution: string;
  period: string;
  note?: string;
};

export const education: CredentialItem[] = [];

export const certifications: CredentialItem[] = [];

export const coreCompetencies = [
  "Data Analysis",
  "Business Intelligence",
  "Data Visualization",
  "Data Cleaning",
  "SQL Analytics",
  "Business Reporting",
  "KPI Development",
  "Problem Solving",
  "AI-Assisted Analysis",
  "Intelligent Automation",
];

