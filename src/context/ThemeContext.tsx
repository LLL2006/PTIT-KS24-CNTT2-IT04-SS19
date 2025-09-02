import React, { createContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
})

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const styles =
    theme === "light"
      ? { backgroundColor: "#fff", color: "#000", minHeight: "100vh" }
      : { backgroundColor: "#222", color: "#fff", minHeight: "100vh" };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={styles}>{children}</div>
    </ThemeContext.Provider>
  )
}
