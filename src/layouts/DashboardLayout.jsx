import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ChartBar, FileText, User, MessageCircle, Cog } from 'lucide-react';
import SunMoonToggle from '../components/ToggleTheme.jsx';

const menu = [
  { name: 'Analytics', path: '/', icon: ChartBar },
  { name: 'Invoices', path: '/invoices', icon: FileText },
  { name: 'Payroll', path: '/payroll', icon: User },
  { name: 'Chatbot', path: '/chatbot', icon: MessageCircle },
  { name: 'Settings', path: '/settings', icon: Cog },
];

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800  dark:text-gray-100 duration-500 ">
      <nav className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
        <div className="flex justify-between items-center mb-6 px-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">NiloBot</h1>
          <SunMoonToggle />
        </div>
        <ul>
          {menu.map(item => (
            <li key={item.path} className="mb-4">
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg transition-colors
                   ${isActive 
                     ? 'bg-gray-200 text-gray-900 font-semibold dark:bg-gray-700 dark:text-gray-100' 
                     : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`
                }
              >
                <item.icon className="mr-2" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
}