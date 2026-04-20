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

const MARQUEE_ITEMS = [
  "AI INFRASTRUCTURE",
  "FULL-STACK SYSTEMS",
  "AGENT ORCHESTRATION",
  "REAL-TIME RAG",
  "EDGE DEPLOYMENT",
  "SCALABLE BACKENDS",
  "DESIGN ENGINEERING"
];

function SectionDivider() {
  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      aria-hidden="true"
    >
      <div className="w-full h-px bg-dark/15 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-dark" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-dark" />
      </div>
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
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-100" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-[#FFF8F5]/60 via-transparent to-transparent z-0" aria-hidden="true" />
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
