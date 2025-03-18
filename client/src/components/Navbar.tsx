import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm shadow-sm transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl text-primary-700 dark:text-blue-400">
            <span>DEV</span><span className="text-gray-500 dark:text-gray-400">PORTFOLIO</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#achievements" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <div className="block md:hidden">
              <button 
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none" 
                aria-label="Open menu"
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800">Skills</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800">Projects</a>
            <a href="#achievements" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800">Achievements</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;