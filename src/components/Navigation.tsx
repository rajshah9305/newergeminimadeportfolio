"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

const NAV_LINKS = [
  { href: "#expertise",  label: "Expertise" },
  { href: "#work",       label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress]     = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-0 w-full z-50 bg-dark border-b-2 border-dark"
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-primary transition-none z-[60]"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#top"
          aria-label="Back to top"
          className="flex items-center justify-center w-9 h-9 bg-primary text-white font-black text-[11px] tracking-tight hover:bg-white hover:text-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark shrink-0"
          style={{ letterSpacing: "0.05em" }}
        >
          RS
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-white hover:text-primary transition-colors focus:outline-none focus:text-primary"
              style={{ "--nav-underline": "var(--color-primary)" } as React.CSSProperties}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-white text-dark font-mono text-[11px] font-black uppercase tracking-[0.16em] border-2 border-white hover:bg-primary hover:text-white hover:border-primary shadow-[3px_3px_0px_0px_#E8622A] hover:shadow-none hover:-translate-y-px active:translate-y-px active:shadow-none transition-all focus:outline-none"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-white border-2 border-white/20 hover:border-primary hover:text-primary transition-colors focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span key="close"
                initial={reduce ? {} : { rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduce ? {} : { rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span key="open"
                initial={reduce ? {} : { rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduce ? {} : { rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 w-full bg-dark border-b-2 border-primary flex flex-col px-6 pb-6 pt-4 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={reduce ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="py-4 border-b border-white/10 flex justify-between items-center font-mono text-[13px] font-bold uppercase tracking-[0.16em] text-white hover:text-primary transition-colors focus:outline-none"
              >
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            ))}
            <div className="pt-5 flex gap-3">
              {[
                { href: PERSONAL_INFO.github,   label: "GitHub",   Icon: Github },
                { href: PERSONAL_INFO.linkedin, label: "LinkedIn", Icon: Linkedin },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                  className="p-3 bg-white/10 text-white border border-white/20 hover:bg-primary hover:border-primary transition-colors focus:outline-none">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
