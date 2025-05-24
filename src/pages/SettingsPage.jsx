import React, { useState } from 'react';
import { useAuth } from '../store/useAuth';
import { Sun, Moon, Bell, User, Key } from 'lucide-react';

export default function SettingsPage() {
  const logout = useAuth(state => state.logout);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [language, setLanguage] = useState('es');

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="max-w-3xl p-6 space-y-8 ">
      <h1 className="text-3xl font-bold">Configuración</h1>

      {/* Profile Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <User className="w-5 h-5 mr-2" /> Perfil
        </h2>
        <button className="w-full bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition">
          Editar Perfil
        </button>
      </section>

      {/* Account Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow space-y-4">
        <h2 className="flex items-center text-xl font-semibold">
          <Key className="w-5 h-5 mr-2" /> Cuenta
        </h2>
        <button className="w-full bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition">
          Cambiar contraseña
        </button>
        <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
          Cerrar sesión
        </button>
      </section>

      {/* Appearance Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center justify-between">
        <div className="flex items-center">
          {darkMode ? <Moon className="w-5 h-5 mr-2" /> : <Sun className="w-5 h-5 mr-2" />}
          <span className="font-medium">Modo oscuro</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
        </label>
      </section>

      {/* Notifications Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <Bell className="w-5 h-5 mr-2" /> Notificaciones
        </h2>
        {Object.entries(notifications).map(([type, enabled]) => (
          <div key={type} className="flex items-center justify-between py-2">
            <span className="capitalize">{type}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                onChange={() => handleNotificationChange(type)}
              />
              <div className="w-10 h-5 bg-gray-200 peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600" />
            </label>
          </div>
        ))}
      </section>

      {/* Language Section */}
      <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center justify-between">
        <label htmlFor="language" className="font-medium">
          Idioma
        </label>
        <select
          id="language"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-2"
        >
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
        </select>
      </section>
    </div>
  );
}