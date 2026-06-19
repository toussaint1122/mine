import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("theme") === "dark"; } catch { return false; }
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return <Home dark={dark} onToggleDark={() => setDark((d) => !d)} />;
}
