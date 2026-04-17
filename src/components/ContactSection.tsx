"use client";

import { Mail, Github, Linkedin, Zap } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";
import { useInView } from "@/hooks/useInView";

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="contact"
      className="bg-dark text-white py-28 md:py-36 relative overflow-hidden scroll-mt-20"
    >
      {/* Background accent */}
      <div
        className="absolute -right-16 -top-16 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
        style={{
          transform: inView ? "rotate(0deg) scale(1)" : "rotate(-15deg) scale(0.85)",
          transition: "transform 1s ease",
        }}
      >
        <Zap className="w-[360px] h-[360px] md:w-[480px] md:h-[480px]" />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
      >
        <h2
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
          className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9] hover:text-primary transition-colors duration-500"
        >
          Initiate
          <br />
          Protocol
        </h2>

        <p
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease 120ms, transform 0.65s ease 120ms",
          }}
          className="text-sm md:text-base text-slate-400 max-w-md mb-12 font-mono uppercase tracking-[0.15em] leading-relaxed"
        >
          Currently accepting new opportunities.{" "}
          <br className="hidden sm:block" />
          Let&apos;s build something scalable.
        </p>

        {/* Action row */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.65s ease 220ms, transform 0.65s ease 220ms",
          }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider border-2 border-transparent hover:bg-white hover:text-dark hover:border-dark shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(208,94,53,1)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            Email Me
          </a>

          <div className="flex gap-3">
            {[
              { href: PERSONAL_INFO.github, label: "GitHub Profile", Icon: Github },
              { href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white/10 text-white border-2 border-white/10 hover:bg-white hover:text-dark hover:border-dark hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(208,94,53,1)] active:translate-y-0.5 active:shadow-none transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark group"
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
