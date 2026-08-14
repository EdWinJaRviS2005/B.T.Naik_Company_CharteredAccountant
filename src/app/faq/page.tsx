import { Metadata } from 'next';
import { faqs } from '@/data/faqs';
import FAQAccordion from './FAQAccordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | B.T. Naik & Company',
  description: 'Find answers to commonly asked questions regarding taxation, GST, and corporate compliance.',
};

export default function FAQPage() {
  // Group FAQs by category
  const categories = Array.from(new Set(faqs.map(f => f.category)));
  
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Factual information and answers to common regulatory queries.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sm:p-8">
          <FAQAccordion faqs={faqs} categories={categories} />
        </div>

      </div>
    </div>
  );
}
