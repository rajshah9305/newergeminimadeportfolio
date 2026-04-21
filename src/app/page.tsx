import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-primary text-white font-sans selection:bg-accent selection:text-primary relative overflow-x-hidden"
    >
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <div className="relative bg-primary">
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
        </div>
      </main>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
