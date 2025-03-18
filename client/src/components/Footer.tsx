import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">John Doe</div>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2" 
                aria-label="GitHub profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2" 
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-white transition-colors p-2" 
                aria-label="Send email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 pb-4 text-center">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
