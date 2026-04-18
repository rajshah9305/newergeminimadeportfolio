"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Github, Linkedin, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";

const NAV_LINKS = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work",      label: "Work" },
  { href: "#experience",label: "Experience" },
];

function Branding() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-light"
      aria-label="Back to top"
    >
      <div className="bg-primary text-white font-black w-8 h-8 flex items-center justify-center text-[11px] tracking-tight shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] group-hover:bg-dark transition-colors duration-200">
        RS
      </div>
      <span className="font-black tracking-[0.14em] text-[14px] uppercase text-dark group-hover:text-primary transition-colors duration-200">
        {PERSONAL_INFO.name}
      </span>
    </a>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light/96 backdrop-blur-md border-b border-dark/8 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Branding />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-[12px] font-bold tracking-[0.16em] uppercase text-dark hover:text-primary transition-colors focus:outline-none focus:text-primary"
            >
              {link.label}
            </a>
          ))}
          <BrutalistButton
            href={`mailto:${PERSONAL_INFO.email}`}
            primary
            className="!px-5 !py-2.5 !text-[11px]"
          >
            Hire Me
          </BrutalistButton>
        </div>

        {/* Mobile toggle */}
        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-dark bg-white border-2 border-dark shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:shadow-none active:translate-y-px active:translate-x-px transition-all focus:outline-none focus:ring-2 focus:ring-primary"
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
            initial={reduce ? {} : { opacity: 0, scaleY: 0.94, y: -6 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, scaleY: 0.94, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute top-full left-0 w-full bg-light border-b-2 border-dark flex flex-col px-6 pb-6 pt-4 shadow-xl md:hidden font-mono font-bold uppercase z-40"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={reduce ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.055, duration: 0.2 }}
                className="py-4 border-b border-dark/8 flex justify-between items-center text-[13px] group focus:outline-none focus:text-primary"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
            <div className="pt-5 flex gap-3">
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
                  className="bg-dark text-white p-3 hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
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
