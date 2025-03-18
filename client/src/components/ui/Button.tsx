import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3';
    
    switch(variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:opacity-90 focus:ring-primary-500`;
      case 'secondary':
        return `${baseClasses} bg-white text-indigo-700 shadow-md hover:bg-gray-50 focus:ring-primary-500`;
      case 'outlined':
        return `${baseClasses} border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-primary-500`;
      default:
        return baseClasses;
    }
  };
  
  return (
    <button 
      className={`${getButtonClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
