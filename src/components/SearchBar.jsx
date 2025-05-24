import { Search } from 'lucide-react';

export default function SearchBar({ query, onChange, onSearch }) {
  return (
    <div className="
        flex items-center border rounded-lg p-2 
        border-gray-300 bg-white text-gray-800 
        dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100
      ">
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
