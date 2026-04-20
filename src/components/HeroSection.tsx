"use client";

import { motion, useScroll, useTransform, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";
import { GlitchText } from "./GlitchText";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CODE_LINES = [
  {
    indent: 0,
    tokens: [
      { t: "async ", c: "text-blue-400" },
      { t: "function ", c: "text-blue-400" },
      { t: "initialize", c: "text-yellow-400" },
      { t: "() {", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "const ", c: "text-purple-400" },
      { t: "system ", c: "text-slate-200" },
      { t: "= ", c: "text-slate-400" },
      { t: "await ", c: "text-purple-400" },
      { t: "Core", c: "text-emerald-400" },
      { t: ".", c: "text-slate-400" },
      { t: "boot", c: "text-yellow-400" },
      { t: "();", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "return ", c: "text-purple-400" },
      { t: "system", c: "text-slate-200" },
      { t: ".", c: "text-slate-400" },
      { t: "scale", c: "text-yellow-400" },
      { t: "(", c: "text-slate-400" },
      { t: "{", c: "text-slate-400" },
      { t: " edge", c: "text-emerald-400" },
      { t: ":", c: "text-slate-400" },
      { t: " true ", c: "text-orange-400" },
      { t: "}", c: "text-slate-400" },
      { t: ");", c: "text-slate-400" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { t: "}", c: "text-slate-400" },
    ],
  },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const [firstName, ...rest] = PERSONAL_INFO.name.split(" ");
  const lastName = rest.join(" ");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      aria-label="Introduction"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-center py-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 xl:gap-20 items-center">

        {/* LEFT — identity & CTAs */}
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
        >
          {/* Header Row */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
             <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-primary">
                  PORTFOLIO · {PERSONAL_INFO.version}
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">
                  {PERSONAL_INFO.role.toUpperCase()}
                </span>
             </div>
             <div className="h-px flex-1 bg-slate-100 hidden sm:block" />
             <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-100 bg-white/50 backdrop-blur-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500">
                  {PERSONAL_INFO.availability.split(" / ")[0]}
                </span>
              </div>
          </motion.div>

          {/* Name */}
          <h1 className="font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="block text-[clamp(4rem,10vw,7.5rem)] text-dark"
            >
              <GlitchText text={firstName} />
            </motion.span>
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="block text-[clamp(4rem,10vw,7.5rem)] text-outline"
            >
              <GlitchText text={lastName} />
            </motion.span>
          </h1>

          {/* Bio */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="text-base text-slate-600 max-w-md leading-relaxed mb-10 font-normal"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="flex flex-wrap gap-4"
          >
            <BrutalistButton primary href="#contact" className="!shadow-none border border-dark !bg-dark !text-white hover:!bg-primary hover:!border-primary">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Get in Touch
            </BrutalistButton>
            <BrutalistButton href={PERSONAL_INFO.github} className="!shadow-none border border-dark/10 hover:border-dark">
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
            </BrutalistButton>
          </motion.div>
        </motion.div>

        {/* RIGHT — terminal panel */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col relative terminal-flicker"
          aria-hidden="true"
        >
          {/* Terminal chrome */}
          <div className="border border-dark/10 bg-[#0A0A0A] shadow-2xl rounded-xl overflow-hidden relative">

            {/* Scanline Effect - even subtler */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_2px]" />

            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#111] border-b border-white/5 relative z-20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="ml-auto font-mono text-[10px] text-slate-500 tracking-[0.1em] uppercase">
                main.ts
              </span>
            </div>

            {/* Code area */}
            <div className="p-6 font-mono text-[13px] leading-[2] select-none overflow-x-auto relative z-20">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex gap-6"
                >
                  <span className="text-slate-700 w-4 shrink-0 text-right">
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {"  ".repeat(line.indent)}
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.c}>
                        {tok.t}
                      </span>
                    ))}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor line */}
              <div className="flex gap-6 mt-1">
                <span className="text-slate-700 w-4 shrink-0 text-right">
                  {CODE_LINES.length + 1}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" as const }}
                  className="inline-block w-[6px] h-[14px] bg-primary align-middle"
                />
              </div>
            </div>

            {/* Status bar */}
            <div className="border-t border-white/5 bg-[#111] px-6 py-2.5 flex items-center justify-between relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase">
                  Production Mode
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Metrics Row */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 pt-12 border-t border-slate-100"
      >
        {PERSONAL_INFO.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-black text-3xl md:text-4xl text-dark tracking-tighter mb-1">
              {stat.value}
            </span>
            <span className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-slate-400">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
