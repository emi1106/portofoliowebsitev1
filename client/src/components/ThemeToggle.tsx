import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  // Use optional chaining to prevent errors if ThemeContext isn't available yet
  const theme = useTheme()?.theme;
  const toggleTheme = useTheme()?.toggleTheme;
  
  // Local state as fallback
  const [mounted, setMounted] = useState(false);
  
  // After component mounts, set mounted to true
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything until after client-side hydration
  if (!mounted) return null;
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;