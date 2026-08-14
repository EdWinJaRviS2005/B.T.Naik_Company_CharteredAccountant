export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  format: 'PDF' | 'DOCX' | 'XLSX';
  sizeMB: number;
  url: string; // Typically a cloud storage link, we will use # for mock
}

export const resources: Resource[] = [
  {
    id: "r1",
    title: "Income Tax Return (ITR-1) Sahaj",
    description: "For individuals being a resident (other than not ordinarily resident) having total income upto Rs.50 lakh, having Income from Salaries, one house property, other sources (Interest etc.), and agricultural income upto Rs.5 thousand.",
    category: "Income Tax Forms",
    format: "PDF",
    sizeMB: 1.2,
    url: "#"
  },
  {
    id: "r2",
    title: "Form 16 / 16A Request Checklist",
    description: "List of documents required from employers and banks to file ITR.",
    category: "Checklists",
    format: "DOCX",
    sizeMB: 0.1,
    url: "#"
  },
  {
    id: "r3",
    title: "GST Registration Document List",
    description: "Comprehensive list of documents required for applying for a new GST Registration.",
    category: "Checklists",
    format: "PDF",
    sizeMB: 0.3,
    url: "#"
  },
  {
    id: "r4",
    title: "Form GSTR-9 Annual Return",
    description: "Format for filing the annual GST return for regular taxpayers.",
    category: "GST Forms",
    format: "PDF",
    sizeMB: 2.5,
    url: "#"
  },
  {
    id: "r5",
    title: "Due Dates Calendar FY 2026-27",
    description: "Important statutory due dates for Income Tax, GST, and ROC compliance.",
    category: "Due Date Charts",
    format: "XLSX",
    sizeMB: 0.5,
    url: "#"
  }
];
