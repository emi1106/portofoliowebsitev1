import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <header id="about" className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Full Stack Developer</h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that make a difference. Specializing in modern web applications with clean, efficient code and intuitive user interfaces.
          </p>
          <div className="flex justify-center space-x-5 mb-10">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300" 
              aria-label="GitHub profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300" 
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300" 
              aria-label="Send email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-800/40 text-white font-medium rounded-lg hover:bg-indigo-800/60 border border-indigo-500 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </header>
  );
};

export default HeroSection;
