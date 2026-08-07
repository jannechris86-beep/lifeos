import React from 'react';
import { SparklesIcon, CheckCircleIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: SparklesIcon,
    title: 'Tell LifeOS What You Need',
    description: 'Share your goals, tasks, or plans in natural language. No complex formats required.',
  },
  {
    icon: CheckCircleIcon,
    title: 'AI Creates Your Plan',
    description: 'LifeOS transforms your request into organized tasks with deadlines, priorities, and action steps.',
  },
  {
    icon: ChartBarIcon,
    title: 'Track & Complete',
    description: 'Monitor your progress, get daily summaries, and stay motivated to achieve your goals.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">How it Works</h2>
          <p className="mt-4 text-lg text-gray-400">
            Three simple steps to organize your entire life
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="glass relative text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary p-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-gray-400">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
