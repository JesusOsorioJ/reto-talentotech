export default function Card({ title, children, className }) {
  return (
    <div className={`
        p-4 rounded-2xl shadow 
        bg-white text-gray-800 
        dark:bg-gray-800 dark:text-gray-100 
        ${className}
      `}>
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
