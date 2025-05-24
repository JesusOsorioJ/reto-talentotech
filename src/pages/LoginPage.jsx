import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../store/useAuth';
import Button from '../components/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useAuth(state => state.setToken);
  const setUser = useAuth(state => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // const { data } = await api.post('/auth/login', { email, password });
      // setToken(data.token);
      //       setUser(data.user);
       setToken(email);
      setUser(email);
      navigate('/', { replace: true });
    } catch (err) {
      alert('Login failed', err);
    }
  };

  return (
    <div className="flex items-center justify-center h-full  dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Iniciar Sesión</h2>
        <label className="block mb-4 text-gray-800 dark:text-gray-200">
          <span>Correo</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>
        <label className="block mb-6 text-gray-800 dark:text-gray-200">
          <span>Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </label>
        <Button className="w-full">Entrar</Button>
      </form>
    </div>
  );
}
