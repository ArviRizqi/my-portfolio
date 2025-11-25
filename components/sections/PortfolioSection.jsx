"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);



export default function PortfolioSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(".project-card"), {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="pt-20 pb-[420px] bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#eef2f6] border-t border-indigo-900/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-indigo-900 notch-font">Portfolio</h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg headline-font">
            A selection of dashboards, landing pages, and digital product work.
          </p>
        </div>

        {/* === NON-SYMMETRIC FLEX GALLERY === */}
        <div className="mt-10 flex flex-row gap-2 flex-wrap items-stretch content-start">

          {projects.map((p, index) => (
  <Card
    key={`${p.title}-${index}`} // <-- key unik
    className={`project-card relative overflow-hidden bg-black p-2 ${p.class}`}
  >

    <img
      src={p.img}
      alt={p.title}
      className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
    />

    {/* HOVER OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end p-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-300">
          {p.tag}
        </p>
        <a href={p.url} target="_blank" className="text-white font-semibold text-base mt-1">{p.title}</a>
      </div>
    </div>
  </Card>
))}


        </div>
      </div>
    </section>
  );
}
