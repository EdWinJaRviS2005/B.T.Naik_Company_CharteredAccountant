'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate server action / API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name *</label>
        <div className="mt-1">
          <input type="text" name="name" id="name" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address *</label>
          <div className="mt-1">
            <input type="email" name="email" id="email" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
          <div className="mt-1">
            <input type="tel" name="phone" id="phone" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Query Type *</label>
        <div className="mt-1">
          <select id="subject" name="subject" required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border bg-white">
            <option value="">Select a subject...</option>
            <option value="audit">Auditing & Assurance</option>
            <option value="tax">Taxation Services</option>
            <option value="compliance">Company Law / ROC</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message *</label>
        <div className="mt-1">
          <textarea id="message" name="message" rows={4} required className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2 border"></textarea>
        </div>
      </div>

      <div>
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      
      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-700 text-center font-medium">Thank you for reaching out. We will get back to you shortly.</p>
        </div>
      )}
    </form>
  );
}
