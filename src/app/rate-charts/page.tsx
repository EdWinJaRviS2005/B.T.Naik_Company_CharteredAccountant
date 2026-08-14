import { rates } from '@/data/rates';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax Rate Charts | B.T. Naik & Company',
  description: 'Reference tables for GST, TDS, and Depreciation rates.',
};

export default function RateChartsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Rate Charts</h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Reference tables for tax rates frequently needed by clients.
          </p>
        </div>

        <div className="space-y-12">
          {rates.map(chart => (
            <div key={chart.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-xl font-bold text-white">{chart.title}</h2>
                <span className="text-sm text-slate-300 mt-2 sm:mt-0">
                  Last Updated: {chart.lastUpdated}
                </span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      {chart.headers.map((header, idx) => (
                        <th 
                          key={idx} 
                          scope="col" 
                          className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider whitespace-nowrap"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {chart.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
                        {row.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex} 
                            className="px-6 py-4 text-sm text-slate-700 break-words"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-800">
          <strong>Disclaimer:</strong> These rate charts are provided for general reference purposes only and are subject to change based on new notifications or legislative amendments. Please consult our professionals for advice specific to your circumstances before taking any action.
        </div>

      </div>
    </div>
  );
}
