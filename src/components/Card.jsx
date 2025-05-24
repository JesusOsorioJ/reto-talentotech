import React from 'react';

export default function Card({ title, children, className }) {
  return (
    <div className={`p-4 rounded-2xl shadow bg-white ${className}`}>  
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
