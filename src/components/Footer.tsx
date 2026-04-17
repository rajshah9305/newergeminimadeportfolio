import { PERSONAL_INFO } from '@/config/portfolio';

export function Footer() {
  return (
    <footer className="bg-dark text-white border-t-[6px] border-primary py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="bg-primary text-white font-black w-7 h-7 flex items-center justify-center text-xs tracking-tight shrink-0">
          RS
        </div>
        <p className="font-mono text-[10px] text-slate-500 tracking-[0.15em] uppercase text-center">
          SYSTEM_STATUS: ONLINE &mdash; &copy; {new Date().getFullYear()}{' '}
          {PERSONAL_INFO.name.toUpperCase()} &mdash; ALL RIGHTS RESERVED
        </p>
        <div className="w-7 hidden sm:block" aria-hidden="true" />
      </div>
    </footer>
  );
}
