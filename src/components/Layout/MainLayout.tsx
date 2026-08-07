import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const isDashboard = router.pathname.includes('/dashboard');

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      {isDashboard && <Sidebar />}
      <main className={isDashboard ? 'ml-64 mt-16 p-8' : 'mt-16'}>
        {children}
      </main>
    </div>
  );
}
