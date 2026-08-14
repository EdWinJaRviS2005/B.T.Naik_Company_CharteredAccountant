import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-slate-800">B.T. Naik & Company</span>
              <span className="ml-2 text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:block">Chartered Accountants</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="text-gray-600 group-hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors inline-flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link href="/services/auditing-and-assurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Auditing & Assurance</Link>
                  <Link href="/services/direct-tax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Direct Tax</Link>
                  <Link href="/services/indirect-tax-gst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Indirect Tax (GST)</Link>
                  <Link href="/services/company-law-roc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Company Law</Link>
                  <Link href="/services/international-taxation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">International Taxation</Link>
                  <Link href="/services/nri-taxation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">NRI Taxation</Link>
                  <Link href="/services/valuation-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Valuation</Link>
                  <Link href="/services/accounts-outsourcing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50">Accounts Outsourcing</Link>
                </div>
              </div>
            </div>
            <Link href="/faq" className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/portal" className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
              Client Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
