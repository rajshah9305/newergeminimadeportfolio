"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Menu, X, Github, Linkedin, ArrowRight, Check, Copy } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";
import { Magnetic } from "./Magnetic";

function Branding({ isScrolled }: { isScrolled: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex items-center gap-4">
      <a
        href="#top"
        className="group relative flex items-center justify-center focus:outline-none"
        aria-label="Back to top"
      >
        <motion.div
          whileHover={reduce ? {} : { scale: 1.05 }}
          whileTap={reduce ? {} : { scale: 0.95 }}
          className={`font-black w-8 h-8 flex items-center justify-center text-[11px] tracking-tight border border-dark transition-colors duration-200 ${
            isScrolled
              ? "bg-dark text-white"
              : "bg-white text-dark"
          }`}
        >
          RS
        </motion.div>
      </a>

      <div className="hidden lg:flex flex-col gap-0.5 pointer-events-none select-none">
        <span className={`font-mono text-[9px] font-bold tracking-widest uppercase ${isScrolled ? "text-dark/40" : "text-dark/40"}`}>
          {PERSONAL_INFO.coordinates}
        </span>
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
           <span className={`font-mono text-[9px] font-bold tracking-widest uppercase text-dark`}>
            {PERSONAL_INFO.availability}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [, setScrollPercent] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(Math.round(scrolled));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      style={
        {
          "--nav-underline": "var(--color-primary)",
        } as React.CSSProperties
      }
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-dark/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Branding isScrolled={isScrolled} />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-[12px] font-bold tracking-[0.16em] uppercase text-dark hover:text-primary transition-colors focus:outline-none"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
             <Magnetic strength={0.1}>
               <button
                onClick={copyEmail}
                className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 border border-dark/10 hover:border-dark transition-all text-dark bg-white"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Email"}
              </button>
            </Magnetic>
            <BrutalistButton
              href="#contact"
              primary
              className="!px-5 !py-2.5 !text-[11px] !shadow-none border !border-dark !bg-dark !text-white hover:!bg-primary hover:!border-primary"
            >
              Hire Me
            </BrutalistButton>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 border border-dark transition-all focus:outline-none bg-white text-dark"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={reduce ? {} : { rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduce ? {} : { rotate: 90, opacity: 0 }}
                transition={{ duration: 0.16 }}
                className="block"
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={reduce ? {} : { rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduce ? {} : { rotate: -90, opacity: 0 }}
                transition={{ duration: 0.16 }}
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
            initial={reduce ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="absolute top-full left-0 w-full border-b border-dark/10 flex flex-col px-6 pb-6 pt-4 bg-white/95 backdrop-blur-lg md:hidden font-mono font-bold uppercase z-40"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={reduce ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                className="py-4 border-b border-dark/5 flex justify-between items-center text-[13px] group focus:outline-none text-dark hover:text-primary"
              >
                {link.label}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            ))}
            <div className="pt-5 flex flex-col gap-4">
               <button
                onClick={copyEmail}
                className="flex items-center justify-between py-4 border-b border-dark/5 font-mono text-[13px] font-bold uppercase text-dark"
              >
                <span>{copied ? "Copied" : "Copy Email"}</span>
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
              <div className="flex gap-3">
                {[
                  { href: PERSONAL_INFO.github,   label: "GitHub Profile",   Icon: Github },
                  { href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile", Icon: Linkedin },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    aria-label={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-dark/10 p-3 hover:bg-dark hover:text-white transition-colors focus:outline-none"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
