export interface RateChart {
  id: string;
  category: string;
  title: string;
  lastUpdated: string;
  headers: string[];
  rows: string[][];
}

export const rates: RateChart[] = [
  {
    id: "gst-goods",
    category: "GST",
    title: "GST Rates on Common Goods",
    lastUpdated: "April 1, 2026",
    headers: ["Chapter / HSN", "Description of Goods", "CGST Rate (%)", "SGST Rate (%)", "IGST Rate (%)"],
    rows: [
      ["0402", "Milk and dairy products", "2.5", "2.5", "5"],
      ["8517", "Smartphones and cellular devices", "9", "9", "18"],
      ["8471", "Computers, laptops, and IT equipment", "9", "9", "18"],
      ["8703", "Motor cars and other motor vehicles", "14", "14", "28"]
    ]
  },
  {
    id: "tds-rates",
    category: "Income Tax",
    title: "TDS Rate Chart (FY 2026-27)",
    lastUpdated: "April 1, 2026",
    headers: ["Section", "Nature of Payment", "Threshold Limit (Rs.)", "Rate for Individuals/HUF (%)", "Rate for Others (%)"],
    rows: [
      ["192", "Salary", "Basic Exemption Limit", "Normal Slab Rates", "N/A"],
      ["194A", "Interest other than interest on securities", "40,000 / 50,000", "10", "10"],
      ["194C", "Payment to Contractors", "30,000 single / 1,00,000 aggregate", "1", "2"],
      ["194J", "Fees for Professional / Technical Services", "30,000", "10 (2 for Technical)", "10 (2 for Technical)"],
      ["194Q", "Purchase of Goods", "50,00,000", "0.1", "0.1"]
    ]
  },
  {
    id: "depreciation",
    category: "Income Tax",
    title: "Depreciation Rates as per Income Tax Act",
    lastUpdated: "April 1, 2026",
    headers: ["Block of Assets", "Description", "Rate of Depreciation (%)"],
    rows: [
      ["Building", "Residential buildings other than hotels and boarding houses", "5"],
      ["Building", "Office, factory, godowns, or hotels", "10"],
      ["Furniture & Fittings", "Furniture and fittings including electrical fittings", "10"],
      ["Plant & Machinery", "Motor cars (other than those used in a business of running them on hire)", "15"],
      ["Plant & Machinery", "Computers including computer software", "40"],
      ["Intangible Assets", "Know-how, patents, copyrights, trademarks, licenses", "25"]
    ]
  }
];
