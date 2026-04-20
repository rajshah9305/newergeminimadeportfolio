import { PERSONAL_INFO } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="bg-dark border-t-2 border-dark py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-8 h-8 bg-primary text-white font-black flex items-center justify-center text-[11px] tracking-tight shrink-0" aria-hidden="true">
          RS
        </div>
        <p className="font-mono text-[10px] text-white/30 tracking-[0.16em] uppercase text-center">
          SYSTEM_STATUS: ONLINE &mdash; &copy; {new Date().getFullYear()}{" "}
          {PERSONAL_INFO.name.toUpperCase()} &mdash; ALL RIGHTS RESERVED
        </p>
        <div className="w-8 hidden sm:block" aria-hidden="true" />
      </div>
    </footer>
  );
}
