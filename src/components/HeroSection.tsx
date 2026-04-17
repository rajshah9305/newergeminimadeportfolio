"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HeroSection() {
  const reduce = useReducedMotion();
  const [firstName, ...rest] = PERSONAL_INFO.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      aria-label="Introduction"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-center py-16"
    >
      <motion.div
        className="max-w-4xl"
        variants={reduce ? undefined : container}
        initial="hidden"
        animate="show"
      >
        {/* Status badge */}
        <motion.div variants={reduce ? undefined : fadeUp} className="flex items-center gap-3 mb-8">
          <div
            className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.7)]"
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
            Available for hire
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="font-black uppercase tracking-tighter leading-[0.88] mb-6">
          <motion.span
            variants={reduce ? undefined : fadeUp}
            className="block text-[clamp(4rem,14vw,9rem)] text-dark"
          >
            {firstName}
          </motion.span>
          <motion.span
            variants={reduce ? undefined : fadeUp}
            className="block text-[clamp(4rem,14vw,9rem)] text-outline"
          >
            {lastName}
          </motion.span>
        </h1>

        {/* Role */}
        <motion.h2
          variants={reduce ? undefined : fadeUp}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-dark mb-6 uppercase flex items-center gap-3 flex-wrap"
        >
          {PERSONAL_INFO.role}
          <span className="text-primary font-mono font-black text-2xl md:text-3xl leading-none" aria-hidden="true">
            &gt;_
          </span>
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={reduce ? undefined : fadeUp}
          className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mb-10 font-medium"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
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
    </section>
  );
}
