export const KEY_LOCALSTORAGE = import.meta.env.PUBLIC_KEY_THEME;

export type Theme = "light" | "dark" | "system";

export function getPreferredTheme(): Theme {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(KEY_LOCALSTORAGE);
    if (stored === "light" || stored === "dark" || stored === "system")
      return stored;
  }
  return "dark"; // default
}

export function isDarkMode(theme: Theme): boolean {
  return (
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}
