import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-24 right-6 z-50 flex items-center gap-1 p-1 rounded-full bg-dark-card/90 dark:bg-white/90 backdrop-blur-sm border border-white/10 dark:border-black/10 shadow-lg">
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-primary text-white' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-primary text-white' 
            : 'text-gray-400 hover:text-white dark:hover:text-gray-800'
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
