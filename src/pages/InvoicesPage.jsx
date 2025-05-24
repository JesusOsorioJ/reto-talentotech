import React, { useEffect, useState, useMemo } from 'react';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const allInvoices = [
  { id: 1, clientName: 'Juan Pérez', amount: 899.32, status: 'Completado' },
  { id: 2, clientName: 'Ana Gómez', amount: 745.25, status: 'Pendiente' },
  { id: 3, clientName: 'Carlos López', amount: 123.67, status: 'Cancelado' },
  { id: 4, clientName: 'Marta Sánchez', amount: 512.15, status: 'Completado' },
  { id: 5, clientName: 'Pedro Díaz', amount: 672.54, status: 'Pendiente' },
  { id: 6, clientName: 'María Rodríguez', amount: 193.46, status: 'Cancelado' },
  { id: 7, clientName: 'Luis Torres', amount: 875.84, status: 'Completado' },
  { id: 8, clientName: 'Sofia Herrera', amount: 634.79, status: 'Completado' },
  { id: 9, clientName: 'Andrés Fernández', amount: 345.90, status: 'Cancelado' },
  { id: 10, clientName: 'Laura Martínez', amount: 726.51, status: 'Pendiente' },
  { id: 11, clientName: 'Juan Carlos Ruiz', amount: 856.73, status: 'Completado' },
  { id: 12, clientName: 'Beatriz López', amount: 246.22, status: 'Cancelado' },
  { id: 13, clientName: 'Jorge García', amount: 489.13, status: 'Pendiente' },
  { id: 14, clientName: 'Verónica Pérez', amount: 942.67, status: 'Completado' },
  { id: 15, clientName: 'Francisco García', amount: 128.43, status: 'Cancelado' },
]


export default function InvoicesPage() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todas');
  const perPage = 10;

  // Simula carga al cambiar página o filtro
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [page, filter]);

  // Filtrado según categoría
  const filtered = useMemo(() => {
    if (filter === 'Todas') return allInvoices;
    return allInvoices.filter(inv => inv.status === filter);
  }, [filter]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const data = useMemo(
    () => filtered.slice((page - 1) * perPage, page * perPage),
    [filtered, page]
  );

  // Conteo por estado
  const counts = useMemo(() => {
    const c = { Todas: allInvoices.length, Completado: 0, Pendiente: 0, Cancelado: 0 };
    allInvoices.forEach(inv => {
      if (c[inv.status] >= 0) c[inv.status]++;
    });
    return c;
  }, []);

  const tabs = ['Todas', 'Completado', 'Pendiente', 'Cancelado'];
  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Cliente', accessor: 'clientName' },
    { Header: 'Total', accessor: 'amount' },
    { Header: 'Estado', accessor: 'status' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Facturas</h1>

      {/* Subcategorías */}
      <div className="flex space-x-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => { setFilter(tab); setPage(1); }}
            className={`px-4 py-2 rounded-full transition
              ${filter === tab
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {tab} ({counts[tab]})
          </button>
        ))}
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <Table columns={columns} data={data} />
          <div className="mt-4">
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
          </div>
        </>
      )}
    </div>
  );
}