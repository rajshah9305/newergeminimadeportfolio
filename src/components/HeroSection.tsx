"use client";

import { useEffect, useState } from "react";
import { Mail, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Small delay so the animation is visible on load
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const firstName = PERSONAL_INFO.name.split(" ")[0];
  const lastName = PERSONAL_INFO.name.split(" ").slice(1).join(" ");

  const fadeItem = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section
      aria-label="Introduction"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-center py-16"
    >
      <div className="max-w-4xl">
        {/* Status badge */}
        <div style={fadeItem(0)} className="flex items-center gap-3 mb-8">
          <div
            className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.7)]"
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
            Available for hire
          </span>
        </div>

        {/* Name */}
        <h1 className="font-black uppercase tracking-tighter leading-[0.88] mb-6">
          <span
            style={fadeItem(100)}
            className="block text-[clamp(4rem,14vw,9rem)] text-dark"
          >
            {firstName}
          </span>
          <span
            style={fadeItem(180)}
            className="block text-[clamp(4rem,14vw,9rem)] text-outline"
          >
            {lastName}
          </span>
        </h1>

        {/* Role */}
        <h2
          style={fadeItem(280)}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark mb-6 uppercase flex items-center gap-3 flex-wrap"
        >
          {PERSONAL_INFO.role}
          <span className="text-primary font-mono font-black text-2xl md:text-3xl leading-none">
            &gt;_
          </span>
        </h2>

        {/* Bio */}
        <p
          style={fadeItem(360)}
          className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mb-10 font-medium"
        >
          {PERSONAL_INFO.bio.split("Next.js")[0]}
          <span className="text-dark bg-white border-b-2 border-dark px-0.5 font-bold">
            Next.js, Python
          </span>
          {PERSONAL_INFO.bio.split("Python")[1]}
        </p>

        {/* CTAs */}
        <div style={fadeItem(440)} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <BrutalistButton
            primary
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Initialize Contact
          </BrutalistButton>
          <BrutalistButton href={PERSONAL_INFO.github} className="w-full sm:w-auto">
            <Github className="w-4 h-4" aria-hidden="true" />
            View Github
          </BrutalistButton>
        </div>
      </div>
    </section>
  );
}
