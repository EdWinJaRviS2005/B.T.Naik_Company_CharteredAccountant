export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  // GST Category
  {
    id: "gst-1",
    category: "GST",
    question: "Who is required to register for GST?",
    answer: "Any business whose aggregate turnover in a financial year exceeds Rs. 40 lakhs (for goods) or Rs. 20 lakhs (for services) must register. Thresholds may vary for special category states."
  },
  {
    id: "gst-2",
    category: "GST",
    question: "What is the penalty for late filing of GST returns?",
    answer: "A late fee is levied for filing returns after the due date, typically calculated on a per-day basis subject to a maximum cap, depending on the specific return (e.g., GSTR-3B, GSTR-1)."
  },
  {
    id: "gst-3",
    category: "GST",
    question: "Can Input Tax Credit (ITC) be claimed on all purchases?",
    answer: "No, ITC can only be claimed on goods and services used in the course or furtherance of business. Blocked credits under Section 17(5) are not eligible."
  },
  {
    id: "gst-4",
    category: "GST",
    question: "How often do I need to file GST returns?",
    answer: "Return filing frequency (monthly or quarterly) depends on your annual turnover and whether you have opted for the QRMP (Quarterly Return Monthly Payment) scheme."
  },
  
  // ITR Category
  {
    id: "itr-1",
    category: "Income Tax",
    question: "When is the due date for filing an individual Income Tax Return?",
    answer: "Generally, the due date for individuals not requiring an audit is July 31st of the Assessment Year, unless extended by the CBDT."
  },
  {
    id: "itr-2",
    category: "Income Tax",
    question: "What documents are needed to file an ITR?",
    answer: "Common documents include PAN, Aadhaar, Form 16, Bank statements, details of investments for deductions (e.g., under 80C), and capital gains statements."
  },
  {
    id: "itr-3",
    category: "Income Tax",
    question: "What is a Tax Audit?",
    answer: "A tax audit is an examination of business or professional accounts under Section 44AB of the Income Tax Act if turnover/receipts exceed specified limits."
  },
  {
    id: "itr-4",
    category: "Income Tax",
    question: "Can a revised return be filed if there is an error?",
    answer: "Yes, an original return can be revised before the end of the relevant Assessment Year or before the completion of the assessment, whichever is earlier."
  },

  // Company Registration Category
  {
    id: "comp-1",
    category: "Company Registration",
    question: "What is the minimum number of directors required for a Private Limited Company?",
    answer: "A Private Limited Company must have a minimum of two directors."
  },
  {
    id: "comp-2",
    category: "Company Registration",
    question: "What is a Director Identification Number (DIN)?",
    answer: "DIN is a unique identification number allotted by the Central Government to any person intending to be a Director of a company."
  },
  {
    id: "comp-3",
    category: "Company Registration",
    question: "Are annual filings mandatory for a dormant company?",
    answer: "Yes, every registered company must file annual returns and financial statements with the ROC, regardless of whether it is active or dormant."
  },
  {
    id: "comp-4",
    category: "Company Registration",
    question: "What is a Digital Signature Certificate (DSC)?",
    answer: "A DSC is a secure digital key issued by certifying authorities to validate and certify the identity of the person holding the certificate, used for electronic filings."
  },

  // NRI Category
  {
    id: "nri-1",
    category: "NRI Taxation",
    question: "Is the income earned outside India taxable for an NRI?",
    answer: "Generally, for a Non-Resident Indian, only the income earned or accrued in India, or received in India, is subject to Indian Income Tax."
  },
  {
    id: "nri-2",
    category: "NRI Taxation",
    question: "What is Form 15CA and 15CB?",
    answer: "These forms are required when remitting money out of India. Form 15CB is a CA certificate, and Form 15CA is a declaration by the remitter."
  },
  {
    id: "nri-3",
    category: "NRI Taxation",
    question: "Do NRIs need to file a tax return in India?",
    answer: "Yes, if the NRI's total income accrued or received in India exceeds the basic exemption limit during a financial year."
  }
];
