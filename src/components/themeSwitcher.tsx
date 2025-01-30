"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="planet-container flex justify-center m-auto "
    >
      <div className="night"></div>
      <div className="day"></div>
      <div className="clouds"></div>
      <div className="inner-shadow"></div>
    </button>
  );
}
