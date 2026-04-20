import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MARQUEE_ITEMS } from "@/config/portfolio";

function SectionDivider() {
  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24"
      aria-hidden="true"
    >
      <div className="w-full h-px bg-dark/5" />
    </div>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-light text-slate-900 font-sans selection:bg-primary selection:text-white relative overflow-x-hidden"
    >
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0" aria-hidden="true" />
      <div className="bg-scanline" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />

      <main className="relative z-10 pt-20">
        <HeroSection />

        <Marquee items={MARQUEE_ITEMS} />

        <SectionDivider />
        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <SectionDivider />
        <ProcessSection />

        <TestimonialSection />
      </main>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
