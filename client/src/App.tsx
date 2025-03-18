import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LanguageSection from "./components/LanguageSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BackgroundBeamsWithCollision } from './components/ui/beams';

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-900 transition-colors">
        <StarBackground />
        <Navbar />
        {/* Hero Section */}
        <BackgroundBeamsWithCollision>
        <HeroSection />
        </BackgroundBeamsWithCollision>
        <LanguageSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;