import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Languages, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  path: string;  // Changed from 'link' to 'path'
}

interface Achievement {
  title: string;
  description: string;
  year: string;
}

interface Language {
  name: string;
  level: string;
  certification?: string;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const languages: Language[] = [
    {
      name: "Romanian",
      level: "Native Speaker",
    },
    {
      name: "German",
      level: "C1 Level",
      certification: "DSD Diploma"
    },
    {
      name: "English",
      level: "C2 Level",
      certification: "Cambridge Diploma"
    }
  ];

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with React and Node.js, supporting multiple vendors and secure payments.",
      image: "/images/betoane1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      path: "c:\Users\stefe\Desktop\project"
    },
    {
      title: "Restaurant Management System",
      description: "Custom solution for restaurant chain featuring order management, inventory tracking, and analytics dashboard.",
      image: "/images/betoane2.jpg",
      tags: ["React", "Firebase", "Material-UI"],
      path: "c:\Users\stefe\Desktop\project"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with advanced search and filtering capabilities, built with Next.js and PostgreSQL.",
      image: "/images/atelier1.jpg",
      tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
      path: "c:\Users\stefe\Desktop\project"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects and skills with modern design and animations.",
      image: "/images/atelier2.jpg",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      path: "c:\Users\stefe\Desktop\project"
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "Innovation Labs Mentorate 2024",
      description: "Selected participant in the prestigious Innovation Labs mentorship program, contributing to innovative tech solutions",
      year: "2024"
    },
    {
      title: "Sibiu Innovation Days",
      description: "Achieved Top 5 placement at Sibiu Innovation Days, showcasing exceptional project development and presentation skills",
      year: "2024"
    },
    {
      title: "Mathematics-Informatics Graduate",
      description: "Graduated with intensive informatics specialization, demonstrating strong technical and analytical capabilities",
      year: "2024"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Full Stack Developer</h1>
            <p className="text-xl mb-8">Crafting digital experiences that make a difference</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Languages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Language Proficiency</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                <Languages className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
                <p className="text-gray-600 mb-2">{language.level}</p>
                {language.certification && (
                  <p className="text-sm text-blue-600">{language.certification}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Education</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start">
              <GraduationCap className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Mathematics-Informatics</h3>
                <p className="text-gray-600 mb-2">Intensive Informatics Specialization</p>
                <p className="text-gray-500">Advanced coursework in algorithms, data structures, and software development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Slideshow Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="relative h-[600px] bg-white rounded-lg shadow-xl overflow-hidden">
              <div 
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <img 
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{projects[currentSlide].title}</h3>
                  <p className="text-gray-600 mb-4">{projects[currentSlide].description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentSlide].tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={projects[currentSlide].path}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Project Directory: <span className="ml-1 font-mono text-sm">{projects[currentSlide].path}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-2">{achievement.description}</p>
                <p className="text-sm text-gray-500">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;