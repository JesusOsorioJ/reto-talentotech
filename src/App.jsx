import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import DashboardLayout from './layouts/DashboardLayout';
import AnalyticsPage from './pages/AnalyticsPage';
import InvoicesPage from './pages/InvoicesPage';
import PayrollPage from './pages/PayrollPage';
import ChatbotPage from './pages/ChatbotPage';
import SettingsPage from './pages/SettingsPage';
import ProtectedRoute from './routes/ProtectedRoute';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
         <Route path="/login" element={<LoginPage />} /> {/* Sacar de aca */}
        <Route index element={<AnalyticsPage />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="payroll" element={<PayrollPage />} />
        <Route path="chatbot" element={<ChatbotPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}