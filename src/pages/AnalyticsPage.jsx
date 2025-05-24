import React from 'react';
import KPIWidget from '../components/KPIWidget';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { name: 'Ene', ventas: 4000, ingresos: 2400 },
  { name: 'Feb', ventas: 3000, ingresos: 1398 },
  { name: 'Mar', ventas: 2000, ingresos: 9800 },
  { name: 'Abr', ventas: 2780, ingresos: 3908 },
  { name: 'May', ventas: 1890, ingresos: 4800 },
  { name: 'Jun', ventas: 2390, ingresos: 3800 },
  { name: 'Jul', ventas: 3490, ingresos: 4300 },
];

 function AnalyticsPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Resumen Ejecutivo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPIWidget label="Ventas Hoy" value="$5,000" change={4.5} />
        <KPIWidget label="Facturado Mes" value="$120,000" change={-2.1} />
        <KPIWidget label="Pagos Procesados" value="$110,000" change={1.8} />
        <KPIWidget label="Nuevos Clientes" value="45" change={12} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico de líneas de ventas */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Ventas vs Ingresos (últimos meses)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Line type="monotone" dataKey="ventas" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="ingresos" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Gráfico de barras de ventas */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Comparativa Mensual de Ventas</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sampleData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Bar dataKey="ventas" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage