import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-secondary py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
              <span className="text-lg font-bold gradient-text">LifeOS</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Your AI personal operating system
            </p>
          </div>

          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Security', 'Roadmap'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'Cookies', 'Status'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 LifeOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
