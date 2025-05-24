import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search } from 'lucide-react';

const employees = [
  { name: 'Juan Pérez', salary: 2000, paid: true },
  { name: 'Ana Gómez', salary: 1800, paid: false },
  { name: 'Carlos López', salary: 2200, paid: true },
  // ...más empleados
];

function PayrollPage() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(employees);

  useEffect(() => {
    setFiltered(employees.filter(e => e.name.toLowerCase().includes(query.toLowerCase())));
  }, [query]);

  const chartData = filtered.map(e => ({ name: e.name, salary: e.salary }));

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Nómina</h1>
      <div className="mb-6 flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-2 text-gray-500" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar empleado..."
            className="pl-10 p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Salarios por Empleado</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Bar dataKey="salary" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Detalle de Nómina</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Empleado</th>
                <th className="py-2 px-4 border-b">Salario</th>
                <th className="py-2 px-4 border-b">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e, i) => (
                <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-2 px-4">{e.name}</td>
                  <td className="py-2 px-4">${e.salary}</td>
                  <td className="py-2 px-4 text-center">{e.paid ? 'Pagado' : 'Pendiente'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PayrollPage