import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  gradient = false, 
  hover = false 
}: CardProps) => {
  
  return (
    <div 
      className={`
        bg-white rounded-xl overflow-hidden shadow-md 
        ${hover ? 'hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300' : ''}
        ${className}
      `}
    >
      {gradient && <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-700"></div>}
      {children}
    </div>
  );
};

export default Card;
