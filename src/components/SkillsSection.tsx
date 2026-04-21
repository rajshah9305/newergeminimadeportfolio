"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/config/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Code2, Database, Globe, Cpu } from "lucide-react";

const ICONS = [Globe, Code2, Database, Cpu];

export function SkillsSection() {
  return (
    <section id="expertise" className="w-full bg-primary py-32 md:py-48 scroll-mt-[72px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="A comprehensive toolkit for building high-performance digital ecosystems and intelligent agents."
          index="01 // EXPERTISE"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6">
          {SKILLS.map((group, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isLarge = idx === 0 || idx === 3;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative p-8 bg-secondary rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-500 ${
                  isLarge ? "md:col-span-2" : "md:col-span-2 lg:col-span-1"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                      Category 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                    {group.category}
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-[12px] font-medium text-white/60 group-hover:text-white group-hover:border-white/10 transition-all duration-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
