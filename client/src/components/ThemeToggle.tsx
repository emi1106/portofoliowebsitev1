import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SwitchTheme from './ui/switch-theme';

const ThemeToggle = () => {
  return (
    <div className="p-2">
      <SwitchTheme />
    </div>
  );
};

export default ThemeToggle;