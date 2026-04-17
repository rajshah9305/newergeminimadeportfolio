"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease",
      }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-12 h-12 bg-white text-dark border-2 border-dark flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[6px_6px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-px active:translate-x-px active:shadow-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
    >
      <ArrowUp
        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200"
        aria-hidden="true"
      />
    </button>
  );
}
