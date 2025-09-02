import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <p>Theme hiện tại: <strong>{theme}</strong></p>
    </main>
  );
}
