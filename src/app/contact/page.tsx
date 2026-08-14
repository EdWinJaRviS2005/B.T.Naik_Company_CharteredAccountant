import { Metadata } from 'next';
import ContactForm from './ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us | B.T. Naik & Company',
  description: 'Get in touch with B.T. Naik & Company for professional accountancy services.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            Reach out to us for professional inquiries or to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send an Inquiry</h2>
            <ContactForm />
          </div>

          {/* Office Details Section */}
          <div className="flex flex-col space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Office Details</h2>
              <ul className="space-y-6 text-slate-600">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="flex-shrink-0 w-6 h-6 text-slate-400 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-slate-900">Main Office</p>
                    <p className="mt-1">123 Commerce Avenue, Business District<br/>Mumbai, Maharashtra 400001, India</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="flex-shrink-0 w-6 h-6 text-slate-400 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-slate-900">Phone</p>
                    <p className="mt-1">+91 (123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="flex-shrink-0 w-6 h-6 text-slate-400 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-slate-900">Email</p>
                    <p className="mt-1">contact@btnaik.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClock className="flex-shrink-0 w-6 h-6 text-slate-400 mt-1" />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-slate-900">Working Hours</p>
                    <p className="mt-1">Monday - Friday: 10:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Map */}
            <div className="bg-slate-200 rounded-lg overflow-hidden h-64 border border-slate-300 relative">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d72.82!3d18.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzM2LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
