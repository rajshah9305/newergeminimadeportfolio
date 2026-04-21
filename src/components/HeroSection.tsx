"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/config/portfolio";
import { GLSLHills } from "./GLSLHills";
import { BrutalistButton } from "./BrutalistButton";
import { Marquee } from "./Marquee";
import { Github, Mail, Terminal as TerminalIcon } from "lucide-react";

const STATS = PERSONAL_INFO.stats;

const CODE_LINES = [
  { indent: 0, tokens: [{ t: "class", c: "text-accent" }, { t: " Engineer", c: "text-white" }, { t: " {", c: "text-white/40" }] },
  { indent: 1, tokens: [{ t: "constructor", c: "text-accent" }, { t: "() {", c: "text-white/40" }] },
  { indent: 2, tokens: [{ t: "this", c: "text-accent" }, { t: ".focus", c: "text-white" }, { t: " = ", c: "text-white/40" }, { t: "['AI', 'Scalability']", c: "text-accent" }, { t: ";", c: "text-white/40" }] },
  { indent: 1, tokens: [{ t: "}", c: "text-white/40" }] },
  { indent: 1, tokens: [{ t: "async", c: "text-accent" }, { t: " build", c: "text-white" }, { t: "(", c: "text-white/40" }, { t: "idea", c: "text-accent" }, { t: ") {", c: "text-white/40" }] },
  { indent: 2, tokens: [{ t: "return", c: "text-accent" }, { t: " await ", c: "text-white/40" }, { t: "deploy", c: "text-white" }, { t: "(idea);", c: "text-white/40" }] },
  { indent: 1, tokens: [{ t: "}", c: "text-white/40" }] },
  { indent: 0, tokens: [{ t: "}", c: "text-white/40" }] },
];

const MARQUEE_ITEMS = [
  "FastAPI", "Docker", "React", "Next.js", "Python",
  "TypeScript", "LangChain", "AWS", "PostgreSQL", "Rust",
];

export function HeroSection() {
  return (
    <>
      <section
        aria-label="Introduction"
        className="relative w-full overflow-hidden bg-primary bg-grain-overlay"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* ── GLSL hills ── */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <GLSLHills speed={0.3} cameraZ={110} planeSize={256} contained />
        </div>

        {/* ── Vignette & Overlays ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 0%, rgba(5,5,5,0.4) 60%, #050505 100%)",
          }}
        />

        {/* Top/Bottom Fades */}
        <div className="absolute inset-x-0 top-0 h-32 z-[2] pointer-events-none bg-gradient-to-b from-primary to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 z-[2] pointer-events-none bg-gradient-to-t from-primary to-transparent" />

        <div className="relative z-10 w-full h-full flex flex-col container mx-auto px-6 sm:px-10 lg:px-16"
          style={{ minHeight: "calc(100vh - 72px)" }}>

          {/* ── ROW 1: top meta bar ── */}
          <div className="flex items-center justify-between pt-12 pb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="inline-block w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#00FF94]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-bold tracking-[0.28em] uppercase text-white/50">
                {PERSONAL_INFO.role}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00FF94]" aria-hidden="true" />
              <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent">
                {PERSONAL_INFO.availability}
              </span>
            </motion.div>
          </div>

          {/* ── ROW 2: giant name + terminal ── */}
          <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 lg:gap-20">

            {/* NAME */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 min-w-0"
            >
              <h1
                className="hero-name font-black uppercase select-none tracking-tighter"
                aria-label={PERSONAL_INFO.name}
              >
                <span className="block text-white leading-[0.8]">
                  RAJ
                </span>
                <span
                  className="block text-outline-accent leading-[0.8] mt-2"
                >
                  SHAH
                </span>
              </h1>

              <div className="flex items-center gap-4 mt-8">
                <div className="h-[2px] bg-accent w-24 shadow-[0_0_15px_#00FF94]" />
                <div className="h-[1px] bg-white/10 flex-1" />
              </div>
            </motion.div>

            {/* TERMINAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-[480px] shrink-0"
            >
              <div className="glass-dark rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {/* Titlebar */}
                <div className="flex items-center gap-2 px-5 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/80" />
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <TerminalIcon className="w-3 h-3 text-white/30" />
                    <span className="font-mono text-[10px] text-white/40 tracking-[0.14em]">engineer.ts</span>
                  </div>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-[13px] leading-[1.8] text-white/80">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} className="flex gap-5">
                      <span className="text-white/20 w-4 shrink-0 text-right select-none">
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">
                        {"  ".repeat(line.indent)}
                        {line.tokens.map((tok, j) => (
                          <span key={j} className={tok.c}>{tok.t}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                  <div className="flex gap-5 mt-1">
                    <span className="text-white/20 w-4 shrink-0 text-right">{CODE_LINES.length + 1}</span>
                    <span className="cursor-blink inline-block w-[8px] h-[15px] bg-accent shadow-[0_0_8px_#00FF94] align-middle mt-[4px]" />
                  </div>
                </div>

                {/* Status bar */}
                <div className="bg-white/[0.02] px-5 py-2.5 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase">main*</span>
                  </div>
                  <span className="font-mono text-[9px] text-accent font-bold tracking-widest">LN 8, COL 24</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── ROW 3: bio + CTAs + stats ── */}
          <div className="pt-12 pb-16">
            <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">
              <div className="max-w-[540px]">
                <p className="text-[16px] text-white/60 leading-relaxed mb-8">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <BrutalistButton primary href="#contact">
                    <Mail className="w-4 h-4" />
                    Initialize Contact
                  </BrutalistButton>
                  <BrutalistButton href={PERSONAL_INFO.github}>
                    <Github className="w-4 h-4" />
                    Open Source
                  </BrutalistButton>
                </div>
              </div>

              {/* Stats */}
              <div className="lg:ml-auto grid grid-cols-2 sm:grid-cols-4 lg:flex gap-8 lg:gap-12">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex flex-col group">
                    <span className="font-black text-3xl text-white group-hover:text-accent transition-colors duration-300">
                      {s.value}
                    </span>
                    <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-white/30 mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#expertise"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent animate-bob" />
        </a>
      </section>

      <Marquee items={MARQUEE_ITEMS} />
    </>
  );
}
