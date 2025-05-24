import React from 'react';

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl shadow hover:shadow-md focus:outline-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}