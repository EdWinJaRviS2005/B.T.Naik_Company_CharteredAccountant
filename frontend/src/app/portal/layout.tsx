'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/portal/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy-primary"></div>
      </div>
    );
  }

  // Even if pushing to login, don't render children until we know they are authenticated
  if (!user) {
    return null; 
  }

  return (
    <div className="bg-bg-secondary min-h-screen route-transition">
      {children}
    </div>
  );
}
