import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-6xl font-bold leading-tight text-white md:text-7xl">
          Your AI assistant that
          <br />
          <span className="gradient-text">organizes your life</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400 md:text-2xl">
          Tell LifeOS what you need. It plans, organizes, and helps you complete your tasks.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Start Managing My Life
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-semibold text-white hover:border-primary hover:text-primary transition-colors"
          >
            See How It Works
          </Link>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            { number: '1000+', label: 'Tasks Organized' },
            { number: '500+', label: 'Active Users' },
            { number: '10k+', label: 'Hours Saved' },
          ].map((stat) => (
            <div key={stat.label} className="glass text-center">
              <div className="text-4xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
