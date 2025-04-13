import { useState } from "react";
// Assuming you might want the ThemeToggle later, keep the import
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Optional: Add a background color to the nav itself if needed
    // e.g., className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm"
    <nav className="sticky top-0 z-50">
      {/* Remove 'container' and 'mx-auto' from this div */}
      {/* Keep the padding classes (px-*) */}
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        {" "}
        {/* Keep mx-auto here if you want the *content* (like logo on left, menu on right) within a max width, otherwise remove it */}
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/se-logo.svg" alt="SE Logo" className="h-8 w-8 text-white dark:text-white" />
          </div>
          {/* Optional: Add ThemeToggle here if you want it next to the menu */}
          {/* <div className="mr-4"> <ThemeToggle /> </div> */}
          {/* Hamburger Menu Button and Dropdown */}
          <div className="relative">
            <button
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Open menu"
              aria-expanded={isOpen} // Good for accessibility
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Change icon based on state - Optional but good UX */}
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  /> // Close icon (X)
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  /> // Hamburger icon
                )}
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div
              className={`${isOpen ? "block" : "hidden"} absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5`}
            >
              {/* Add onClick={toggleMenu} to links if you want the menu to close on selection */}
              <a
                href="#about"
                onClick={toggleMenu}
                className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Projects
              </a>
              <a
                href="#achievements"
                onClick={toggleMenu}
                className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Achievements
              </a>
              {/* Optional: Add ThemeToggle inside the dropdown */}
              {/* <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 px-4">
                 <ThemeToggle />
               </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;