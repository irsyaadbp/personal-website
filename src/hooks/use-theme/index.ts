import { useEffect, useState } from "react";
import {
  KEY_LOCALSTORAGE,
  isDarkMode,
  getPreferredTheme,
} from "@/hooks/use-theme/lib/utils";
import { type Theme } from "@/hooks/use-theme/lib/utils";

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>("dark");

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
    const icon = {
      dark: "/favicon.svg",
      light: "/favicon-light.svg",
      system: "/favicon.svg",
    };

    changeFavicon(icon[newTheme]);
  };

  function changeFavicon(url: string) {
    const link = (document.querySelector("link[rel*='icon']") ||
      document.createElement("link")) as HTMLLinkElement;

    link.type = "image/svg+xml";
    link.rel = "shortcut icon";
    link.href = url;

    // Hapus favicon lama (jika ada)
    const oldLink = document.querySelector("link[rel*='icon']");
    if (oldLink) {
      document.head.removeChild(oldLink);
    }

    document.head.appendChild(link);
  }

  return { theme, setTheme };
};
