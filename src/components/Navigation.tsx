"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Github, Linkedin, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

const NAV_LINKS = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work",      label: "Work"      },
  { href: "#experience", label: "Timeline" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setProgress(window.scrollY / total);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className={`glass rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "bg-secondary/80 shadow-2xl border-white/10" : "bg-transparent border-transparent"
        }`}>

          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2 focus:outline-none"
          >
            <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-lg font-black text-[12px] text-primary transition-transform group-hover:rotate-12">
              RS
            </div>
            <span className="font-bold text-[14px] tracking-tight text-white hidden sm:block">
              RAJ SHAH
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors focus:outline-none"
              >
                {link.label}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2 bg-white text-primary rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Contact <Send className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-expanded={mobileOpen}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-accent/30 transition-all duration-300 w-full opacity-0"
           style={{ width: `${progress * 100}%`, opacity: scrolled ? 1 : 0 }} />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 w-full px-6 pt-2 md:hidden"
          >
            <div className="glass-dark rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center text-xl font-bold text-white/60 hover:text-white"
                  >
                    {link.label}
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </motion.a>
                ))}
                <hr className="border-white/5" />
                <div className="flex gap-4">
                  <a href={PERSONAL_INFO.github} className="flex-1 flex items-center justify-center py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={PERSONAL_INFO.linkedin} className="flex-1 flex items-center justify-center py-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
