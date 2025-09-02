import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ marginBottom: "20px" }}>
      <h1>Ứng dụng đổi theme</h1>
      <button
        onClick={toggleTheme}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          background: theme === "light" ? "#444" : "#ddd",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        Đổi sang {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
