import { Metadata } from 'next';
import { faqs } from '@/data/faqs';
import FAQAccordion from './FAQAccordion';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | B.T. Naik & Company',
  description: 'Find answers to commonly asked questions regarding taxation, GST, and corporate compliance.',
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map(f => f.category)));
  
  return (
    <div className="bg-bg-secondary min-h-screen py-16 route-transition">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-4xl font-serif font-semibold text-navy-ink">Frequently Asked Questions</h1>
            <p className="mt-4 max-w-2xl text-base text-text-muted mx-auto">
              Factual information and answers to common regulatory queries.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-white rounded-[3px] border border-border-gray p-6 sm:p-10">
            <FAQAccordion faqs={faqs} categories={categories} />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
