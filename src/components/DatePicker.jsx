export default function DatePicker({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="
        p-2 border rounded-lg 
        border-gray-300 bg-white text-gray-800 
        dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100
      "
    />
  );
}
