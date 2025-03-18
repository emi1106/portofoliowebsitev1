import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { projectData } from '../data/portfolioData';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % projectData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + projectData.length) % projectData.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-3 mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">A selection of my recent work, showcasing a range of technologies and design approaches.</p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl bg-white">
            {projectData.map((project, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  currentSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="h-[350px] relative bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
                      e.currentTarget.alt = "Fallback image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <span className="uppercase tracking-wide text-xs font-bold bg-primary-500 px-2 py-1 rounded-sm">Featured</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors font-medium"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-5 w-5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center items-center space-x-2">
              {projectData.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index 
                      ? 'bg-primary-600 opacity-100' 
                      : 'bg-gray-300 hover:bg-primary-600'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 sm:-translate-x-10"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-primary-600" />
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 sm:translate-x-10"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-primary-600" />
          </button>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 rounded-lg font-medium transition-colors"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
