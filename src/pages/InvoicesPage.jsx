import React, { useEffect, useState } from 'react';
import { useInvoices } from '../hooks/useInvoices';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

export default function InvoicesPage() {
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(false);
  const total = 200

  // useEffect(()=>{
  //   setTimeout(()=>{setloading(false)},2000)
  // },[])

  // const { invoices, total, loading } = useInvoices({ page, perPage: 10 });
  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Cliente', accessor: 'clientName' },
    { Header: 'Total', accessor: 'amount' },
    { Header: 'Estado', accessor: 'status' },
  ];
  if (loading) return <Spinner />;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Facturas</h1>
      <Table columns={columns} data={invoices} />
      <Pagination page={page} totalPages={Math.ceil(total/10)} onPageChange={setPage}/>
    </div>
  );
}

const invoices = [
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
