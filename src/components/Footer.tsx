import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">B.T. Naik & Company</h3>
            <p className="text-sm text-slate-300">
              Chartered Accountants providing professional auditing, taxation, and advisory services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/portal" className="hover:text-white transition-colors">Client Portal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Email: contact@btnaik.com</li>
              <li>Phone: +91 (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 text-sm text-slate-400">
          <p className="mb-2">
            <strong>Disclaimer:</strong> As per the rules of the Institute of Chartered Accountants of India (ICAI), we are not permitted to solicit work or advertise. The information provided on this website is solely for informational purposes and should not be interpreted as soliciting or advertisement. We assume no responsibility for any decisions made based on the information provided herein.
          </p>
          <p className="text-center mt-6">
            &copy; {currentYear} B.T. Naik & Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
