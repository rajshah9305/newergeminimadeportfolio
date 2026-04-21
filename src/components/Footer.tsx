import { PERSONAL_INFO } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 py-16 md:py-24 overflow-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent text-primary font-black flex items-center justify-center text-[12px] tracking-widest rounded-xl">
              RS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase tracking-tight text-xl">Raj Shah</span>
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.25em]">Engineering Masterpiece</span>
            </div>
          </div>
          <p className="text-white/40 text-[13px] max-w-xs text-center md:text-left mt-2">
            Built with Next.js 15, Framer Motion, and excessive attention to detail.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
            <a href="#expertise" className="font-mono text-[10px] font-bold text-white/40 hover:text-accent transition-colors tracking-widest uppercase">Expertise</a>
            <a href="#work" className="font-mono text-[10px] font-bold text-white/40 hover:text-accent transition-colors tracking-widest uppercase">Portfolio</a>
            <a href={PERSONAL_INFO.github} className="font-mono text-[10px] font-bold text-white/40 hover:text-accent transition-colors tracking-widest uppercase">GitHub</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase">
              STATUS: PRODUCTION_STABLE | V.04.26
            </p>
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
              © {new Date().getFullYear()} RAJ SHAH • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
