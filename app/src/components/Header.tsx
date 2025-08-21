import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="header">
      <div className="header__brand">
        <img src="src\assets\logo-placeholder.png" alt="Timeline App Logo" />
        <strong>Timeline App</strong>
      </div>
      <button className="theme-toggle" onClick={() => setDark((v) => !v)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
