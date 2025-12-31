"use client";

import { createContext, useState } from "react";
import { THEMES } from "./theme.config";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children, initial = "dark" }) {
  const [themeName, setThemeName] = useState(initial);
  const theme = THEMES[themeName];

  return (
    <ThemeContext.Provider
      value={{ theme, themeName, setThemeName }}
    >
      <div
        style={{
          background: theme.colors.background,
          color: theme.colors.text,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
