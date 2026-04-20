import { PERSONAL_INFO } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="bg-white text-dark border-t border-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
        <div
          className="border border-dark text-dark font-black w-8 h-8 flex items-center justify-center text-[11px] tracking-tight shrink-0"
          aria-hidden="true"
        >
          RS
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-[9px] text-dark tracking-[0.14em] uppercase text-center">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()} &mdash; ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[9px] text-dark tracking-widest uppercase">System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
