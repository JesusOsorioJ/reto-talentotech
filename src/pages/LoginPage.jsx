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
      // setUser(data.user);
       setToken(email);
      setUser(email);
      navigate('/', { replace: true });
    } catch (err) {
      alert('Login failed', err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full text-gray-700">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <label className="block mb-4">
          <span className="text-gray-700">Correo</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg outline-none"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg outline-none"
          />
        </label>
        <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Entrar</Button>
      </form>
    </div>
  );
}
