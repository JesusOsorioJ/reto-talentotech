import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const  SunMoonToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === null) {
      localStorage.setItem("theme", "dark");
      return true;
    }
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-8 h-8 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {darkMode ? (
          <motion.svg
            key="moon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-8 h-8"
          >
            <path d="M12 3.5A8.5 8.5 0 1 0 20.5 12a7 7 0 0 1-8.5-8.5Z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="w-8 h-8"
          >
            <circle cx="12" cy="12" r="5" fill="black" />
            <path
              d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.07 6.07-1.42-1.42M7.35 7.35 5.93 5.93m12.72 0-1.42 1.42M7.35 16.65l-1.42 1.42"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </motion.div>
    </div>
  );
}

export default SunMoonToggle
