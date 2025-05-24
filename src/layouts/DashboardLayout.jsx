import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ChartBar, 
    FileText, 
    User, 
    MessageCircle, 
    Cog } from 'lucide-react';
import SunMoonToggle  from '../components/ToggleTheme.jsx';

const menu = [
  { name: 'Analytics', path: '/', icon: ChartBar },
  { name: 'Invoices', path: '/invoices', icon: FileText },
  { name: 'Payroll', path: '/payroll', icon: User },
  { name: 'Chatbot', path: '/chatbot', icon: MessageCircle },
  { name: 'Settings', path: '/settings', icon: Cog },
];

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-white shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-6">NiloBot</h1>
        <SunMoonToggle />
        <ul>
          {menu.map(item => (
            <li key={item.path} className="mb-4">
              <NavLink
                to={item.path}
                className={({isActive}) =>
                  `flex items-center p-2 rounded-lg hover:bg-gray-100 ${isActive ? 'bg-gray-200 font-semibold':''}`
                }
              >
                <item.icon className="mr-2" />{item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}