import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';

export default function ProtectedRoute({ children }) {
  const token = useAuth(state => state.token);
//   return token ? children : <Navigate to="/login" replace />;
  return token ? children : children

}