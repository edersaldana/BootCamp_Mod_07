import { STORAGE_THEME_KEY } from "../constants/theme-key";
import type { Theme } from "../types/types";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = window.localStorage.getItem(STORAGE_THEME_KEY) as Theme;

  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

  return prefersDark ? "dark" : "light";
}
