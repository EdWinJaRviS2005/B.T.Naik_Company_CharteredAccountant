'use client';

import { rates } from '@/data/rates';
import AnimatedNumber from '@/components/AnimatedNumber';
import ScrollReveal from '@/components/ScrollReveal';

export default function RateChartsPage() {
  const hasNumber = (str: string) => /\d/.test(str);

  const renderCellContent = (cell: string) => {
    // Check if the cell is a clean number (e.g. "5", "2.5", "18", "40")
    const isCleanNumber = /^[0-9]+(\.[0-9]+)?$/.test(cell.trim());
    
    if (isCleanNumber) {
      const val = parseFloat(cell);
      const decimalPlaces = cell.includes('.') ? cell.split('.')[1].length : 0;
      return <AnimatedNumber value={val} decimals={decimalPlaces} />;
    }

    // If it contains a number but is not a clean float (e.g., "194A", "40,000", "April 1, 2026")
    if (hasNumber(cell)) {
      return <span className="num-ledger">{cell}</span>;
    }

    return <span>{cell}</span>;
  };

  return (
    <div className="bg-bg-secondary min-h-screen py-16 route-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-4xl font-serif font-semibold text-navy-ink">Rate Charts</h1>
            <p className="mt-4 max-w-2xl text-base text-text-muted mx-auto">
              Reference tables for tax rates frequently needed by clients.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-12">
          {rates.map((chart, index) => (
            <ScrollReveal key={chart.id} delay={index * 60}>
              <div className="bg-white rounded-[3px] border border-border-gray overflow-hidden">
                <div className="bg-navy-primary px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-navy-ink">
                  <h2 className="text-lg font-serif font-semibold text-neon-pastel">{chart.title}</h2>
                  <span className="text-xs text-slate-300 mt-2 sm:mt-0 font-medium">
                    Last Updated: <span className="num-ledger">{chart.lastUpdated}</span>
                  </span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border-gray">
                    <thead className="bg-bg-secondary">
                      <tr>
                        {chart.headers.map((header, idx) => (
                          <th 
                            key={idx} 
                            scope="col" 
                            className="px-6 py-3.5 text-left text-xs font-semibold text-navy-ink uppercase tracking-wider whitespace-nowrap"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-border-gray">
                      {chart.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-bg-secondary transition-colors">
                          {row.map((cell, cellIndex) => (
                            <td 
                              key={cellIndex} 
                              className="px-6 py-4 text-xs text-text-body break-words leading-relaxed"
                            >
                              {renderCellContent(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 p-6 bg-white border border-border-gray rounded-[3px] text-xs text-text-muted leading-relaxed">
            <strong>Disclaimer:</strong> These rate charts are provided for general reference purposes only and are subject to change based on new notifications or legislative amendments. Please consult our professionals for advice specific to your circumstances before taking any action.
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
