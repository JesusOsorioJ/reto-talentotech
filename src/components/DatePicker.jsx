import React from 'react';

export default function DatePicker({ value, onChange }) {  
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="p-2 border rounded-lg"
    />
  );
}