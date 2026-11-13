
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

/**
 * A real visual exported from the project's own repository (chart, dashboard
 * or screenshot). Never use placeholder or invented imagery here.
 */
export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Case-study section heading this visual is shown after. */
  section?: string;
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
  cover?: ProjectImage;
  gallery?: ProjectImage[];
};

const img = (slug: string, file: string, width: number, height: number) => ({
  src: `/images/projects/${slug}/${file}.webp`,
  width,
  height,
});

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
    cover: {
      ...img("pakistan-food-markets-analysis", "revenue-by-city", 1600, 886),
      alt: "Horizontal bar chart of total revenue by city, from Hyderabad at PKR 1,608,801 (12.0%) down to Peshawar at PKR 1,032,082 (7.7%), with the city average marked.",
      caption: "Revenue by city against the national average.",
    },
    gallery: [
      {
        ...img("pakistan-food-markets-analysis", "kpi-cards", 1400, 560),
        alt: "KPI cards: 1,100 records, PKR 13,423,064 total revenue, PKR 371.8 average price per kg, Hyderabad as top revenue city, Mutton as most expensive item, and 29.9% of items above average price.",
        caption: "Executive KPI cards computed from the full 1,100-record dataset.",
        section: "Data",
      },
      {
        ...img("pakistan-food-markets-analysis", "price-by-category", 1600, 810),
        alt: "Bar chart of average price per kg by category, grouped into premium, mid-range and affordable tiers, from Beverage at PKR 911.6/kg to Vegetable at PKR 94.9/kg.",
        caption: "Average price per kilogram by category, classified into price tiers.",
        section: "Analysis",
      },
      {
        ...img("pakistan-food-markets-analysis", "revenue-concentration", 1600, 752),
        alt: "Pareto chart of revenue by city with a cumulative percentage line and an 80% reference line.",
        caption: "Revenue concentration (Pareto view) across the ten cities.",
        section: "Analysis",
      },
      {
        ...img("pakistan-food-markets-analysis", "price-volatility", 1600, 746),
        alt: "Bar chart of price range (maximum minus minimum, PKR per kg) for each food category.",
        caption: "Price range by category, used as the volatility measure.",
        section: "Insights",
      },
    ],
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
      { label: "Illustrative retained revenue (scenario)", value: "$328K" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/WA_Fn-UseC_-Telco-Customer-Churn",
    },
    cover: {
      ...img("telco-customer-churn-analysis", "power-bi-summary", 1049, 572),
      alt: "Power BI summary report with churn count, churn rate and charges broken down by contract type, internet service and payment method.",
      caption: "Power BI summary report of churn by contract, internet service and payment method.",
    },
    gallery: [
      {
        ...img("telco-customer-churn-analysis", "churn-dashboard", 1289, 352),
        alt: "Telco customer churn dashboard header with filters for contract, internet, payment and gender, and KPI tiles for customers, churn rate, average monthly charge and monthly revenue at risk.",
        caption: "Interactive churn dashboard with contract, internet, payment and gender filters.",
        section: "Process",
      },
      {
        ...img("telco-customer-churn-analysis", "churn-by-contract", 1000, 600),
        alt: "Grouped bar chart of churn percentage by contract type, showing month-to-month contracts with by far the highest churn.",
        caption: "Churn rate by contract type.",
        section: "Analysis",
      },
      {
        ...img("telco-customer-churn-analysis", "churn-by-internet-service", 1000, 600),
        alt: "Grouped bar chart of churn percentage by internet service type, showing fiber optic with the highest churn, followed by DSL and customers without internet.",
        caption: "Churn rate by internet service type.",
        section: "Analysis",
      },
      {
        ...img("telco-customer-churn-analysis", "correlation-matrix", 1366, 648),
        alt: "Correlation heatmap of SeniorCitizen, tenure, MonthlyCharges, TotalCharges and churn, showing a 0.83 correlation between tenure and TotalCharges.",
        caption: "Feature correlation matrix.",
        section: "Insights",
      },
    ],
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
    cover: {
      ...img("titanic-survival-analysis", "survival-overview", 1600, 1064),
      alt: "Six-panel survival overview: survival count, survival rate by gender, by passenger class and by embarkation port, plus age and fare distributions by survival.",
      caption: "Survival overview across gender, class, age, fare and port of embarkation.",
    },
    gallery: [
      {
        ...img("titanic-survival-analysis", "analysis-report", 1054, 602),
        alt: "Text report of survival rate by gender (female 74.20%, male 18.89%) and survival by gender within each passenger class.",
        caption: "Generated analysis report: survival by gender and by class within gender.",
        section: "Analysis",
      },
      {
        ...img("titanic-survival-analysis", "model-comparison", 1600, 952),
        alt: "Bar chart comparing classification model accuracy against an 80% threshold.",
        caption: "Model accuracy comparison against an 80% threshold.",
        section: "Insights",
      },
    ],
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
    cover: {
      ...img("running-local-llms-thinkpad-t480", "open-webui-models", 1103, 634),
      alt: "Open WebUI chat interface with the model selector open, listing locally installed models including llama3.1, mistral, phi4, deepseek-r1 and qwen3.",
      caption: "Open WebUI running against locally installed Ollama models.",
    },
    gallery: [
      {
        ...img("running-local-llms-thinkpad-t480", "docker-containers", 1366, 386),
        alt: "Docker Desktop containers view showing the open-webui container running on port 3000:8080 with low CPU and memory usage.",
        caption: "Open WebUI deployed as a Docker container.",
        section: "Environment",
      },
      {
        ...img("running-local-llms-thinkpad-t480", "local-ai-workflow", 1161, 1354),
        alt: "Infographic of how the local AI assistant works: browser to Open WebUI, Ollama, local models and back, plus seven steps from pulling a model to chatting offline on CPU and RAM.",
        caption: "How the local AI assistant works, from model download to offline use.",
        section: "Process",
      },
    ],
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
    cover: {
      ...img("crm-sales-inventory-dashboard", "inventory-dashboard", 867, 566),
      alt: "Excel inventory management dashboard with KPI tiles (49.8% average profit margin, 141 low-stock items, 5 out-of-stock items) and a category performance table.",
      caption: "Inventory dashboard sheet generated with Python and OpenPyXL (simulated data).",
    },
    gallery: [
      {
        ...img("crm-sales-inventory-dashboard", "stock-alerts", 1229, 526),
        alt: "Stock alert management sheet summarising out-of-stock and low-stock items, with a table of products below their reorder level, highlighted as Low Stock.",
        caption: "Stock alert sheet with conditional formatting for items below reorder level.",
        section: "Process",
      },
      {
        ...img("crm-sales-inventory-dashboard", "best-selling-products", 887, 476),
        alt: "Best-selling products table listing product, category, sales quantity, revenue, profit and profit margin.",
        caption: "Best-selling products by quantity, with revenue, profit and margin.",
        section: "Analysis",
      },
    ],
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

  {
    slug: "sfo-air-traffic-cargo-statistics",
    title: "SFO Air Traffic & Cargo Statistics",
    category: "Data Analytics",
    problem:
      "San Francisco International Airport (SFO) cargo activity spans 26 years, 134+ airlines and 9 geographic regions, but raw operational exports contain Excel serial dates and codeshare overlaps that make carrier, regional and fleet benchmarking unreliable.",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "OpenPyXL",
      "Excel",
      "Data Visualization",
    ],
    summary:
      "Analysed 58,346 SFO air cargo records from July 1999 to December 2025, building a validated dataset, interactive dashboard and 7-sheet Excel workbook covering volume trends, carrier share, regional shifts and aircraft efficiency.",
    insight:
      "United Airlines leads all-time cargo tonnage at SFO alongside major Asia-Pacific carriers Korean Air Lines and EVA Airways; US domestic traffic holds the largest overall share while Asia is the #1 international region, and dedicated freighters move substantially more tonnage than passenger belly cargo.",
    outcome:
      "Delivered a 7-sheet executive Excel workbook (Executive Summary, Cleaned Data, Annual Trend, GEO Region Analysis, Top Airlines, Cargo Breakdown and Data Quality Log) backed by a 100% pass weight-conversion audit across all 58,346 records.",
    metrics: [
      { label: "Cargo records", value: "58,346" },
      { label: "Historical span", value: "1999–2025" },
      { label: "Airlines tracked", value: "134" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/-SFO-Air-Traffic-Cargo-Statistics-Data-Analysis-Project",
    },
    cover: {
      ...img("sfo-air-traffic-cargo-statistics", "sfo-cargo-tracker", 1326, 592),
      alt: "SFO Air Cargo Tracker dashboard showing 13.93M total metric tons, 515.8K average annual tonnage, peak year 2000, -4.5% latest YoY growth, and filters for year range, traffic type, cargo type, aircraft type and region.",
      caption: "SFO Air Cargo Tracker dashboard covering 58,346 operational records (1999–2025).",
    },
    gallery: [
      {
        ...img("sfo-air-traffic-cargo-statistics", "import-export-trends", 1600, 796),
        alt: "Area line chart comparing deplaned imports and enplaned exports at SFO from 1999 to 2025, with a vertical marker at 2020 for COVID-19.",
        caption: "Import (deplaned) vs export (enplaned) cargo volume trends, 1999–2025.",
        section: "Analysis",
      },
      {
        ...img("sfo-air-traffic-cargo-statistics", "geo-region-heatmap", 1600, 990),
        alt: "Heatmap of normalized geographic region market share by decade from the 1990s through the 2020s, led by US and Asia.",
        caption: "Geographic region market share normalized by decade.",
        section: "Analysis",
      },
      {
        ...img("sfo-air-traffic-cargo-statistics", "top10-airlines-share", 1600, 1470),
        alt: "Pie chart of top 10 airlines by all-time cargo market share at SFO, led by United Airlines, Federal Express, Korean Air Lines and EVA Airways.",
        caption: "Top 10 airlines by all-time cargo volume market share at SFO.",
        section: "Insights",
      },
      {
        ...img("sfo-air-traffic-cargo-statistics", "cargo-type-composition", 1600, 796),
        alt: "Chart breaking down SFO cargo type composition across Cargo, Mail and Express.",
        caption: "Cargo type composition across Cargo, Mail and Express.",
        section: "Insights",
      },
    ],
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "Airport operations, airline partners and cargo logistics teams need to know which carriers, regions, cargo types and aircraft configurations drive long-term volume.",
          "Raw SFO operational exports stored dates as Excel serial numbers and mixed operating and published codeshare airlines, preventing accurate time-series and carrier-level reporting without prior cleaning and validation.",
        ],
      },
      {
        heading: "Data",
        body: [
          "58,346 records of San Francisco International Airport (SFO) air cargo activity spanning 26 years (July 1999 – December 2025) across 134 airlines, 9 geographic regions, 3 cargo types (Cargo, Mail, Express) and 3 aircraft types (Freighter, Passenger, Combi).",
          "Quality audit confirmed 0 duplicate rows, 0 missing values across all 15 columns, 0 negative cargo weights and 100% valid YYYYMM activity periods.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Converted Excel serial dates to datetime values, cast Activity Period to string and derived Year, Month and Month_Name columns for annual and seasonal analysis.",
          "Added an Is_Codeshare boolean flag identifying 1,756 codeshare rows (3%) and validated LBS-to-metric-ton conversions across all 58,346 rows within a 1% tolerance.",
          "Packaged outputs into a 7-sheet Excel workbook with automated formatting and charts via Python and OpenPyXL, alongside an interactive HTML dashboard.",
        ],
      },
      {
        heading: "Analysis",
        body: [
          "Annual & directional trends: tracked year-over-year tonnage growth and enplaned (export) vs deplaned (import) flows, capturing the sharp 2020 pandemic drop and 2022–2023 recovery.",
          "Geographic & carrier breakdown: US domestic ranks #1 overall while Asia leads international regions followed by Europe; United Airlines leads all-time tonnage, with Korean Air Lines and EVA Airways leading international carriers.",
          "Cargo & fleet mix: general Cargo dominates total volume, and dedicated Freighter aircraft carry significantly more tonnage than passenger belly cargo.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Delivered a 7-sheet decision-ready workbook (Executive Summary, Cleaned Data, Annual Trend, GEO Region Analysis, Top Airlines, Cargo Breakdown and Data Quality Log) with full auditability.",
          "Limitations: the public operational dataset does not include freight rates, revenue or operating cost figures, so findings measure cargo tonnage and market share rather than financial profitability.",
        ],
      },
    ],
  },

  {
    slug: "analytics-data-quality-pipeline",
    title: "Analytics Data Quality Pipeline",
    category: "Python",
    problem:
      "Raw business CSVs arrive with whitespace, blank strings, invalid dates, inconsistent types and duplicate rows — rewriting bespoke cleaning scripts for every new dataset slows down analysis and introduces silent reporting errors.",
    tools: [
      "Python",
      "Pandas",
      "JSON",
      "Pytest",
      "Git",
    ],
    summary:
      "Built a reusable Python data-preparation toolkit with separate scripts for inspection, profiling, cleaning and validation, driven by dataset-specific JSON configuration files and verified with automated Pytest checks.",
    insight:
      "Separating dataset rules into JSON configs (tested across B2B invoices, clothing sales and hotel bookings) lets the same inspection, profiling, cleaning and validation scripts adapt to new schemas without rewriting core Python logic.",
    outcome:
      "Delivered four modular Python scripts, three dataset configuration templates and a 10-test Pytest cleaning suite. The four activities run as separate scripts today; an integrated single-command runner is documented as a future step.",
    metrics: [
      { label: "Core scripts", value: "4" },
      { label: "JSON configs", value: "3" },
      { label: "Pytest checks", value: "10 passed" },
    ],
    links: {
      github:
        "https://github.com/INNOCENT256-UG/analytics-data-quality-pipeline",
    },
    cover: {
      src: "/images/projects/analytics-data-quality-pipeline/pipeline-architecture.svg",
      width: 1200,
      height: 675,
      alt: "Architecture diagram of the Analytics Data Quality Pipeline showing four separate Python scripts (inspect_data.py, profile_data.py, clean_data.py, validate_data.py), three JSON config files, and the Pytest suite.",
      caption: "Repository architecture diagram: four separate Python scripts configured by JSON rules and covered by Pytest.",
    },
    caseStudy: [
      {
        heading: "Problem",
        body: [
          "Trustworthy dashboards and KPIs depend on clean source data, yet raw CSV exports frequently contain trailing whitespace, blank strings masquerading as values, malformed dates and duplicate rows.",
          "The goal was a repeatable, rule-driven preparation process that avoids rewriting one-off cleaning scripts for each new dataset.",
        ],
      },
      {
        heading: "Data",
        body: [
          "Configured and structured around three distinct business dataset schemas in config/: b2b_invoices.json (invoice, customer, product, revenue, cost and margin), clothing_sales.json (product attributes, pricing, discounts, ratings and stock) and hotel_bookings.json.",
          "Each JSON file defines column expectations, numeric/date casting targets and validation rules external to the Python scripts.",
        ],
      },
      {
        heading: "Process",
        body: [
          "Implemented four focused, standalone Python modules under src/: inspect_data.py (dataset structure), profile_data.py (descriptive profiling and quality flags), clean_data.py (whitespace trimming, blank-to-null conversion, numeric/date parsing and duplicate reporting) and validate_data.py (rule-based checks and reporting).",
          "Wrote automated unit tests in tests/test_clean_data.py using Pytest to verify DataFrame immutability, whitespace trimming, null conversion, type casting, missing-column reporting and cleaning report structure.",
        ],
      },
      {
        heading: "Analysis",
        body: [
          "All 10 automated cleaning tests in tests/test_clean_data.py passed in the development environment, confirming consistent behavior on valid, invalid and missing-column edge cases.",
          "Externalizing schema rules into JSON makes it straightforward to onboard a new CSV domain without modifying the cleaning or validation code.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Delivered a documented, reusable data-quality foundation with inspection, profiling, cleaning, validation and automated testing.",
          "Scope & limitations: the repository implements the four activities as separate Python scripts rather than a unified end-to-end runner, and current Pytest coverage focuses on clean_data.py with validation and profiling tests planned next.",
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
