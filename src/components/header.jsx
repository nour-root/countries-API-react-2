import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useEffect, useState } from "react";
export default function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      if (stored === "") return false;
    }
    return false;
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    let root = window.document.documentElement;
    if (theme) {
      localStorage.setItem("theme", "dark");
      root.classList.add("dark");
    } else {
      localStorage.setItem("theme", "");
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <header className="shadow max-sm:px-6 px-8 py-6 flex items-center justify-between dark:bg-dark-primary">
      <div>
        <h1 className="text-2xl max-sm:text-xl font-bold dark:text-white">
          where in the world?
        </h1>
      </div>
      <button
        onClick={() => setTheme(!theme)}
        className="flex items-center space-x-2 cursor-pointer dark:text-white"
      >
        <IoMoonOutline className="text-xl" />
        <p className="text-xl font-semibold max-sm:text-lg">dark Mode</p>
      </button>
    </header>
  );
}
