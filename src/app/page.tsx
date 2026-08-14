import Link from 'next/link';
import { services } from '@/data/services';
import { FaFileInvoiceDollar, FaBuilding, FaBalanceScale, FaGlobe } from 'react-icons/fa';
import { FaCalculator, FaFileSignature, FaChartLine, FaUsers } from 'react-icons/fa6';
import { ElementType } from 'react';

// Icon mapping helper
const getIconForService = (slug: string): ElementType => {
  switch (slug) {
    case 'auditing-and-assurance': return FaBalanceScale;
    case 'direct-tax': return FaFileInvoiceDollar;
    case 'indirect-tax-gst': return FaCalculator;
    case 'company-law-roc': return FaBuilding;
    case 'international-taxation': return FaGlobe;
    case 'nri-taxation': return FaUsers;
    case 'valuation-services': return FaChartLine;
    case 'accounts-outsourcing': return FaFileSignature;
    default: return FaBuilding;
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            B.T. Naik & Company
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
            Professional Chartered Accountancy firm providing comprehensive audit, taxation, and advisory services.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/services/auditing-and-assurance" className="bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Firm Overview</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Established with a commitment to professional excellence, B.T. Naik & Company assists organizations and individuals in navigating complex statutory requirements. Our core focus areas include auditing and assurance, direct and indirect taxation, corporate compliance, and advisory services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Areas of Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = getIconForService(service.slug);
              return (
                <div key={service.slug} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                  <div className="text-slate-700 mb-4 bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-slate-800 hover:text-blue-600 flex items-center">
                    Read more <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
