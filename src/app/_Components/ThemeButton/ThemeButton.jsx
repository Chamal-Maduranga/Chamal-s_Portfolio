'use client'
import React, { useState, useRef, useEffect } from "react";

const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Stranded", value: "stranded" },
];

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(themes[0]);
  const dropdownRef = useRef(null);

  // Part 8: Load saved theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setSelected(themes.find(t => t.value === savedTheme));
      document.documentElement.className = savedTheme;
    } else {
      // If first time, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setSelected(themes.find(t => t.value === defaultTheme));
      document.documentElement.className = defaultTheme;
    }
  }, []);

  const handleThemeChange = (theme) => {
    setSelected(theme);
    document.documentElement.className = theme.value;
    localStorage.setItem("theme", theme.value); 
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      
      <button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        onClick={() => setOpen(!open)}
        className="w-[89px] bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)] rounded text-center "
      >
        {selected.name}
      </button>

      {open && (
        <ul className="absolute w-full mt-1 bg-[var(--background)] border border-[var(--foreground)] rounded shadow">
          {themes.map((theme) => (
            <li
              key={theme.value}
              onClick={() => handleThemeChange(theme)}
              className="p-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] cursor-pointer"
            >
              {theme.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
