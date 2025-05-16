import { useEffect, useState } from "react";
import MoonIcon from "./icons/moon-icon";
import SunIcon from "./icons/sun-icon";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={toggleMode}
      name={`Toggle ${theme} mode`}
    >
      {theme === "light" && (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      {theme === "dark" && (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  );
}
