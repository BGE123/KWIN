"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // When the component loads, check if we are already in dark mode
  useEffect(() => {
    const isDarkMode =
      document.documentElement.classList.contains("dark-theme");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    // Toggle the class on the main HTML tag
    document.documentElement.classList.toggle("dark-theme");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:scale-110 transition-transform duration-200"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-[#a8248c]" />
      ) : (
        <Moon className="w-6 h-6 text-[#1a1543]" />
      )}
    </button>
  );
}
