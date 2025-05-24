import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ChartBar, FileText, User, MessageCircle, Cog, LogOut } from 'lucide-react';
import SunMoonToggle from '../components/ToggleTheme.jsx';

// Usuario simulado (reemplaza con data real)
const currentUser = {
  name: 'Carlos López',
  email: 'carlos.lopez@example.com',
  avatar: 'https://i.pravatar.cc/40?img=3'
};

const menuSections = [
  {
    title: 'GENERAL',
    items: [
      { name: 'Analytics', path: '/', icon: ChartBar },
      { name: 'Invoices', path: '/invoices', icon: FileText }
    ]
  },
  {
    title: 'OPERACIONES',
    items: [
      { name: 'Payroll', path: '/payroll', icon: User },
      { name: 'Chatbot', path: '/chatbot', icon: MessageCircle }
    ]
  },
  {
    title: 'AJUSTES',
    items: [
      { name: 'Settings', path: '/settings', icon: Cog }
    ]
  }
];

export default function DashboardLayout() {
    const isActive = true;
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">

      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-between">

        {/* Top: Logo, Theme Toggle, User Info */}
        <div>
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-bold">NiloBot</h1>
            <SunMoonToggle />
          </div>

          <div className="flex items-center px-6 py-4 space-x-4">
            <img src={currentUser.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">{currentUser.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser.email}</p>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 my-4" />

          {/* Menu Sections */}
          <nav className="px-4 space-y-6">
            {menuSections.map(section => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map(item => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => 
                          `flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                          ${isActive ? 'bg-blue-100 dark:bg-blue-800 font-semibold' : ''}`
                        }
                      >
                        <item.icon className="mr-3 w-5 h-5" />
                        <span className="capitalize flex-1">{item.name}</span>
                        {isActive && <div className="w-1 h-full bg-blue-600 dark:bg-blue-400 rounded-r-full" />}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer: Logout */}
        <div className="p-6">
          <button className="w-full flex items-center p-2 bg-red-50 dark:bg-red-900 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 transition-colors">
            <LogOut className="mr-3 w-5 h-5 text-red-500" />
            <span className="text-red-500 font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header Barra superior */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Bienvenido, {currentUser.name.split(' ')[0]}</h2>
          {/* Aquí podrías añadir breadcrumbs o acciones rápidas */}
        </header>

        {/* Contenido */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
}