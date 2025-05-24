import React, { useEffect } from 'react';

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-xl shadow-lg">
      {message}
    </div>
  );
}