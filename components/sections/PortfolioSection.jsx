"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLinkIcon } from "lucide-react";
import { otherProjects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function OtherProjects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll(".other-card").forEach((card) => {
        gsap.fromTo(card,
          { y: 20 },
          { y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="other-projects"
      ref={sectionRef}
      className="pt-18 pb-28 relative"
      style={{ background: "linear-gradient(to bottom, #060b14, #060b14)" }}
    >
      <hr className="section-divider"/>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-slate-500 font-semibold tracking-widest uppercase text-xs headline-font mb-2">
            Supporting Skills
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white notch-font">
            Frontend & Design Work
          </h2>
          <p className="text-slate-500 mt-2 text-sm headline-font max-w-lg">
            Frontend and design projects that demonstrate my ability to build the full product — not just the model.
          </p>
        </div>

        {/* Compact card grid */}
        <div className="flex flex-wrap gap-3">
          {otherProjects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`other-card relative overflow-hidden rounded-xl group cursor-pointer ${p.class}`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 headline-font">
                    {p.tag}
                  </p>
                  <p className="text-white font-semibold text-sm mt-0.5 flex items-center gap-1 notch-font">
                    {p.title}
                    <ExternalLinkIcon size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
