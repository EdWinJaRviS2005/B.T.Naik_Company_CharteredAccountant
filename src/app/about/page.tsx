import { team } from '@/data/team';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | B.T. Naik & Company',
  description: 'Learn about B.T. Naik & Company and our team of professional Chartered Accountants.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Firm Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-slate-800 px-6 py-8 sm:px-10">
            <h1 className="text-3xl font-bold text-white">About the Firm</h1>
          </div>
          <div className="px-6 py-8 sm:px-10 prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              B.T. Naik & Company is a professional services firm comprised of Chartered Accountants, established to provide independent and objective assurance, taxation, and advisory services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our practice is built on a foundation of professional ethics and regulatory compliance. We aim to deliver structured solutions to organizations and individuals, ensuring adherence to statutory frameworks such as the Companies Act, Income Tax Act, and the Goods and Services Tax (GST) Act.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 px-6 py-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">Our Team</h2>
          </div>
          <div className="px-6 py-8 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.id} className="border border-slate-200 rounded-md p-6 bg-slate-50">
                  <div className="w-16 h-16 bg-slate-300 rounded-full mb-4 flex items-center justify-center text-slate-600 font-bold text-xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-700 mb-3">{member.qualification}</p>
                  
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-slate-800">Experience:</span> {member.experienceYears} Years
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">Specialization:</span> {member.specialization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
