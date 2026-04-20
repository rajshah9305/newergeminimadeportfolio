"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SKILLS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1] as any as any,
    },
  },
};

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="expertise" className="w-full border-b-2 border-dark scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="Deep expertise across the modern full-stack and AI landscape."
          index="// 01 — EXPERTISE"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-dark overflow-hidden"
          variants={containerVariants}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((group, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className={`flex flex-col p-8 bg-white hover:bg-dark group transition-colors duration-300 ${
                idx < SKILLS.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2 border-dark" : ""
              } ${idx % 2 === 0 ? "sm:border-r-2 lg:border-r-2" : "sm:border-r-0 lg:border-r-2"} ${idx === 1 ? "lg:border-r-2" : ""} ${idx === 2 ? "sm:border-b-0" : ""}`}
            >
              <h3 className="font-mono text-[10px] font-bold text-primary mb-6 tracking-[0.22em] uppercase">
                {`// ${group.category}`}
              </h3>
              <ul className="flex flex-col gap-3.5 flex-1">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary shrink-0 rotate-45 group-hover:rotate-0 transition-transform duration-300" aria-hidden="true" />
                    <span className="text-[14px] font-bold text-dark group-hover:text-white transition-colors duration-300 tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
