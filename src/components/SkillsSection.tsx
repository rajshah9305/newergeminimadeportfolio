"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SKILLS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-dark">
          {SKILLS.map((group, idx) => (
            <motion.article
              key={idx}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`flex flex-col p-8 bg-white hover:bg-dark group transition-colors duration-200 ${
                idx < SKILLS.length - 1 ? "border-b-2 sm:border-b-0 sm:border-r-2 lg:border-r-2 border-dark" : ""
              }`}
            >
              <h3 className="font-mono text-[10px] font-bold text-primary mb-6 tracking-[0.22em] uppercase">
                {`// ${group.category}`}
              </h3>
              <ul className="flex flex-col gap-3 flex-1">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-primary shrink-0" aria-hidden="true" />
                    <span className="text-[14px] font-semibold text-dark group-hover:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
