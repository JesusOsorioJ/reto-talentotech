import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ query, onChange, onSearch }) {
  return (
    <div className="flex items-center border rounded-lg p-2">
      <Search className="mr-2" />
      <input
        type="text"
        value={query}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSearch()}
        placeholder="Buscar..."
        className="w-full outline-none"
      />
    </div>
  );
}