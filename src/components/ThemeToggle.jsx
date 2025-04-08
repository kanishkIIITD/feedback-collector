import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { toast } from "react-toastify";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
    toast.info(`Switched to ${theme === "light" ? "Dark" : "Light"} mode`);
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
