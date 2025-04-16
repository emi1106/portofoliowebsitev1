import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Asigură-te că ai instalat react-icons

// Citește variabilele de mediu (specific Vite)
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

const HeroSection = () => {
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
              href="https://github.com/emi1106" 
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
            {/* Poți păstra sau elimina iconița Mail de aici dacă ai butonul de mai jos */}
            {/* <a
              href={`mailto:${contactEmail}`} // Folosește variabila de mediu
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              aria-label="Send email"
              style={{ animation: `float 4s ease-in-out infinite` }}
            >
              <Mail className="h-6 w-6" />
            </a> */}
          </div>
          <div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8" // Added mt-8 for spacing, adjust as needed
            style={{ animation: `fadeIn 3s ease-in-out` }}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-700 dark:text-blue-400 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md inline-flex items-center justify-center" // Added inline-flex and justify-center
              style={{ animation: `pulse 3s ease-in-out infinite` }}
            >
              🚀 View My Work
            </a>
            {/* Buton WhatsApp - Re-adăugat */}
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500/80 dark:bg-green-600/80 text-white font-medium rounded-lg hover:bg-green-500/95 dark:hover:bg-green-600/95 border border-green-600 dark:border-green-700 transition-colors cursor-pointer inline-flex items-center justify-center" // Added inline-flex and justify-center
                style={{ animation: `pulse 3.5s ease-in-out infinite` }}
              >
                <FaWhatsapp className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            )}
            {/* Buton Mail - Re-adăugat */}
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="px-6 py-3 bg-blue-500/80 dark:bg-blue-600/80 text-white font-medium rounded-lg hover:bg-blue-500/95 dark:hover:bg-blue-600/95 border border-blue-600 dark:border-blue-700 transition-colors cursor-pointer inline-flex items-center justify-center" // Added inline-flex and justify-center
                style={{ animation: `pulse 4s ease-in-out infinite` }}
              >
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;