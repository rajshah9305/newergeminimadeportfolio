"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, MapPin, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";

/* ── Animation variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" as const } },
};

/* ── Syntax-highlighted code lines ── */
type Token = { t: string; c: string };
type CodeLine = { indent: number; tokens: Token[] };

const CODE_LINES: CodeLine[] = [
  {
    indent: 0,
    tokens: [
      { t: "const ", c: "text-violet-400" },
      { t: "engineer", c: "text-white" },
      { t: " = {", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "name", c: "text-sky-300" },
      { t: ": ", c: "text-slate-400" },
      { t: '"Raj Shah"', c: "text-emerald-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "role", c: "text-sky-300" },
      { t: ": ", c: "text-slate-400" },
      { t: '"AI & Full-Stack Engineer"', c: "text-emerald-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "location", c: "text-sky-300" },
      { t: ": ", c: "text-slate-400" },
      { t: '"Calgary, CA"', c: "text-emerald-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  { indent: 1, tokens: [{ t: "stack", c: "text-sky-300" }, { t: ": [", c: "text-slate-400" }] },
  {
    indent: 2,
    tokens: [
      { t: '"Next.js"', c: "text-emerald-400" },
      { t: ", ", c: "text-slate-400" },
      { t: '"Python"', c: "text-emerald-400" },
      { t: ", ", c: "text-slate-400" },
      { t: '"Rust"', c: "text-emerald-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: '"LangChain"', c: "text-emerald-400" },
      { t: ", ", c: "text-slate-400" },
      { t: '"PyTorch"', c: "text-emerald-400" },
      { t: ", ", c: "text-slate-400" },
      { t: '"Docker"', c: "text-emerald-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  { indent: 1, tokens: [{ t: "],", c: "text-slate-400" }] },
  {
    indent: 1,
    tokens: [
      { t: "openToWork", c: "text-sky-300" },
      { t: ": ", c: "text-slate-400" },
      { t: "true", c: "text-[#D05E35]" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  { indent: 0, tokens: [{ t: "};", c: "text-slate-400" }] },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { t: "// ", c: "text-slate-500" },
      { t: "2,900+ GitHub contributions · 6 production projects", c: "text-slate-500" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { t: "engineer", c: "text-white" },
      { t: ".deploy(", c: "text-slate-400" },
      { t: '"production"', c: "text-emerald-400" },
      { t: ");", c: "text-slate-400" },
    ],
  },
];

const STATS = [
  { value: "6+",   label: "Projects" },
  { value: "2.9K", label: "Commits" },
  { value: "5",    label: "AI Frameworks" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const [firstName, ...rest] = PERSONAL_INFO.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      aria-label="Introduction"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center py-16"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 xl:gap-16 items-center">

        {/* ════════════════════════════════
            LEFT — identity & CTAs
        ════════════════════════════════ */}
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
        >
          {/* Status pill */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="inline-flex items-center gap-2 mb-9 px-3 py-1.5 border border-slate-200 bg-white/70 backdrop-blur-sm"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.9)]"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] font-bold tracking-[0.24em] uppercase text-slate-500">
              Available for hire
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="font-black uppercase tracking-tighter leading-[0.86] mb-5">
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="block text-[clamp(4rem,11vw,8rem)] text-dark"
            >
              {firstName}
            </motion.span>
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="block text-[clamp(4rem,11vw,8rem)] text-outline"
            >
              {lastName}
            </motion.span>
          </h1>

          {/* Role */}
          <motion.h2
            variants={reduce ? undefined : fadeUp}
            className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-dark mb-5 uppercase flex items-center gap-2 flex-wrap"
          >
            {PERSONAL_INFO.role}
            <span className="text-primary font-mono font-black text-lg leading-none" aria-hidden="true">
              &gt;_
            </span>
          </motion.h2>

          {/* Location */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="flex items-center gap-1.5 mb-5 text-slate-400"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-widest uppercase">Calgary, Canada</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="text-[14.5px] text-slate-600 max-w-[420px] leading-[1.82] mb-9 font-normal"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <BrutalistButton primary href={`mailto:${PERSONAL_INFO.email}`}>
              <Mail className="w-4 h-4" aria-hidden="true" />
              Initialize Contact
            </BrutalistButton>
            <BrutalistButton href={PERSONAL_INFO.github}>
              <Github className="w-4 h-4" aria-hidden="true" />
              View Github
            </BrutalistButton>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-8 flex items-center gap-5 border-t border-slate-200 pt-6"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest uppercase text-slate-400 hover:text-primary transition-colors group"
            >
              <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              rajshah9305
            </a>
            <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
            <a
              href="https://www.rajai.org"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest uppercase text-slate-400 hover:text-primary transition-colors group"
            >
              <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              rajai.org
            </a>
          </motion.div>
        </motion.div>

        {/* ════════════════════════════════
            RIGHT — terminal panel
        ════════════════════════════════ */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" as const }}
          className="hidden lg:flex flex-col"
          aria-hidden="true"
        >
          {/* Terminal chrome */}
          <div className="border-2 border-dark bg-[#0D0D0D] shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] overflow-hidden">

            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#181818] border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-auto font-mono text-[10px] text-slate-500 tracking-[0.18em]">
                engineer.ts
              </span>
            </div>

            {/* Code area */}
            <div className="px-5 pt-5 pb-4 font-mono text-[12.5px] leading-[1.9] select-none overflow-x-auto">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 + i * 0.055, duration: 0.25 }}
                  className="flex gap-4 min-w-0"
                >
                  {/* Line number */}
                  <span className="text-slate-600 w-5 shrink-0 text-right text-[11px] leading-[1.9]">
                    {i + 1}
                  </span>
                  {/* Code */}
                  <span className="whitespace-pre">
                    {line.tokens.length === 0 ? (
                      "\u00A0"
                    ) : (
                      <>
                        {"  ".repeat(line.indent)}
                        {line.tokens.map((tok, j) => (
                          <span key={j} className={tok.c}>
                            {tok.t}
                          </span>
                        ))}
                      </>
                    )}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor line */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <span className="text-slate-600 w-5 shrink-0 text-right text-[11px] leading-[1.9]">
                  {CODE_LINES.length + 1}
                </span>
                <span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" as const }}
                    className="inline-block w-[7px] h-[13px] bg-[#D05E35] align-middle"
                  />
                </span>
              </motion.div>
            </div>

            {/* Status bar */}
            <div className="border-t border-white/[0.06] bg-[#181818] px-5 py-2.5 flex items-center justify-between gap-4">
              {/* Language indicator */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[10px] text-slate-500 tracking-[0.16em] uppercase">
                  TypeScript
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-5">
                {STATS.map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={reduce ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + i * 0.08, duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <span className="font-black text-white text-[13px] leading-none">{value}</span>
                    <span className="font-mono text-[9px] text-slate-500 tracking-[0.14em] uppercase mt-0.5">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating tag strip — replaces the removed accent bars */}
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            {["Next.js", "Python", "LangChain", "Rust", "Docker", "AWS"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.06, duration: 0.28 }}
                className="px-2.5 py-1 bg-white border border-slate-200 font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-slate-500 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
