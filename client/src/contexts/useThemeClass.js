import { useEffect } from "react";

export function useThemeClass(theme) {
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);
}
