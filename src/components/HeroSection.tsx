"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { GlitchText } from "./GlitchText";
import { BrutalistButton } from "./BrutalistButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const CODE_LINES = [
  {
    indent: 0,
    tokens: [
      { t: "import", c: "text-purple-400" },
      { t: " { ", c: "text-slate-400" },
      { t: "System", c: "text-blue-400" },
      { t: " } ", c: "text-slate-400" },
      { t: "from", c: "text-purple-400" },
      { t: " \"@raj/core\"", c: "text-emerald-400" },
      { t: ";", c: "text-slate-400" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { t: "const", c: "text-purple-400" },
      { t: " app ", c: "text-blue-400" },
      { t: "=", c: "text-slate-400" },
      { t: " new ", c: "text-purple-400" },
      { t: "System", c: "text-blue-400" },
      { t: "(", c: "text-slate-400" },
      { t: "config", c: "text-orange-400" },
      { t: ");", c: "text-slate-400" },
    ],
  },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { t: "async", c: "text-purple-400" },
      { t: " function ", c: "text-purple-400" },
      { t: "deploy", c: "text-blue-400" },
      { t: "() {", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "await", c: "text-purple-400" },
      { t: " app.initialize", c: "text-blue-400" },
      { t: "(", c: "text-slate-400" },
      { t: "{", c: "text-slate-400" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "ai", c: "text-blue-400" },
      { t: ":", c: "text-slate-400" },
      { t: " true", c: "text-orange-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "redundancy", c: "text-blue-400" },
      { t: ":", c: "text-slate-400" },
      { t: " \"multi-region\"", c: "text-emerald-400" },
      { t: ",", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "}", c: "text-slate-400" },
      { t: ");", c: "text-slate-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "return", c: "text-purple-400" },
      { t: " app.scale", c: "text-blue-400" },
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

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-center py-24 md:py-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 xl:gap-16 items-center">

        {/* LEFT — identity & CTAs */}
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
        >
          {/* Header Row */}
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-9">
             <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-primary">
                  PORTFOLIO · {PERSONAL_INFO.version}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
                  ENGINEER · BUILDER · OPERATOR
                </span>
             </div>
             <div className="h-px flex-1 bg-slate-200 mx-6 hidden sm:block" />
             <div className="inline-flex items-center gap-2 px-3.5 py-2 border border-slate-200 bg-white/70 backdrop-blur-sm">
                <span
                  className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.9)]"
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-slate-500">
                  {PERSONAL_INFO.availability.split(" / ")[0]}
                </span>
              </div>
          </motion.div>

          {/* Name */}
          <h1 className="font-black uppercase tracking-tighter leading-[0.9] mb-6">
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="block text-[clamp(4.5rem,11vw,8.5rem)] text-dark"
            >
              <GlitchText text={firstName} />
            </motion.span>
            <motion.span
              variants={reduce ? undefined : fadeUp}
              className="block text-[clamp(4.5rem,11vw,8.5rem)] text-outline"
            >
              <GlitchText text={lastName} />
            </motion.span>
          </h1>

          {/* Role */}
          <motion.h2
            variants={reduce ? undefined : fadeUp}
            className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-dark mb-5 uppercase flex items-center gap-2.5 flex-wrap"
          >
            {PERSONAL_INFO.role}
            <span className="text-primary font-mono font-black text-xl leading-none" aria-hidden="true">
              / EST. 2017
            </span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="text-[15.5px] text-slate-600 max-w-[440px] leading-[1.85] mb-9 font-normal"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <BrutalistButton primary href="#contact">
              <Mail className="w-4 h-4" aria-hidden="true" />
              Initialize Contact
            </BrutalistButton>
            <BrutalistButton href={PERSONAL_INFO.github}>
              <Github className="w-4 h-4" aria-hidden="true" />
              View Github
            </BrutalistButton>
          </motion.div>
        </motion.div>

        {/* RIGHT — terminal panel */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={reduce ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" as const }}
          className="flex flex-col relative terminal-flicker"
          aria-hidden="true"
        >
          {/* Terminal chrome */}
          <div className="border-2 border-dark bg-[#0D0D0D] shadow-[6px_6px_0px_0px_rgba(17,17,17,1),0_0_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden relative">

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />

            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#181818] border-b border-white/[0.06] relative z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-auto font-mono text-[11px] text-slate-400 tracking-[0.18em]">
                engineer.ts
              </span>
            </div>

            {/* Code area */}
            <div className="px-5 pt-5 pb-4 font-mono text-[13px] leading-[1.9] select-none overflow-x-auto relative z-20">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.12, duration: 0.3 }}
                  className="flex gap-4 min-w-0"
                >
                  <span className="text-slate-600 w-5 shrink-0 text-right text-[12px] leading-[1.9]">
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {line.tokens.length === 0 ? (
                      "\u00A0"
                    ) : (
                      <>
                        {"  ".repeat(line.indent)}
                        {line.tokens.map((tok, j) => (
                          <motion.span
                            key={j}
                            className={tok.c}
                            initial={reduce ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 + i * 0.12 + j * 0.05 }}
                          >
                            {tok.t}
                          </motion.span>
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
                transition={{ delay: 1.8 }}
              >
                <span className="text-slate-600 w-5 shrink-0 text-right text-[12px] leading-[1.9]">
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
            <div className="border-t border-white/[0.06] bg-[#181818] px-5 py-2.5 flex items-center justify-between gap-4 relative z-20">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[11px] text-slate-400 tracking-[0.16em] uppercase">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Metrics Row */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-slate-200"
      >
        {PERSONAL_INFO.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-black text-4xl md:text-5xl text-dark tracking-tighter mb-1">
              {stat.value}
            </span>
            <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
