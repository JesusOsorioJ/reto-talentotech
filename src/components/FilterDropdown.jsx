import React from 'react';

export default function FilterDropdown({ options, selected, onSelect }) {
  return (
    <select
      value={selected}
      onChange={e => onSelect(e.target.value)}
      className="p-2 border rounded-lg"
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}