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
    <header className="header" role="banner">
      <div className="header__brand">
        <img
          src="src\assets\logo-placeholder.png"
          alt="Timeline App Logo"
          width="40"
          height="40"
        />
        <strong>Timeline App</strong>
      </div>
      <button
        className="theme-toggle"
        onClick={() => setDark((v) => !v)}
        aria-pressed={dark}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
