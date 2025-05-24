export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl shadow 
        bg-white text-gray-800 hover:bg-gray-100 
        dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 
        focus:outline-none 
        ${className}
      `}
    >
      {children}
    </button>
  );
}