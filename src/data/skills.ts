import {
  BarChart3,
  Bot,
  Database,
  LineChart,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "analytics",
    title: "Data Analytics",
    icon: LineChart,
    note: "Getting from raw records to a defensible answer.",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistical Analysis",
    ],
  },
  {
    id: "sql",
    title: "SQL & Databases",
    icon: Database,
    note: "Querying and reshaping data at the source.",
    items: ["SQL", "MySQL", "PostgreSQL", "Data Extraction", "Data Transformation"],
  },
  {
    id: "bi",
    title: "Business Intelligence",
    icon: BarChart3,
    note: "Reporting people actually use to decide.",
    items: ["Power BI", "Excel", "Dashboards", "KPI Analysis", "Business Reporting"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: Bot,
    note: "Removing repetitive work from the reporting cycle.",
    items: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "Local AI",
      "AI-assisted workflows",
      "Intelligent Automation",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    note: "The everyday working environment.",
    items: ["Git", "GitHub", "VS Code", "Docker", "Jupyter"],
  },
];




