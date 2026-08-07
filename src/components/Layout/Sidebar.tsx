import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  HomeIcon,
  CheckCircleIcon,
  CalendarIcon,
  MapIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { label: 'Tasks', href: '/dashboard/tasks', icon: CheckCircleIcon },
  { label: 'Calendar', href: '/dashboard/calendar', icon: CalendarIcon },
  { label: 'Plans', href: '/dashboard/plans', icon: MapIcon },
  { label: 'Notes', href: '/dashboard/notes', icon: DocumentTextIcon },
  { label: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 border-r border-white/10 bg-dark-secondary p-6">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = router.pathname === item.href || router.pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:bg-dark-tertiary hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
