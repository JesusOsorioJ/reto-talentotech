import React from 'react';
import KPIWidget from '../components/KPIWidget';

export default function AnalyticsPage() {
  // TODO: fetch and display real KPIs
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Resumen Ejecutivo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIWidget label="Ventas Hoy" value="$5,000" change={4.5} />
        <KPIWidget label="Facturado Mes" value="$120,000" change={-2.1} />
        <KPIWidget label="Pagos" value="$110,000" change={1.8} />
        <KPIWidget label="Empleados" value="25" change={0} />
      </div>
    </div>
  );
}