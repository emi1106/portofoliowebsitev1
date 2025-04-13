import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-end items-center h-16">
          <div className="relative">
            <button 
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none" 
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl`}>
              <a href="#about" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
              <a href="#projects" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</a>
              <a href="#achievements" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Achievements</a>
            </div>
          </div>
          
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;