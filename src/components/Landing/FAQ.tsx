import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How does LifeOS understand my requests?',
    answer: 'LifeOS uses advanced AI language models to understand natural language requests and extract key information like deadlines, priorities, and action steps automatically.',
  },
  {
    question: 'Can I integrate LifeOS with my calendar?',
    answer: 'Yes! LifeOS is built with calendar integration in mind. We\'re currently working on seamless sync with Google Calendar, Outlook, and Apple Calendar.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use end-to-end encryption and Supabase for secure cloud storage. Your data is never shared with third parties.',
  },
  {
    question: 'Can LifeOS send me reminders?',
    answer: 'Yes! LifeOS can send email and push notifications for your tasks and deadlines.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="glass w-full text-left transition-all"
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-primary transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIdx === idx && (
                <div className="border-t border-white/10 px-6 py-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
