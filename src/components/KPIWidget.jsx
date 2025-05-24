export default function KPIWidget({ label, value, change }) {
  const arrow = change >= 0 ? '↑' : '↓';
  return (
    <div className="
        p-4 rounded-xl shadow flex flex-col items-center 
        bg-white text-gray-800 
        dark:bg-gray-800 dark:text-gray-100
      ">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-2xl font-bold">{value}</span>
      <span className="text-sm">{arrow} {Math.abs(change)}%</span>
    </div>
  );
}
