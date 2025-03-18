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

interface ShootingStar {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const { isDark } = useTheme();
  
  useEffect(() => {
    // Only show stars in dark mode
    if (!isDark) {
      setStars([]);
      setShootingStars([]);
      return;
    }

    // Generate random stars - increased density
    const numberOfStars = Math.floor(window.innerWidth / 8); // More stars (was /15)
    const newStars: Star[] = [];
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2.5 + 0.8, // Size between 0.8-3.3px (slightly wider range)
        x: Math.random() * 100, // % of screen width
        y: Math.random() * 100, // % of screen height
        opacity: Math.random() * 0.6 + 0.25, // Opacity between 0.25-0.85
        speed: Math.random() * 3 + 1, // Animation speed
        twinkleSpeed: Math.random() * 5 + 2 // Twinkle speed
      });
    }
    
    // Generate shooting stars
    const numberOfShootingStars = 4; // We'll have up to 4 shooting stars
    const newShootingStars: ShootingStar[] = [];
    
    for (let i = 0; i < numberOfShootingStars; i++) {
      newShootingStars.push({
        id: i,
        size: Math.random() * 3 + 2, // Size between 2-5px
        x: Math.random() * 30, // Starting position - left side of screen
        y: 50 + Math.random() * 40, // Starting position - middle to lower part
        duration: Math.random() * 3 + 2, // Animation duration 2-5s
        delay: Math.random() * 15 + (i * 7) // Staggered delays
      });
    }
    
    setStars(newStars);
    setShootingStars(newShootingStars);
    
    // Clean up function
    return () => {
      setStars([]);
      setShootingStars([]);
    };
  }, [isDark]);
  
  if (!isDark || stars.length === 0) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Regular stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
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
      
      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={`shooting-${shootingStar.id}`}
          className="absolute"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
            zIndex: 1,
          }}
        >
          <div 
            className="relative"
            style={{
              width: `${shootingStar.size * 5}px`,
              height: `${shootingStar.size}px`,
              background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)',
              borderRadius: '100px',
              transformOrigin: 'left',
              animation: `shootingStar ${shootingStar.duration}s ease-out infinite`,
              animationDelay: `${shootingStar.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default StarBackground;