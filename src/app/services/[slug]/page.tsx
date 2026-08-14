import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} | B.T. Naik & Company`,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-800 px-6 py-8 sm:px-10">
            <h1 className="text-3xl font-bold text-white mb-2">{service.title}</h1>
          </div>
          
          {/* Content */}
          <div className="px-6 py-8 sm:px-10">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mb-4 border-b pb-2">Scope of Services</h2>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-slate-700">
                {service.scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-slate-900 mb-4 border-b pb-2">Regulatory References</h2>
              <ul className="list-disc pl-5 mb-10 space-y-2 text-slate-700">
                {service.regulatoryReferences.map((ref, index) => (
                  <li key={index}>{ref}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-md border border-slate-100 flex flex-col sm:flex-row items-center justify-between mt-8">
              <p className="text-slate-700 font-medium mb-4 sm:mb-0">
                Require professional assistance with {service.title}?
              </p>
              <Link href="/contact" className="bg-slate-800 text-white px-6 py-2 rounded-md font-medium hover:bg-slate-700 transition-colors whitespace-nowrap">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
