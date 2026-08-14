import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-primary text-white border-t border-navy-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold font-serif text-white mb-4">B.T. Naik & Company</h3>
            <p className="text-sm text-slate-300 max-w-sm">
              Chartered Accountants providing professional auditing, taxation, and advisory services.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="link-draw hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="link-draw hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="link-draw hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/rate-charts" className="link-draw hover:text-white transition-colors">Rate Charts</Link></li>
              <li><Link href="/faq" className="link-draw hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/portal" className="link-draw hover:text-white transition-colors">Client Portal</Link></li>
            </ul>
          </div>
          
          {/* Contacts & Seal */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-6 justify-between items-start">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Email: contact@btnaik.com</li>
                <li className="num-ledger">Phone: +91 123 456 7890</li>
              </ul>
            </div>
            {/* Signature BTN Circular Stamp Seal Motif - used exactly once in footer */}
            <div className="stamp-seal" title="B.T. Naik & Company Official Seal">
              BTN
            </div>
          </div>

        </div>
        
        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-400">
          <p className="mb-4 leading-relaxed">
            <strong>Disclaimer:</strong> As per the rules of the Institute of Chartered Accountants of India (ICAI), we are not permitted to solicit work or advertise. The information provided on this website is solely for informational purposes and should not be interpreted as soliciting or advertisement. We assume no responsibility for any decisions made based on the information provided herein.
          </p>
          <p className="text-center mt-6 text-[10px] uppercase tracking-wider">
            &copy; <span className="num-ledger">{currentYear}</span> B.T. Naik & Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
