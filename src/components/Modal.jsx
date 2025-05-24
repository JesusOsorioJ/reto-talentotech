export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="
        fixed inset-0 flex items-center justify-center 
        bg-black bg-opacity-50
      ">
      <div className="
          w-full max-w-lg p-6 rounded-2xl shadow-lg 
          bg-white text-gray-800
          dark:bg-gray-800 dark:text-gray-100
        ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}