import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = ({ setIsModalOpen }) => {
  return (
    <header id="about" className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
            style={{ animation: `fadeIn 1.5s ease-in-out` }}
          >
            Full Stack Developer
          </h1>
          <p 
            className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: `fadeIn 2s ease-in-out` }}
          >
            Crafting digital experiences that make a difference. Specializing in modern web applications with clean, efficient code and intuitive user interfaces. ✨
          </p>
          <div 
            className="flex justify-center space-x-5 mb-10" 
            style={{ animation: `fadeIn 2.5s ease-in-out` }}
          >
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300" 
              aria-label="GitHub profile"
              style={{ animation: `float 3s ease-in-out infinite` }}
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300" 
              aria-label="LinkedIn profile"
              style={{ animation: `float 3.5s ease-in-out infinite` }}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300" 
              aria-label="Send email"
              style={{ animation: `float 4s ease-in-out infinite` }}
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div 
            className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4"
            style={{ animation: `fadeIn 3s ease-in-out` }}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-700 dark:text-blue-400 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md"
              style={{ animation: `pulse 3s ease-in-out infinite` }}
            >
              🚀 View My Work
            </a>
            <a 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-indigo-800/40 dark:bg-indigo-900/40 text-white font-medium rounded-lg hover:bg-indigo-800/60 dark:hover:bg-indigo-900/60 border border-indigo-500 dark:border-indigo-600 transition-colors cursor-pointer"
              style={{ animation: `pulse 3.5s ease-in-out infinite` }}
            >
              ✉️ Get In Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;