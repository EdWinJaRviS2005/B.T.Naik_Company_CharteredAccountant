'use client';

import { useState } from 'react';
import { FAQ } from '@/data/faqs';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

interface Props {
  faqs: FAQ[];
  categories: string[];
}

export default function FAQAccordion({ faqs, categories }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-8 max-w-lg mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a topic (e.g., GST, ITR, ROC)..."
          className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Accordion Categories */}
      {categories.map((category) => {
        const categoryFaqs = filteredFaqs.filter((f) => f.category === category);
        if (categoryFaqs.length === 0) return null;

        return (
          <div key={category} className="mb-8 last:mb-0">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">{category}</h3>
            <div className="space-y-4">
              {categoryFaqs.map((faq) => (
                <div key={faq.id} className="border border-slate-200 rounded-md bg-slate-50 overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-slate-800">{faq.question}</span>
                    <FaChevronDown
                      className={`text-slate-500 transform transition-transform duration-200 flex-shrink-0 ml-4 ${
                        openItems.has(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openItems.has(faq.id) && (
                    <div className="p-4 border-t border-slate-200 bg-white">
                      <p className="text-slate-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      
      {filteredFaqs.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No matching FAQs found for &quot;{searchQuery}&quot;. Please try a different term.
        </div>
      )}
    </div>
  );
}
