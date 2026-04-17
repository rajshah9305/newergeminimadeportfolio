"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";

/* ─── Left content animations ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

/* ─── Code panel lines ─── */
const CODE_LINES = [
  { indent: 0, tokens: [{ t: "const ", c: "text-primary" }, { t: "engineer", c: "text-white" }, { t: " = {", c: "text-slate-400" }] },
  { indent: 1, tokens: [{ t: "name", c: "text-sky-400" }, { t: ": ", c: "text-slate-400" }, { t: '"Raj Shah"', c: "text-green-400" }, { t: ",", c: "text-slate-400" }] },
  { indent: 1, tokens: [{ t: "role", c: "text-sky-400" }, { t: ": ", c: "text-slate-400" }, { t: '"AI & Full-Stack"', c: "text-green-400" }, { t: ",", c: "text-slate-400" }] },
  { indent: 1, tokens: [{ t: "stack", c: "text-sky-400" }, { t: ": [", c: "text-slate-400" }] },
  { indent: 2, tokens: [{ t: '"Next.js"', c: "text-green-400" }, { t: ", ", c: "text-slate-400" }, { t: '"Python"', c: "text-green-400" }, { t: ",", c: "text-slate-400" }] },
  { indent: 2, tokens: [{ t: '"LangChain"', c: "text-green-400" }, { t: ", ", c: "text-slate-400" }, { t: '"Rust"', c: "text-green-400" }, { t: ",", c: "text-slate-400" }] },
  { indent: 1, tokens: [{ t: "],", c: "text-slate-400" }] },
  { indent: 1, tokens: [{ t: "available", c: "text-sky-400" }, { t: ": ", c: "text-slate-400" }, { t: "true", c: "text-primary" }, { t: ",", c: "text-slate-400" }] },
  { indent: 0, tokens: [{ t: "};", c: "text-slate-400" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: "// ", c: "text-slate-500" }, { t: "2,900+ contributions this year", c: "text-slate-500 italic" }] },
  { indent: 0, tokens: [{ t: "engineer", c: "text-white" }, { t: ".build(", c: "text-slate-400" }, { t: '"scalable"', c: "text-green-400" }, { t: ");", c: "text-slate-400" }] },
];

const STATS = [
  { value: "6+", label: "Projects" },
  { value: "2.9K", label: "Contributions" },
  { value: "5+", label: "AI Frameworks" },
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
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

        {/* ── LEFT: content ── */}
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div variants={reduce ? undefined : item} className="flex items-center gap-2.5 mb-10">
            <span
              className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.8)]"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-slate-400">
              Available for hire
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="font-black uppercase tracking-tighter leading-[0.88] mb-5">
            <motion.span
              variants={reduce ? undefined : item}
              className="block text-[clamp(4.5rem,12vw,8.5rem)] text-dark"
            >
              {firstName}
            </motion.span>
            <motion.span
              variants={reduce ? undefined : item}
              className="block text-[clamp(4.5rem,12vw,8.5rem)] text-outline"
            >
              {lastName}
            </motion.span>
          </h1>

          {/* Role */}
          <motion.h2
            variants={reduce ? undefined : item}
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-dark mb-5 uppercase flex items-center gap-2.5 flex-wrap"
          >
            {PERSONAL_INFO.role}
            <span className="text-primary font-mono font-black text-xl leading-none" aria-hidden="true">
              &gt;_
            </span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={reduce ? undefined : item}
            className="text-[15px] text-slate-600 max-w-md leading-[1.8] mb-10 font-normal"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : item}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
          >
            <BrutalistButton primary href={`mailto:${PERSONAL_INFO.email}`} className="w-full sm:w-auto">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Initialize Contact
            </BrutalistButton>
            <BrutalistButton href={PERSONAL_INFO.github} className="w-full sm:w-auto">
              <Github className="w-4 h-4" aria-hidden="true" />
              View Github
            </BrutalistButton>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: terminal / code render ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          className="hidden lg:block"
          aria-hidden="true"
        >
          {/* Terminal window */}
          <div className="relative border-2 border-dark shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] bg-[#0E0E0E] overflow-hidden">

            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#161616]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-[11px] text-slate-500 tracking-widest">
                ~/portfolio/engineer.ts
              </span>
            </div>

            {/* Code body */}
            <div className="px-5 py-5 font-mono text-[13px] leading-[1.85] select-none">
              {/* Line numbers + code */}
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
                  className="flex gap-4"
                >
                  <span className="text-slate-600 w-5 shrink-0 text-right select-none">
                    {i + 1}
                  </span>
                  <span>
                    {line.tokens.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      <>
                        {line.indent > 0 && (
                          <span className="text-transparent select-none">
                            {"  ".repeat(line.indent)}
                          </span>
                        )}
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

              {/* Blinking cursor */}
              <motion.div
                className="flex gap-4 mt-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <span className="text-slate-600 w-5 shrink-0 text-right">{CODE_LINES.length + 1}</span>
                <span className="text-white">
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity, repeatType: "mirror" as const }}
                    className="inline-block w-2 h-[1.1em] bg-primary align-middle"
                  />
                </span>
              </motion.div>
            </div>

            {/* Stats bar */}
            <div className="border-t border-white/8 bg-[#161616] px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                  TypeScript
                </span>
              </div>
              <div className="flex items-center gap-6">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-black text-white text-sm leading-none">{value}</div>
                    <div className="font-mono text-[9px] text-slate-500 tracking-widest uppercase mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative accent lines */}
          <div className="mt-4 flex gap-2">
            <div className="h-1 bg-primary flex-1" />
            <div className="h-1 bg-dark/20 flex-[3]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
