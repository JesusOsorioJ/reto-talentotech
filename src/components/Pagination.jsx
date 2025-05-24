import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ page, totalPages, onPageChange }) {
  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <button
        disabled={isFirst}
        onClick={() => onPageChange(page - 1)}
        className={`flex items-center px-3 py-2 rounded-xl shadow transition
          ${isFirst ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        <span>Anterior</span>
      </button>

      <span className="text-sm font-medium text-gray-700">
        Página <strong>{page}</strong> de <strong>{totalPages}</strong>
      </span>

      <button
        disabled={isLast}
        onClick={() => onPageChange(page + 1)}
        className={`flex items-center px-3 py-2 rounded-xl shadow transition
          ${isLast ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100 text-gray-700'}`}
      >
        <span>Siguiente</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}