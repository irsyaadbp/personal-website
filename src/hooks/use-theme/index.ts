import { useEffect, useState } from "react";
import {
  KEY_LOCALSTORAGE,
  isDarkMode,
  getPreferredTheme,
} from "@/hooks/use-theme/lib/utils";
import { type Theme } from "@/hooks/use-theme/lib/utils";

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    const initialTheme = getPreferredTheme();
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (theme: Theme) => {
    const isDark = isDarkMode(theme);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(KEY_LOCALSTORAGE, theme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  return { theme, setTheme };
};
