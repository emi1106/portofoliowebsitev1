// Project type definition
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  path: string;
}

// Language type definition
export interface Language {
  name: string;
  level: string;
  certification?: string;
  proficiency: string; // CSS width value like "100%", "85%", etc.
}

// Achievement type definition
export interface Achievement {
  title: string;
  description: string;
  year: string;
}

// Project data
export const projectData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with React and Node.js, supporting multiple vendors and secure payments.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    path: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "Restaurant Management System",
    description: "Custom solution for restaurant chain featuring order management, inventory tracking, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tags: ["React", "Firebase", "Material-UI"],
    path: "https://github.com/yourusername/restaurant-system"
  },
  {
    title: "Real Estate Platform",
    description: "Modern real estate platform with advanced search and filtering capabilities, built with Next.js and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
    path: "https://github.com/yourusername/real-estate-app"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio showcasing projects and skills with modern design and animations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    path: "https://github.com/yourusername/portfolio"
  }
];

// Language data
export const languageData: Language[] = [
  {
    name: "Romanian",
    level: "Native Speaker",
    proficiency: "100%"
  },
  {
    name: "German",
    level: "C1 Level",
    certification: "DSD Diploma",
    proficiency: "85%"
  },
  {
    name: "English",
    level: "C2 Level",
    certification: "Cambridge Diploma",
    proficiency: "95%"
  }
];

// Achievement data
export const achievementData: Achievement[] = [
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
