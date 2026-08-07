import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  const router = useRouter();
  const isAuth = router.pathname.includes('/dashboard') || router.pathname.includes('/app');

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
          <span className="text-xl font-bold gradient-text">LifeOS</span>
        </Link>

        {!isAuth && (
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/dashboard" className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white hover:bg-secondary transition-colors">
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
