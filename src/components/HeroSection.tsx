"use client";

import { Github, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";
import { Marquee } from "./Marquee";
import { GLSLHills } from "./GLSLHills";

const CODE_LINES = [
  { indent: 0, tokens: [{ t: "class",       c: "text-primary" }, { t: " Engineer", c: "text-white"   }, { t: " {",  c: "text-white/40" }] },
  { indent: 1, tokens: [{ t: "constructor", c: "text-primary" }, { t: "() {",      c: "text-white/40"  }] },
  { indent: 2, tokens: [{ t: "this",        c: "text-primary"    }, { t: ".name ",    c: "text-white"  }, { t: "=",   c: "text-primary" }, { t: ' "Raj Shah"', c: "text-white/80" }, { t: ";", c: "text-white/40" }] },
  { indent: 2, tokens: [{ t: "this",        c: "text-primary"    }, { t: ".focus ",   c: "text-white"  }, { t: "=",   c: "text-primary" }, { t: " [",          c: "text-white/40" }, { t: '"AI"',     c: "text-white/80" }, { t: ", ", c: "text-white/40" }, { t: '"Systems"', c: "text-white/80" }, { t: "];", c: "text-white/40" }] },
  { indent: 1, tokens: [{ t: "}",           c: "text-white/40"  }] },
  { indent: 0, tokens: [] },
  { indent: 1, tokens: [{ t: "async",       c: "text-primary" }, { t: " deploy",   c: "text-white"   }, { t: "(",   c: "text-white/40"  }, { t: "app",         c: "text-orange-300" }, { t: ") {", c: "text-white/40" }] },
  { indent: 2, tokens: [{ t: "await",       c: "text-primary" }, { t: " app",      c: "text-white"   }, { t: ".",   c: "text-white/40"  }, { t: "scale",       c: "text-primary" }, { t: "({ edge: ", c: "text-white/40" }, { t: "true", c: "text-primary" }, { t: " });", c: "text-white/40" }] },
];

const STATS = [
  { value: "8+",    label: "Yrs" },
  { value: "40+",   label: "Systems" },
  { value: "10K+",  label: "AI/Day" },
  { value: "99.9%", label: "Uptime" },
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
        className="relative w-full overflow-hidden bg-white"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >

        {/* ── GLSL hills — fills section, clipped ── */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <GLSLHills speed={0.4} cameraZ={115} planeSize={256} contained />
        </div>

        {/* ── Vignette: transparent sides, white center band ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 12%, rgba(255,255,255,0.92) 26%, white 38%, white 62%, rgba(255,255,255,0.92) 74%, rgba(255,255,255,0.15) 88%, transparent 100%)",
          }}
        />
        {/* top + bottom white fades */}
        <div className="absolute inset-x-0 top-0 h-20 z-[2] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }}
          aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 z-[2] pointer-events-none"
          style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }}
          aria-hidden="true" />

        {/* ══════════════════════════════════════════
            LAYOUT: 3-row stack
            Row 1 — top bar (role tag + status)
            Row 2 — name + terminal side by side
            Row 3 — bio + CTAs + stats
        ══════════════════════════════════════════ */}
        <div className="relative z-10 w-full h-full flex flex-col"
          style={{ minHeight: "calc(100vh - 72px)" }}>

          {/* ── ROW 1: top meta bar ── */}
          <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-10 pb-0">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-primary" aria-hidden="true" />
              <span className="font-mono text-[10px] font-bold tracking-[0.28em] uppercase text-dark/40">
                AI &amp; Full-Stack Engineer
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-dark/40">
                Available
              </span>
            </div>
          </div>

          {/* ── ROW 2: giant name + terminal ── */}
          <div className="flex-1 flex flex-col lg:flex-row items-end lg:items-center
                          px-6 sm:px-10 lg:px-16 pt-6 pb-0 gap-8 lg:gap-0">

            {/* NAME — full-bleed typographic anchor */}
            <div className="flex-1 min-w-0 flex flex-col justify-end lg:justify-center">
              <h1
                className="hero-name font-black uppercase select-none"
                aria-label={PERSONAL_INFO.name}
              >
                {/* RAJ — solid fill */}
                <span className="block text-dark leading-[0.82]">
                  RAJ
                </span>
                {/* SHAH — outline, offset right for asymmetry */}
                <span
                  className="block text-outline leading-[0.82]"
                  style={{ paddingLeft: "clamp(1rem, 4vw, 5rem)" }}
                >
                  SHAH
                </span>
              </h1>

              {/* Orange rule under name */}
              <div className="flex items-center gap-3 mt-5">
                <div className="h-[3px] bg-primary" style={{ width: "clamp(3rem, 8vw, 7rem)" }} />
                <div className="h-[3px] bg-dark/10 flex-1" />
              </div>
            </div>

            {/* TERMINAL — floats right, slightly elevated */}
            <div
              className="w-full lg:w-[440px] xl:w-[480px] shrink-0 lg:ml-12 xl:ml-20
                         lg:-translate-y-6"
              aria-hidden="true"
            >
              {/* Corner accent */}
              <div className="flex justify-end mb-2 pr-1">
                <span className="font-mono text-[9px] font-bold tracking-[0.24em] uppercase text-primary/60">
                  engineer.ts
                </span>
              </div>

              <div className="border-2 border-dark bg-[#0C0C0C]"
                style={{ boxShadow: "6px 6px 0 0 #FF4D00, 12px 12px 0 0 rgba(255,77,0,0.15)" }}>

                {/* Titlebar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#161616] border-b border-white/[0.06]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <div className="ml-auto flex items-center gap-3">
                    <span className="font-mono text-[10px] text-white/30 tracking-widest">TS</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span className="font-mono text-[10px] text-white/40 tracking-[0.14em]">engineer.ts</span>
                  </div>
                </div>

                {/* Code body */}
                <div className="px-4 pt-4 pb-3 font-mono text-[12.5px] leading-[1.85] select-none">
                  {CODE_LINES.map((line, i) => (
                    <div key={i} className="flex gap-3.5">
                      <span className="text-white/20 w-4 shrink-0 text-right text-[11px] leading-[1.85] select-none">
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">
                        {line.tokens.length === 0 ? "\u00A0" : (
                          <>
                            {"  ".repeat(line.indent)}
                            {line.tokens.map((tok, j) => (
                              <span key={j} className={tok.c}>{tok.t}</span>
                            ))}
                          </>
                        )}
                      </span>
                    </div>
                  ))}
                  {/* cursor */}
                  <div className="flex gap-3.5">
                    <span className="text-white/20 w-4 shrink-0 text-right text-[11px] leading-[1.85]">
                      {CODE_LINES.length + 1}
                    </span>
                    <span className="cursor-blink inline-block w-[6px] h-[13px] bg-primary align-middle mt-[5px]" />
                  </div>
                </div>

                {/* Status bar */}
                <div className="border-t border-white/[0.06] bg-[#161616] px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-mono text-[10px] text-white/40 tracking-[0.16em] uppercase">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-white/20">UTF-8</span>
                    <span className="font-mono text-[10px] text-primary tracking-[0.12em]">● LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 3: bio + CTAs + stats ── */}
          <div className="px-6 sm:px-10 lg:px-16 pt-8 pb-10">
            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">

              {/* Bio + CTAs */}
              <div className="flex flex-col gap-6 max-w-[480px]">
                <p className="text-[14px] sm:text-[15px] text-dark/55 leading-[1.85]">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="flex flex-wrap gap-3">
                  <BrutalistButton primary href="#contact">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Initialize Contact
                  </BrutalistButton>
                  <BrutalistButton href={PERSONAL_INFO.github}>
                    <Github className="w-4 h-4" aria-hidden="true" />
                    View GitHub
                  </BrutalistButton>
                </div>
              </div>

              {/* Stats — pushed to the right on desktop */}
              <div className="lg:ml-auto flex items-end gap-0">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center px-4 py-3 sm:px-6 sm:py-4 ${
                      i < STATS.length - 1 ? "border-r-2 border-dark/10" : ""
                    }`}
                  >
                    <span className="font-black text-[1.5rem] sm:text-[2rem] leading-none tracking-tighter text-dark tabular-nums">
                      {s.value}
                    </span>
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-dark/35 mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* ── Scroll cue — bottom center ── */}
        <a
          href="#expertise"
          aria-label="Scroll to expertise"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group focus:outline-none"
        >
          <span className="font-mono text-[8px] font-bold tracking-[0.3em] uppercase text-dark/25 group-hover:text-primary transition-colors">
            scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-dark/20 to-transparent animate-bob" />
        </a>

      </section>

      {/* ── Marquee ── */}
      <Marquee items={MARQUEE_ITEMS} />
    </>
  );
}
