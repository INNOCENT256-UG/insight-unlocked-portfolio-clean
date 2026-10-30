
export type ProjectCategory =
  | "Data Analytics"
  | "SQL"
  | "Python"
  | "Power BI"
  | "AI";

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  problem: string;
  tools: string[];
  summary: string;
  insight: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  links: { github?: string; demo?: string };
  caseStudy: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "pakistan-food-markets-analysis",
    title: "Pakistan Food Markets & Revenue by City",
    category: "Data Analytics",
    problem:
      "Food price data across Pakistan's major cities sits in fragmented survey records, so procurement, logistics and expansion teams cannot benchmark fair pricing, spot anomalies or size market potential.",
    tools: [
      "Excel",
      "Pivot Tables",
      "Advanced Charting",
      "Conditional Formatting",
      "Data Modelling",
    ],
    summary:
      "Consolidated 1,100 price records covering 35 food items across 10 Pakistani cities into a structured Excel model and executive dashboard covering revenue share, category pricing, volatility and concentration.",
    insight:
      "Revenue spreads 27% between the strongest and weakest city (Hyderabad PKR 1.61M at 12.0% share versus Peshawar PKR 1.03M at 7.7%), while category prices differ 10x between Beverages (PKR 912/kg) and Vegetables (PKR 95/kg). Pulses show the widest price range (PKR 154), marking the clearest supply-shock risk.",
    outcome:
      "A single executive dashboard covering PKR 13.42M of tracked revenue with per-city benchmarks, category price tiers, volatility flags and a Pareto view showing the top three cities hold only 33% of revenue — pointing expansion at mid-tier markets rather than the metros.",
    metrics: [
      { label: "Price records", value: "1,100" },
      { label: "Tracked revenue", value: "PKR 13.42M" },
      { label: "Cities analysed", value: "10" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/ANALYZING-PAKISTAN-FOOD-MARKETS-AND-IT-S-REVELATE-CITIES",
    },
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "Food price volatility hits household budgets, retail pricing and supply chain planning, but the underlying market data was scattered across survey exports with no shared benchmark.",
          "The objective was one analytical framework that answers where commodities are over- or under-priced against the national average, which cities carry the most revenue potential, and which categories carry supply risk.",
        ],
      },
      {
        heading: "Data",
        body: [
          "1,100 market price records covering 35 food items in 9 categories across 10 major cities: Hyderabad, Karachi, Islamabad, Quetta, Faisalabad, Rawalpindi, Lahore, Sialkot, Multan and Peshawar.",
          "Each record carries item, category, city, price per kilogram and volume. Cleaning covered inconsistent item naming, mixed units and outlier prices that would distort category averages.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Built a structured relational layout in Excel so city, item and category tables join cleanly, then drove every summary from pivot tables rather than hand-typed figures.",
          "Derived price tiers (Low, Medium, High, Premium), a per-item gap against the national average of PKR 372/kg, and a price-range measure per category as the volatility proxy.",
          "Laid the dashboard out as an executive briefing: KPI cards first, then city analysis, category analysis and concentration, with conditional formatting flagging highest and lowest performers.",
        ],
      },
      {
        heading: "Analysis",
        body: [
          "Revenue by city: Hyderabad leads at PKR 1,608,801 (12.0%), Karachi PKR 1,568,588 (11.7%) and Islamabad PKR 1,460,893 (10.9%); Peshawar trails at PKR 1,032,082 (7.7%).",
          "Average price by category: Beverages PKR 912/kg, Meat PKR 848/kg and Oil PKR 722/kg sit at the premium end against Vegetables at PKR 95/kg — a 10x differential implying separate supply chains and margin profiles.",
          "Volatility: Pulses record the widest price range at PKR 154, with premium categories generally more unstable than affordable staples.",
          "Concentration: a Pareto view shows the top three cities account for 33% of revenue, and 29.9% of items price above the national average.",
        ],
      },
      {
        heading: "Insights",
        body: [
          "The 27% revenue spread between Hyderabad and Peshawar is a pricing and market-structure question, not a demand question — Peshawar needs to be diagnosed as either a market gap or a profitability gap before any expansion spend.",
          "Premium categories hold pricing power while commodity categories show margin compression, so a single procurement strategy across categories underserves both.",
          "Pulses volatility argues for forward contracting or alternative sourcing; vegetable stability offers reliable supply at thinner margins.",
          "At 33% concentration the portfolio is balanced, which means the real growth headroom is in Tier-2 cities such as Faisalabad, Rawalpindi and Lahore rather than in the leading metros.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Delivered an Excel dashboard with KPI cards, city and category breakdowns, price volatility, gap analysis, price classification and monthly KPI tracking, backed by the raw data workbook and a PDF export.",
          "Stakeholders get direct answers per role: pricing benchmarks for procurement, volatility metrics for logistics hedging, market sizing for expansion, and inflation indicators for policy monitoring.",
        ],
      },
    ],
  },

  {
    slug: "telco-customer-churn-analysis",
    title: "Telco Customer Churn Analysis",
    category: "Python",
    problem:
      "The IBM Telco Customer Churn dataset provides an opportunity to investigate why customers leave a telecommunications service. The analysis examines which contracts, payment methods and service combinations are associated with higher churn.",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Jupyter",
      "Excel",
    ],
    summary:
      "Analysed 7,043 customer records across 21 features to quantify churn, isolate the highest-risk segments, and estimate the revenue exposure associated with customer cancellations.",
    insight:
      "Churn concentrates in a small set of identifiable segments: month-to-month contracts (42% churn), electronic-check payers (45.3%) and fiber-optic subscribers (41.9%). Customers with four or more add-on services churn at 15%, roughly 2.5x lower than those with two or fewer.",
    outcome:
      "A documented analysis estimating $136,721 in monthly revenue exposure ($1.64M annually). Under an illustrative 20% churn-reduction scenario, the estimated annual revenue retained is approximately $328,130. These are scenario-based estimates, not realised savings or measured business results.",
    metrics: [
      { label: "Customer records", value: "7,043" },
      { label: "Churn rate", value: "26.5%" },
      { label: "Projected annual savings", value: "$328K" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/WA_Fn-UseC_-Telco-Customer-Churn",
    },
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "The dataset makes it possible to examine customer churn using evidence rather than assumptions. The analytical challenge is to identify which customer characteristics and service patterns are associated with cancellations.",
          "The objective was to quantify churn, identify the segments driving it, and estimate the potential financial impact of targeted retention scenarios.",
        ],
      },
      {
        heading: "Data",
        body: [
          "The IBM Telco Customer Churn dataset: 7,043 customer records with 21 features covering demographics, account information, subscribed services, contract type, payment method, monthly and total charges, and churn status.",
          "Cleaning covered TotalCharges stored as text with blank values for new customers, inconsistent categorical labels such as \"No internet service\" versus \"No\", and an imbalanced target class at 26.5% churn.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Profiled every column for nulls, type mismatches and duplicates in Pandas before any aggregation, converting TotalCharges to numeric and normalising service flags to consistent binary values.",
          "Derived a service-adoption count per customer and grouped tenure into bands so new and long-standing customers could be compared directly.",
          "Built the churn breakdown by contract, payment method, internet service and service count, then attached monthly charges so every segment carried a revenue figure alongside its rate.",
        ],
      },
      {
        heading: "Analysis",
        body: [
          "Churn by contract: month-to-month customers churn at 42% against 11% for two-year contracts, with 2,876 month-to-month customers sitting in the high-risk group.",
          "Churn by payment method: electronic-check users churn at 45.3% against 15.3% for automatic payments, covering 2,361 customers.",
          "Churn by service type: fiber-optic subscribers churn at 41.9% against 19% for DSL — the premium tier loses customers faster than the basic one.",
          "Correlation and distribution checks confirmed TotalCharges tracks tenure closely (0.83) and that tenure is bimodal, separating a new-customer cohort from a loyal one.",
        ],
      },
      {
        heading: "Insights",
        body: [
          "Four segments carry churn rates above 40%, and they overlap: a month-to-month, electronic-check, fiber-optic customer with few add-ons is the clearest at-risk profile.",
          "Service bundling is protective. Customers with four or more add-on services churn at 15%, while those with two or fewer sit at 35–40%.",
          "Price alone does not explain the pattern — higher monthly charges correlate with churn, but only where the contract and payment method leave the customer free to leave at short notice.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The analysis estimates revenue exposure at $136,721 per month and $1,640,652 per year. An illustrative 20% churn-reduction scenario corresponds to approximately $328,130 in annual revenue retained.",
          "This scenario is an estimate based on the dataset and stated assumptions. It does not represent realised savings, a measured retention outcome or a verified return on investment.",
          "Delivered as a reproducible Jupyter analysis with an Excel report and a visual dashboard summarising churn distribution, contract and service breakdowns, and the feature correlation matrix.",
        ],
      },
    ],
  },

  {
    slug: "titanic-survival-analysis",
    title: "Titanic Survival Analysis & Predictive Modelling",
    category: "AI",
    problem:
      "The Titanic passenger records are messy and incomplete, and survival is usually discussed anecdotally rather than measured — the task was to quantify who survived, why, and whether that pattern can be predicted.",
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "Docker",
    ],
    summary:
      "End-to-end analysis of 891 passenger records: cleaning heavily missing fields, engineering features from names and cabins, quantifying survival across demographics, then building and comparing four classification models.",
    insight:
      "Survival was driven by protocol and class, not chance. Females survived at 74.2% against 18.9% for males (3.9x), first class at 62.9% against 24.2% in third (2.6x), and children under 12 at roughly 54% against 23% for passengers over 60.",
    outcome:
      "A reproducible, containerised analysis with four benchmarked models — XGBoost best at about 83% accuracy and an 80% F1-score — supported by feature importance rankings and four published visualisation sets.",
    metrics: [
      { label: "Passenger records", value: "891" },
      { label: "Overall survival", value: "38.4%" },
      { label: "Best model accuracy", value: "~83%" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/TITANIC_DATA_ANALYSIS",
    },
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "The dataset is a realistic messy-data exercise: a fifth of ages missing, three quarters of cabin values absent, and inconsistent categorical fields.",
          "The objective was to answer concrete questions — how many survived, whether gender and class mattered, and how age shifted the odds — then test whether those patterns generalise into a predictive model.",
        ],
      },
      {
        heading: "Data",
        body: [
          "891 passenger records covering survival status, class, sex, age, fare, family relations, cabin, ticket and port of embarkation. 342 passengers survived (38.4%) and 549 did not (61.6%).",
          "Missing data: Age 177 values (19.9%), Cabin 687 (77.1%), Embarked 2 (0.2%), Fare complete.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Imputed Age with the median within each passenger class and sex group rather than a single global median, so the fill respects the structure already in the data.",
          "Converted the sparse Cabin field into a binary HasCabin feature instead of discarding it, and filled the two missing Embarked values with the mode.",
          "Engineered features from raw text and relations: social title extracted from names, family size from sibling/spouse and parent/child counts, and banded age groups.",
          "Packaged the pipeline as reproducible, Docker-ready code so the full analysis reruns from raw CSV to charts and model metrics.",
        ],
      },
      {
        heading: "Analysis",
        body: [
          "Gender: 74.2% of women survived against 18.9% of men — a 3.9x difference consistent with the \"women and children first\" protocol.",
          "Class: 62.9% survival in first class, 47.3% in second and 24.2% in third, a 2.6x gap between the top and bottom tier.",
          "Age: children 0–12 survived at roughly 54%, adults 18–35 at about 38% and passengers over 60 at about 23%.",
          "Modelling: four classifiers compared on the same features — XGBoost (~83% accuracy, ~82% precision, ~78% recall, ~80% F1), Random Forest (~82%), Decision Tree at max_depth 5 (~79%) and Logistic Regression as an interpretable baseline (~78%).",
        ],
      },
      {
        heading: "Insights",
        body: [
          "Class and gender interact rather than act independently — third-class women and first-class men sit far from what either factor predicts on its own, which is why the combined breakdown matters more than the marginal rates.",
          "Engineered features earn their place: social title and family size rank high in importance, meaning information was recoverable from fields that look unusable at first glance.",
          "The ensemble models gain only a few points over logistic regression, so the baseline stays worth reporting for its interpretable coefficients.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Delivered four visualisation sets — survival overview, detailed class/gender/family/cabin analysis with a correlation heatmap, age and title analysis, and model comparison with confusion matrix and feature importances.",
          "The result is a production-shaped portfolio project: documented cleaning decisions, reproducible code, benchmarked models and a clear statement of which factors drive the outcome.",
        ],
      },
    ],
  },

  {
    slug: "running-local-llms-thinkpad-t480",
    title: "Running Local LLMs on a ThinkPad T480",
    category: "AI",
    problem:
      "Learning SQL, Python, data analytics and software development with AI assistance should not require a dedicated GPU or sending every prompt to a cloud service.",
    tools: [
      "Ollama",
      "Docker",
      "Open WebUI",
      "WSL 2",
      "Windows 11",
      "VS Code",
    ],
    summary:
      "Documented a private, CPU-only local AI environment on a Lenovo ThinkPad T480, combining Ollama for local models, Docker and WSL 2 for deployment, and Open WebUI for a familiar chat interface.",
    insight:
      "A 16 GB, Intel Core i7 ThinkPad can support useful local AI workflows without a discrete GPU when the model choice matches the task: Phi-4 is the practical option for SQL, Python, Excel and learning, while larger reasoning models trade speed for depth.",
    outcome:
      "Delivered a reproducible setup guide, command reference, screenshots and troubleshooting notes for an offline AI workspace that supports local experimentation and AI-assisted data-learning workflows.",
    metrics: [
      { label: "Inference setup", value: "CPU-only" },
      { label: "System memory", value: "16 GB" },
      { label: "Models assessed", value: "3" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/Running-Local-LLMs-on-a-ThinkPad-T480",
    },
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "Cloud AI tools are powerful, but they require an internet connection and move prompts outside the local machine. The aim was to build a private development environment on existing hardware without buying a dedicated GPU.",
          "The environment needed to be practical for learning and day-to-day support across SQL, Python, Excel, data analytics and software development.",
        ],
      },
      {
        heading: "Environment",
        body: [
          "The setup runs on a Lenovo ThinkPad T480 with an 8th-generation Intel Core i7, 16 GB RAM, integrated Intel UHD graphics and Windows 11.",
          "Ollama provides local model management and inference; Docker, running through WSL 2, deploys Open WebUI as a browser-based interface for the locally hosted models.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Documented the setup from Python and Ollama installation through model downloads, Docker and WSL 2 configuration, Open WebUI deployment and VS Code connection.",
          "Created dedicated command references for Docker, Ollama and PowerShell, then added a performance-test and troubleshooting guide so the environment can be reproduced and maintained.",
        ],
      },
      {
        heading: "Evaluation",
        body: [
          "Compared Phi-4, Llama 3.1 and DeepSeek-R1 for CPU-only use. Phi-4 was the strongest fit for SQL, Python, Excel and learning tasks; Llama 3.1 suited general assistance; DeepSeek-R1 favoured complex reasoning and debugging at a slower pace.",
          "The evaluation shows the central constraint of local inference on integrated graphics: model capability, response time and memory use must be balanced against the actual task.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Delivered an offline local-AI workspace with a ChatGPT-like interface, repeatable deployment instructions, screenshots, a video demo and maintenance guidance.",
          "The project demonstrates that useful, privacy-conscious AI-assisted learning workflows are achievable on modest CPU-only hardware, while documenting clear next steps for GPU benchmarking and analytics integration.",
        ],
      },
    ],
  },

  {
    slug: "crm-sales-inventory-dashboard",
    title: "CRM Sales & Inventory Analytics Dashboard",
    category: "Data Analytics",
    problem:
      "Customer relationships, sales pipeline, revenue performance and stock levels were tracked in separate places, so nobody could see which SKUs were about to run out, which reps were behind target, or where working capital was tied up.",
    tools: [
      "Python",
      "Pandas",
      "OpenPyXL",
      "Excel",
      "Pivot Tables",
    ],
    summary:
      "Built a Python-generated Excel BI workbook using simulated data for 250 customers, 1,000 sales transactions, 50 products and 150 pipeline leads, with KPI dashboards, charts, pivot summaries and automated insight text for operational and executive review.",
    insight:
      "Within the simulated dataset, inventory risk and sales risk sit in the same dataset: the SKUs driving the most revenue are also the ones most often near their reorder point, while lost opportunities cluster in specific pipeline stages and reps rather than spreading evenly.",
    outcome:
      "A single reproducible workbook using simulated business data, with a CRM dashboard, inventory dashboard, sales performance dashboard and an automated insights sheet that regenerates end-to-end from raw CSVs with no manual formatting.",
    metrics: [
      { label: "Sales transactions", value: "1,000" },
      { label: "Customers tracked", value: "250" },
      { label: "SKUs monitored", value: "50" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/INVENTORY-MANAGEMENT",
    },
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "The project explores how a business could track customer segmentation, sales performance, inventory levels, pipeline conversion and lost opportunities when these activities are recorded separately.",
          "The goal was one workbook that an operations lead and an executive could both use: aggregated KPIs on top, drillable tables underneath, and alerts that surface without anyone hunting for them.",
        ],
      },
      {
        heading: "Data",
        body: [
          "Four simulated datasets: 250 customers with industry, location, segment and status; 1,000 sales transactions with revenue, profit, discount and sales rep; 50 products with stock levels, reorder points and categories; and 150 pipeline leads with stage and win probability.",
          "The simulated datasets are joined on customer, product and rep keys so revenue, margin and stock movement can be read against the same entities. They are demonstration data, not records from a real business.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Generated and modelled the simulated data in Pandas, then wrote the formatted workbook with OpenPyXL so every sheet, chart and conditional format is produced by code rather than by hand.",
          "Built four surfaces: a CRM dashboard (total customers, revenue, profit, active leads, conversion rate, average order value), an inventory dashboard, a sales performance dashboard, and an automated insights sheet.",
          "Added threshold logic — red for below minimum stock, yellow for approaching reorder level, and flags for slow-moving inventory past a configurable age.",
        ],
      },
      {
        heading: "Analysis",
        body: [
          "Sales: monthly revenue trend, rep-level ranking by revenue, profit and order count, targets versus actuals with variance, and profit margin by representative.",
          "Customers: revenue by industry, segmentation splits and a top-10 best customers list.",
          "Inventory: stock value by SKU and category, low-stock and out-of-stock counts, top-selling products, stock movement over time and a warehouse-level value view showing where capital is concentrated.",
          "Pipeline: stage-by-stage conversion and a lost-opportunity analysis valuing what left the funnel and where.",
        ],
      },
      {
        heading: "Insights",
        body: [
          "Reorder decisions need velocity, not just stock counts — pairing units-per-day against lead time gives days-of-stock-remaining, which reorders the priority list compared with looking at quantity alone.",
          "Value concentration by category and warehouse shows working capital sitting in a minority of SKUs, making consolidation and transfer decisions visible.",
          "Lost opportunities are worth quantifying in currency, not counts: the value view changes which pipeline stage deserves attention first.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Delivered CRM_Sales_Inventory_Dashboard.xlsx plus the simulated CSV inputs and chart exports, regenerated by a single Python run so the reporting cycle needs no manual assembly.",
          "Each view targets a role: stock health for executives, reorder and procurement for operations, demand and movement for analysts, warehouse distribution for logistics, and inventory turnover for finance.",
        ],
      },
    ],
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
