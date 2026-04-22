"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educations } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll(".timeline-item").forEach((el) => {
        gsap.fromTo(el,
          { x: -20 },
          { x: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" } }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 relative border-t border-slate-700/50"
      style={{ background: "linear-gradient(to bottom, #060b14, #080e1c)" }}
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-xs headline-font mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white notch-font">
            Education & Credentials
          </h2>
          <p className="text-slate-400 mt-3 text-base headline-font max-w-xl">
            Academic foundation and professional training that shaped my data & ML expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {educations.map((item, index) => (
              <div key={index} className="timeline-item relative flex gap-8">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#080e1c] border-2 border-cyan-500/40 flex items-center justify-center text-xs font-bold text-cyan-400 notch-font">
                    {educations.length - index}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 flex-1 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base md:text-lg notch-font">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed headline-font">
                        {item.desc}
                      </p>
                      <div className="mt-3">
                        <span className="text-xs px-3 py-1 rounded-full badge-cyan headline-font">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <span className="text-cyan-400 font-semibold text-sm notch-font shrink-0 mt-1">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
