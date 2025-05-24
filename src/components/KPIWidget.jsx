import React from 'react';

export default function KPIWidget({ label, value, change }) {
  const arrow = change >= 0 ? '↑' : '↓';
  return (
    <div className="p-4 bg-white rounded-xl shadow flex flex-col items-center">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm">{arrow} {Math.abs(change)}%</span>
    </div>
  );
}