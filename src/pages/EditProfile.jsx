import React, { useState } from 'react';
import { useAuth } from '../store/useAuth';
import { ArrowLeft, User, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const logout = useAuth(state => state.logout);
  const [editing, setEditing] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);
  const [userData, setUserData] = useState({ name: 'Carlos López', email: 'carlos.lopez@example.com' });
  const [form, setForm] = useState({ name: userData.name, email: userData.email, current: '', newPass: '' });
  const navigate = useNavigate();

  const handleSaveProfile = () => {
    setUserData({ name: form.name, email: form.email });
    setEditing(false);
  };

  const handleSavePassword = () => {
    // llamar API para cambiar contraseña
    setPasswordMode(false);
    setForm({ ...form, current: '', newPass: '' });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <button onClick={() => navigate(-1)} className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
        <ArrowLeft className="w-5 h-5 mr-1" /> Volver a Ajustes
      </button>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Ajustes de Perfil</h1>

      {!editing && !passwordMode && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow space-y-4">
          <div className="flex items-center space-x-4">
            <User className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            <span className="text-lg text-gray-900 dark:text-gray-100">{userData.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <User className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            <span className="text-lg text-gray-900 dark:text-gray-100">{userData.email}</span>
          </div>
          <div className="flex space-x-4 pt-4">
            <button onClick={() => setEditing(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Editar Perfil</button>
            <button onClick={() => setPasswordMode(true)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">Cambiar Contraseña</button>
          </div>
        </div>
      )}

      {editing && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Editar Perfil</h2>
          <input
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            placeholder="Nombre"
          />
          <input
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            placeholder="Email"
          />
          <div className="flex space-x-4 pt-4">
            <button onClick={handleSaveProfile} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Guardar</button>
            <button onClick={() => setEditing(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Cancelar</button>
          </div>
        </div>
      )}

      {passwordMode && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cambiar Contraseña</h2>
          <input
            type="password"
            value={form.current}
            onChange={e => setForm({...form, current: e.target.value})}
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            placeholder="Contraseña actual"
          />
          <input
            type="password"
            value={form.newPass}
            onChange={e => setForm({...form, newPass: e.target.value})}
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            placeholder="Nueva contraseña"
          />
          <div className="flex space-x-4 pt-4">
            <button onClick={handleSavePassword} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Guardar Contraseña</button>
            <button onClick={() => setPasswordMode(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
