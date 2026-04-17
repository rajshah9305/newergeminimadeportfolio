"use client";

import { Mail, Github, Linkedin, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";

const SOCIAL_LINKS = [
  { href: PERSONAL_INFO.github, label: "GitHub Profile", Icon: Github },
  { href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile", Icon: Linkedin },
];

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const fadeUp = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="contact"
      className="bg-dark text-white py-28 md:py-36 relative overflow-hidden scroll-mt-20"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-[-120px] w-[500px] h-[500px] bg-primary opacity-20 blur-[120px]" />
      </div>

      {/* Decorative Zap icon */}
      <div
        className="absolute -right-16 -top-16 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          opacity: inView ? 0.07 : 0,
          transform: inView ? "rotate(0deg) scale(1)" : "rotate(-15deg) scale(0.85)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        <Zap className="w-[360px] h-[360px] md:w-[480px] md:h-[480px]" />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
      >
        <h2
          style={fadeUp(0)}
          className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9] hover:text-primary transition-colors duration-500"
        >
          Initiate
          <br />
          Protocol
        </h2>

        <p
          style={fadeUp(120)}
          className="text-sm md:text-base text-slate-400 max-w-md mb-12 font-mono uppercase tracking-[0.15em] leading-relaxed"
        >
          Currently accepting new opportunities.
          <br className="hidden sm:block" />
          Let&apos;s build something scalable.
        </p>

        <div
          style={fadeUp(240)}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-transparent hover:bg-white hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Email Me
          </a>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white/10 text-white border-2 border-white/10 hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
