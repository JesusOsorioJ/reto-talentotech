import React from 'react';

export default function Table({ columns, data }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.accessor} className="px-4 py-2 border-b">{col.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => (
              <td key={col.accessor} className="px-4 py-2 border-b">{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}