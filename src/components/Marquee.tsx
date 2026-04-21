"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export function Marquee({ items, reverse = false }: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-secondary select-none border-y border-white/5">
      <div className="flex whitespace-nowrap py-5">
        <motion.div
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center"
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-mono font-bold text-[11px] tracking-[0.4em] uppercase text-white/40 px-10">
                {item}
              </span>
              <span className="text-accent/40 font-black text-[8px] animate-pulse" aria-hidden="true">/ /</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
