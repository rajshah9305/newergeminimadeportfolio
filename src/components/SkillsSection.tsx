"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Blocks } from "lucide-react";
import { SKILLS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

export function SkillsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 scroll-mt-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          title="Technical Arsenal"
          subtitle="Deep expertise across the modern full-stack and AI landscape."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILLS.map((group, idx) => (
          <motion.article
            key={idx}
            custom={idx}
            variants={reduce ? undefined : cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={reduce ? {} : { y: -4, boxShadow: "8px 8px 0px 0px rgba(208,94,53,1)" }}
            className="bg-white border-2 border-dark p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex flex-col transition-shadow duration-250"
          >
            <h3 className="font-mono text-[10px] font-bold text-primary mb-5 tracking-[0.2em] uppercase border-b border-slate-100 pb-3">
              {`// ${group.category}`}
            </h3>
            <ul className="flex flex-col gap-3 flex-1">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="text-[15px] font-semibold flex items-center gap-2.5 text-slate-800 group/item"
                >
                  <Blocks
                    className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-primary transition-colors shrink-0"
                    aria-hidden="true"
                  />
                  <span className="group-hover/item:translate-x-0.5 transition-transform duration-150 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
