"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { BrutalistButton } from "./BrutalistButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function HeroSection() {
  const reduce = useReducedMotion();
  const [firstName, ...rest] = PERSONAL_INFO.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      aria-label="Introduction"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex flex-col justify-center py-20"
    >
      <motion.div
        className="max-w-3xl"
        variants={reduce ? undefined : container}
        initial="hidden"
        animate="show"
      >
        {/* Status */}
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
            className="block text-[clamp(4.5rem,15vw,9.5rem)] text-dark"
          >
            {firstName}
          </motion.span>
          <motion.span
            variants={reduce ? undefined : item}
            className="block text-[clamp(4.5rem,15vw,9.5rem)] text-outline"
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
          className="text-base text-slate-600 max-w-lg leading-[1.75] mb-10 font-normal"
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
    </section>
  );
}
