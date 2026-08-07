import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const features = [
  'AI-powered task creation',
  'Smart deadline detection',
  'Priority categorization',
  'Actionable step generation',
  'Daily AI briefing',
  'Progress tracking',
  'Calendar integration ready',
  'Email reminders',
  'Notes & documentation',
  'Multiple categories',
  'Dark mode optimized',
  'Mobile responsive',
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to organize your life
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="rounded-full bg-primary/20 p-1">
                <CheckIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
