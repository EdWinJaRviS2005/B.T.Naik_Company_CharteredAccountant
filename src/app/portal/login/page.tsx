'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '@/lib/firebase/clientApp';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [method, setMethod] = useState<'email' | 'otp'>('email');
  
  // Email state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // OTP state
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/portal/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login with email.');
    } finally {
      setLoading(false);
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      });
    }
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`; // default to India
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP.');
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = undefined;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmationResult) return;
    
    setLoading(true);
    setError('');

    try {
      await confirmationResult.confirm(verificationCode);
      router.push('/portal/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-slate-200">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-slate-900">
            Client Portal
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Sign in to securely access your documents
          </p>
        </div>

        {!isFirebaseConfigured ? (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-800 text-sm">
            <h3 className="font-bold mb-1">Firebase Configuration Required</h3>
            <p className="mb-2">
              The Client Portal features (authentication, upload, and database storage) require Firebase credentials to function.
            </p>
            <p className="font-semibold mb-1">How to configure:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Create a Firebase project at <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium">Firebase Console</a>.</li>
              <li>Enable <strong>Email/Password</strong> and <strong>Phone</strong> sign-in providers in Authentication.</li>
              <li>Create a web app in project settings and obtain your config object.</li>
              <li>Copy the credentials into a <code>.env.local</code> file in your project root using the environment variable names specified in <code>src/lib/firebase/clientApp.ts</code>.</li>
            </ol>
          </div>
        ) : (
          <>
            {/* Login Method Toggle */}
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => { setMethod('email'); setError(''); }}
                className={`flex-1 py-2 text-sm font-medium rounded-l-md border ${method === 'email' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
              >
                Email & Password
              </button>
              <button
                onClick={() => { setMethod('otp'); setError(''); }}
                className={`flex-1 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${method === 'otp' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
              >
                Phone (OTP)
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {method === 'email' ? (
              <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:opacity-70 transition-colors"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 space-y-6">
            {!confirmationResult ? (
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number (with country code)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div id="recaptcha-container"></div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 focus:outline-none disabled:opacity-70 transition-colors"
                >
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-slate-700 mb-1">Verification Code</label>
                  <input
                    id="code"
                    name="code"
                    type="text"
                    required
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="123456"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 focus:outline-none disabled:opacity-70 transition-colors"
                >
                  {loading ? 'Verifying...' : 'Verify & Sign In'}
                </button>
              </form>
            )}
          </div>
        )}
      </>
    )}
  </div>
</div>
  );
}

// Add recaptchaVerifier to window object for TypeScript
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}
