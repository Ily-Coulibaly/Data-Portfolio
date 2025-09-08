import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => theme === 'light' && toggleTheme()}
        className={`transition-all duration-300 ${
          theme === 'dark' 
            ? 'text-[#A5A584] glow-text' 
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Switch to dark mode"
        data-testid="theme-dark"
      >
        <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
      </button>
      <span className="text-foreground/50">|</span>
      <button
        onClick={() => theme === 'dark' && toggleTheme()}
        className={`transition-all duration-300 ${
          theme === 'light' 
            ? 'text-[#A5A584] glow-text' 
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Switch to light mode"
        data-testid="theme-light"
      >
        <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-45" />
      </button>
    </div>
  );
};

export default ThemeToggle;