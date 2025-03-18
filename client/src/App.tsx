
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Languages, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  path: string;
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
      path: "/projects/ecommerce"
    },
    {
      title: "Restaurant Management System",
      description: "Custom solution for restaurant chain featuring order management, inventory tracking, and analytics dashboard.",
      image: "/images/betoane2.jpg",
      tags: ["React", "Firebase", "Material-UI"],
      path: "/projects/restaurant"
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with advanced search and filtering capabilities, built with Next.js and PostgreSQL.",
      image: "/images/atelier1.jpg",
      tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
      path: "/projects/realestate"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects and skills with modern design and animations.",
      image: "/images/atelier2.jpg",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      path: "/projects/portfolio"
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
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of your components... */}

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
