export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  scope: string[];
  regulatoryReferences: string[];
}

export const services: Service[] = [
  {
    slug: "auditing-and-assurance",
    title: "Auditing & Assurance",
    shortDescription: "Independent verification of financial statements and internal controls to ensure transparency, accuracy, and compliance with statutory frameworks.",
    scope: [
      "Statutory Audits under the Companies Act, 2013",
      "Tax Audits under the Income Tax Act, 1961",
      "Internal and Management Audits",
      "Stock Audits and Information Systems Audits"
    ],
    regulatoryReferences: ["Companies Act, 2013", "Income Tax Act, 1961"]
  },
  {
    slug: "direct-tax",
    title: "Direct Tax",
    shortDescription: "Comprehensive advisory and compliance services related to direct taxation for individuals, partnerships, and corporate entities.",
    scope: [
      "Corporate Tax Planning and Compliance",
      "Preparation and Filing of Income Tax Returns (ITR)",
      "Representation before Tax Authorities",
      "Advisory on TDS/TCS matters"
    ],
    regulatoryReferences: ["Income Tax Act, 1961"]
  },
  {
    slug: "indirect-tax-gst",
    title: "Indirect Tax (GST)",
    shortDescription: "End-to-end Goods and Services Tax (GST) support ranging from initial registration to complex advisory and litigation support.",
    scope: [
      "GST Registration and Modifications",
      "Filing of periodic GST Returns (GSTR-1, GSTR-3B, GSTR-9, etc.)",
      "GST Audits and Reconciliations",
      "Advisory on Input Tax Credit (ITC) optimization"
    ],
    regulatoryReferences: ["Central Goods and Services Tax Act, 2017"]
  },
  {
    slug: "company-law-roc",
    title: "Company Law / ROC Compliance",
    shortDescription: "Assistance with regulatory filings, corporate governance, and ongoing compliance matters with the Registrar of Companies (ROC).",
    scope: [
      "Company and LLP Incorporation",
      "Annual Filing and XBRL Filings",
      "Maintenance of Statutory Registers and Minutes",
      "Advisory on Corporate Governance"
    ],
    regulatoryReferences: ["Companies Act, 2013", "Limited Liability Partnership Act, 2008"]
  },
  {
    slug: "international-taxation",
    title: "International Taxation",
    shortDescription: "Guidance on cross-border transactions, transfer pricing, and structuring investments to ensure compliance with global tax frameworks.",
    scope: [
      "Transfer Pricing Studies and Audits",
      "Advisory on Double Taxation Avoidance Agreements (DTAA)",
      "Expatriate Taxation",
      "FEMA and RBI Compliances for cross-border remittances"
    ],
    regulatoryReferences: ["Income Tax Act, 1961", "Foreign Exchange Management Act (FEMA)"]
  },
  {
    slug: "nri-taxation",
    title: "NRI Taxation",
    shortDescription: "Specialized tax advisory and compliance services designed specifically for Non-Resident Indians managing financial interests in India.",
    scope: [
      "Filing of Income Tax Returns for NRIs",
      "Issuance of Form 15CA and 15CB",
      "Advisory on Repatriation of Funds",
      "Capital Gains Advisory on Property Sales"
    ],
    regulatoryReferences: ["Income Tax Act, 1961", "Foreign Exchange Management Act (FEMA)"]
  },
  {
    slug: "valuation-services",
    title: "Valuation Services",
    shortDescription: "Factual and objective valuation of businesses, shares, and intangible assets for regulatory and transaction purposes.",
    scope: [
      "Valuation of Shares and Securities (DCF / Net Asset Value)",
      "Valuation for Mergers and Acquisitions",
      "FEMA / RBI Valuation for Foreign Direct Investment (FDI)",
      "Valuation of Intangible Assets"
    ],
    regulatoryReferences: ["Companies Act, 2013", "Income Tax Act, 1961", "FEMA"]
  },
  {
    slug: "accounts-outsourcing",
    title: "Accounts Outsourcing",
    shortDescription: "Outsourced accounting and bookkeeping services enabling organizations to maintain accurate financial records.",
    scope: [
      "Day-to-day Bookkeeping and Ledger Maintenance",
      "Preparation of Financial Statements (Balance Sheet, P&L)",
      "Payroll Processing and Compliance",
      "MIS Reporting and Financial Analysis"
    ],
    regulatoryReferences: ["Generally Accepted Accounting Principles (GAAP)", "Indian Accounting Standards (Ind AS)"]
  }
];
