"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export function Marquee({ items, reverse = false }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-dark select-none" style={{ borderTop: "3px solid #E8622A", borderBottom: "3px solid #111" }}>
      <div className="flex whitespace-nowrap py-3.5">
        <motion.div
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex items-center"
        >
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-mono font-black text-[13px] tracking-[0.3em] uppercase text-white px-6">
                {item}
              </span>
              <span className="text-primary font-black text-[10px]" aria-hidden="true">◆</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
