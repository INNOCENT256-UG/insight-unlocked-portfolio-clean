export const profile = {
  name: "Innocent Watsala",
  role: "Data Analyst",
  tagline: "Turning complex data into clear, actionable insights.",
  disciplines: ["Data Analytics", "Business Intelligence", "AI", "Intelligent Automation"],
  intro:
    "I work with data analysis, business intelligence, Python, SQL, Excel, Power BI, AI and automation to turn raw, messy data into decisions people can act on — clean datasets, dependable reporting and dashboards that answer real business questions.",
  links: {
    github: { label: "GitHub", href: "https://github.com/INNOCENT256-UG" },
    email: { label: "Email", href: "mailto:watsalainnocent081@gmail.com", address: "watsalainnocent081@gmail.com" },
  },
} as const;

export const whatIDo = [
  "Data Analysis",
  "Business Intelligence",
  "Data Visualization",
  "Python Analytics",
  "SQL",
  "AI & Automation",
];

export const aboutStory = [
  "My focus is data analytics: taking questions that matter to a business and answering them with evidence rather than opinion. Most of my time goes into cleaning data, understanding how it was produced, and shaping it into something a decision-maker can read in seconds.",
  "Working in operational environments taught me where data actually comes from — the manual steps, the workarounds, the fields people forget to fill in. That perspective makes me careful about data quality and practical about what a report needs to do.",
  "I keep learning across analytics and AI: statistical thinking, SQL depth, dashboard design, and using AI and automation to remove repetitive work from the reporting cycle. The goal is a professional data analytics career built on clear thinking and clear communication.",
];

export const resumeVersions = [
  {
    id: "data-analytics",
    title: "Data Analytics Resume",
    primary: true,
    summary: "Data Analytics | Business Intelligence | AI & Automation",
    audience: ["Data Analyst", "Junior Data Analyst", "Business Intelligence", "Reporting", "Analytics roles"],
    // Placeholder file — replace with the real PDF in /public/resume/.
    file: "/resume/innocent-data-analytics-resume.pdf",
  },
  {
    id: "operations",
    title: "Operations / Logistics Resume",
    primary: false,
    summary: "Operations | Logistics | Ground & Warehouse Environments",
    audience: ["Logistics", "Airport Operations", "Warehouse", " Operations"],
    file: "/resume/innocent-operations-resume.pdf",
  },
] as const;
