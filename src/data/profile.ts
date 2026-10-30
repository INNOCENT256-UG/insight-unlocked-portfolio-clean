
export const profile = {
  name: "Innocent Watsala",
  role: "Data Analyst",
  tagline: "Turning complex data into clear, actionable insights.",
  disciplines: [
    "Data Analytics",
    "Business Intelligence",
    "AI",
    "Intelligent Automation",
  ],
  intro:
    "I use data analysis, business intelligence, Python, SQL, Excel, and Power BI to turn raw data into clear insights. My work focuses on data preparation, analysis, reporting, and visualisation, with an interest in applying AI and automation to improve analytical workflows.",
  links: {
    github: {
      label: "GitHub",
      href: "https://github.com/INNOCENT256-UG",
    },
    email: {
      label: "Email",
      href: "mailto:watsalainnocent081@gmail.com",
      address: "watsalainnocent081@gmail.com",
    },
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
  "My focus is data analytics: understanding business questions and using evidence to develop useful answers. I work with data preparation, exploration, and visualisation to make information easier to interpret and use.",
  "My experience in operational environments has shaped my understanding of how data is collected and used in day-to-day work. It has also made me attentive to data quality, practical reporting needs, and the importance of presenting information clearly.",
  "I continue to develop my skills in SQL, Python, Excel, Power BI, analytical thinking, and dashboard design. I am also exploring how AI and automation can support more efficient reporting workflows.",
];

export const resumeVersions = [
  {
    id: "data-analytics",
    title: "Data Analytics Resume",
    primary: true,
    summary: "Data Analytics | Business Intelligence | AI & Automation",
    audience: [
      "Data Analyst",
      "Junior Data Analyst",
      "Business Intelligence",
      "Reporting",
      "Analytics roles",
    ],
    file: "/resume/innocent-data-analytics-resume.pdf",
  },
  {
    id: "operations",
    title: "Operations / Logistics Resume",
    primary: false,
    summary: "Operations | Logistics | Ground & Warehouse Environments",
    audience: [
      "Logistics",
      "Airport Operations",
      "Warehouse",
      "Operations",
    ],
    file: "/resume/innocent-operations-resume.pdf",
  },
] as const;
