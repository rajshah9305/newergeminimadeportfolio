import { PERSONAL_INFO } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 font-mono text-[10rem] font-black text-black/[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
        EOF
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent text-black font-black flex items-center justify-center text-[12px] tracking-widest shrink-0 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" aria-hidden="true">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-black text-black uppercase tracking-tighter text-lg leading-none">Raj Shah</span>
            <span className="font-mono text-[10px] text-black/40 uppercase tracking-[0.2em] mt-1">AI & Full-Stack Engineer</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 mb-2">
            <span className="font-mono text-[8px] text-accent font-bold tracking-widest uppercase px-2 py-0.5 border border-accent/20">CORE_V4</span>
            <span className="font-mono text-[8px] text-highlight bg-black font-bold tracking-widest uppercase px-2 py-0.5">ENCRYPTED</span>
          </div>
          <p className="font-mono text-[10px] text-black/50 tracking-[0.2em] uppercase text-center md:text-right max-w-md leading-relaxed">
            SYSTEM_STATUS: <span className="text-green-500 animate-pulse">ONLINE</span> | VERSION 0.4.2 | © {new Date().getFullYear()}{" "}
            {PERSONAL_INFO.name.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}
