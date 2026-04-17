"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/config/portfolio';
import { BrutalistButton } from './BrutalistButton';

function Branding() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 focus:ring-offset-light"
      aria-label="Back to top"
    >
      <div className="bg-primary text-white font-black w-8 h-8 flex items-center justify-center text-xs tracking-tight shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] group-hover:bg-dark transition-colors duration-200">
        RS
      </div>
      <span className="font-black tracking-[0.15em] text-sm uppercase text-dark group-hover:text-primary transition-colors duration-200">
        {PERSONAL_INFO.name}
      </span>
    </a>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#expertise', label: 'Expertise' },
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light/95 backdrop-blur-md border-b border-black/8 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Branding />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-xs font-bold tracking-[0.15em] uppercase text-dark hover:text-primary transition-colors focus:outline-none focus:text-primary"
            >
              {link.label}
            </a>
          ))}
          <BrutalistButton
            href={`mailto:${PERSONAL_INFO.email}`}
            primary
            className="!px-5 !py-2.5 !text-xs"
          >
            Hire Me
          </BrutalistButton>
        </div>

        {/* Mobile toggle */}
        <button
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-dark bg-white border-2 border-dark shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:shadow-none active:translate-y-px active:translate-x-px transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 w-full bg-light border-b-2 border-dark flex flex-col px-6 pb-6 shadow-xl md:hidden font-mono font-bold uppercase z-40 transition-all duration-250 origin-top ${
          mobileMenuOpen
            ? 'scale-y-100 opacity-100 pt-4'
            : 'scale-y-0 opacity-0 pointer-events-none pt-0'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="py-4 border-b border-black/10 flex justify-between items-center text-sm group focus:outline-none focus:text-primary"
          >
            {link.label}
            <ArrowRight className="w-4 h-4 group-hover:text-primary transition-colors" />
          </a>
        ))}
        <div className="pt-5 flex gap-3">
          <a
            aria-label="GitHub Profile"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="bg-dark text-white p-3 hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            aria-label="LinkedIn Profile"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-dark text-white p-3 hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
