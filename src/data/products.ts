export interface Product {
  name: string;
  /** small tag shown after the name, e.g. "· LMS" */
  subtitle?: string;
  /** highlighted dark card (LenderFest) */
  featured?: boolean;
  /** corner flag label, e.g. "Flagship" */
  flag?: string;
  description: string;
  /** optional extra paragraph rendered as raw HTML (e.g. the data stack) */
  extra?: string;
  features: string[];
  /** inner SVG markup for the 24x24 line icon */
  icon: string;
}

export const products: Product[] = [
  {
    name: 'LenderFest',
    subtitle: '· LMS',
    featured: true,
    flag: 'Flagship',
    description:
      'End-to-end loan management — origination, scoring, disbursement, repayments and collections — with M-Pesa STK push and CBK-aligned reporting for digital lenders, SACCOs and microfinance.',
    features: ['Loan origination', 'M-Pesa repayments', 'Collections', 'Credit scoring'],
    icon: '<path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"/><circle cx="12" cy="11" r="1.5"/>',
  },
  {
    name: 'Corebalt POS',
    description:
      'Fast point-of-sale for retail, restaurants and chains. Sell online or offline, track stock in real time, and issue eTIMS-compliant receipts automatically.',
    features: ['Inventory', 'eTIMS receipts', 'Multi-branch', 'Offline mode'],
    icon: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M9 21v-4h6v4"/>',
  },
  {
    name: 'Corebalt ERP',
    description:
      'Run finance, HR, payroll, procurement and inventory in one connected system — with real-time dashboards that give leadership a single source of truth.',
    features: ['Accounting', 'Payroll', 'Procurement', 'Reporting'],
    icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  },
  {
    name: 'Corebalt CRM',
    description:
      'Capture every lead, automate follow-ups over SMS and WhatsApp, and see your full sales pipeline so your team closes more and churns less.',
    features: ['Pipelines', 'SMS / WhatsApp', 'Automation', 'Analytics'],
    icon: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 7l2 2 4-4"/>',
  },
  {
    name: 'Bespoke systems',
    description:
      "When off-the-shelf won't do, we design and build custom platforms, internal tools, portals and integrations — engineered, documented and maintained by our team.",
    features: ['Web & mobile', 'Integrations', 'APIs', 'Cloud'],
    icon: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"/>',
  },
  {
    name: 'Data & Analytics',
    subtitle: '· Big Data',
    description:
      "Turn raw data into decisions. We build pipelines, warehouses and dashboards — and handle big-data and streaming workloads — so leaders see what's happening live and can forecast what's next.",
    extra:
      '<b style="color:var(--navy)">Modern stack:</b> Apache Spark &amp; Hadoop for big data, Kafka for real-time streaming, Snowflake, BigQuery &amp; Databricks for warehousing, dbt for transformation, Airflow for orchestration, and Power BI, Tableau or Looker for visualization — with Python and ML for forecasting.',
    features: ['Spark / Hadoop', 'Snowflake / BigQuery', 'Kafka streaming', 'Power BI / Tableau', 'ML & forecasting'],
    icon: '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 4-6"/><circle cx="7" cy="15" r="1"/><circle cx="20" cy="7" r="1"/>',
  },
];
