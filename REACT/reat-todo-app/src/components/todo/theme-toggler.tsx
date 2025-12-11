import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../provider/theme/theme-context";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="p-1 bg-gray-600 rounded-sm" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="text-gray-100" />
      ) : (
        <Sun className="text-gray-100" />
      )}
    </button>
  );
};
