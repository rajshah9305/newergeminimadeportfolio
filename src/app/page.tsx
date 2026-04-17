import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-light text-slate-900 font-sans selection:bg-primary selection:text-white relative overflow-x-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-60"
        aria-hidden="true"
      />
      {/* Warm gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none bg-gradient-to-br from-[#FFF5F2]/50 via-transparent to-transparent z-0"
        aria-hidden="true"
      />

      <Navigation />

      <main className="relative z-10 pt-20">
        <HeroSection />

        {/* Section divider */}
        <div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14"
          aria-hidden="true"
        >
          <div className="w-full h-[2px] bg-dark relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary border-2 border-dark" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-primary border-2 border-dark" />
          </div>
        </div>

        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
