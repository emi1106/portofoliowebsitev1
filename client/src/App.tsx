import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LanguageSection from "./components/LanguageSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BackgroundBeamsWithCollision } from './components/ui/beams';
import { useState } from 'react';
import ContactModal from './components/ContactModal'; // Import the modal component


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-800 dark:text-gray-200 transition-colors">
        <div className="fixed inset-0 z-0">
          <BackgroundBeamsWithCollision />
        </div>
        <div className="relative z-10">
          <Navbar />
          <HeroSection setIsModalOpen={setIsModalOpen} />
          <LanguageSection />
          <EducationSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection setIsModalOpen={setIsModalOpen} />
          <Footer />
          <Toaster />
          {isModalOpen && <ContactModal setIsModalOpen={setIsModalOpen} />} {/*Render the modal if isModalOpen is true*/}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;