import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LanguageSection from "./components/LanguageSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <HeroSection />
      <LanguageSection />
      <EducationSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
