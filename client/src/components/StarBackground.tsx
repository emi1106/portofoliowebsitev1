import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const { isDark } = useTheme();
  
  useEffect(() => {
    // Only show stars in dark mode
    if (!isDark) {
      setStars([]);
      return;
    }

    // Generate random stars
    const numberOfStars = Math.floor(window.innerWidth / 15); // Responsive number of stars
    const newStars: Star[] = [];
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1, // Size between 1-3px
        x: Math.random() * 100, // % of screen width
        y: Math.random() * 100, // % of screen height
        opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3-0.8
        speed: Math.random() * 3 + 1, // Animation speed
        twinkleSpeed: Math.random() * 5 + 2 // Twinkle speed
      });
    }
    
    setStars(newStars);
    
    // Clean up function
    return () => {
      setStars([]);
    };
  }, [isDark]);
  
  if (!isDark || stars.length === 0) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'white',
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: `twinkle ${star.twinkleSpeed}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;