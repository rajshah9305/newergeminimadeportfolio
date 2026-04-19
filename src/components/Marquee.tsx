"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export function Marquee({ items, reverse = false }: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden bg-dark border-y-2 border-primary py-4 select-none relative z-10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear" as const,
          }}
          className="flex gap-10 items-center px-5"
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-white font-black text-xl md:text-2xl uppercase tracking-[0.2em] font-mono">
                {item}
              </span>
              <span className="text-primary text-2xl" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
