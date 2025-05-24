export default function FilterDropdown({ options, selected, onSelect }) {
  return (
    <select
      value={selected}
      onChange={e => onSelect(e.target.value)}
      className="
        p-2 border rounded-lg 
        border-gray-300 bg-white text-gray-800 
        dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100
      "
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
