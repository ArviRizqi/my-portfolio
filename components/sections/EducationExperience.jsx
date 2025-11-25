"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educations } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(".timeline-card", {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 bg-gradient-to-t from-[#f8fafc] via-[#f1f5f9] to-[#eef2f6] border-t border-indigo-900/20"
      >



      {/* bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19] */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-4xl font-bold text-indigo-900 notch-font">
          Education & Experience Roadmap
        </h2>
        <p className="text-slate-600 mt-3 text-base md:text-lg headline-font">
          Perjalanan profesional yang membentuk kompetensi saya.
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative max-w-5xl mx-auto mt-20">

        {/* LOOP TIMELINE */}
        {educations.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative min-h-[200px]">

              {/* LINE */}
              <div className="absolute left-1/2 top-0 h-full w-[3px] bg-indigo-300/30 -translate-x-1/2" />

              {/* CARD */}
              <Card
                className={`
                  timeline-card
                  gap-1
                  absolute 
                  w-[60%] md:w-[40%]
                  p-6 rounded-2xl shadow-lg 
                  bg-white border border-black/5
                  ${isLeft ? "left-15 top-10" : "right-15 -top-[25px]"}
                `}
              >
                <p className="text-indigo-600 font-semibold">{item.year}</p>
                <h3 className="text-slate-800 font-bold text-lg mt-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </Card>

              {/* TIMELINE NODE */}
              <div
                className={`
                  absolute left-1/2 w-4 h-4 rounded-full 
                  bg-white border-4 border-indigo-400 shadow
                  -translate-x-1/2
                  ${isLeft ? "top-[120px]" : "top-[60px]"}
                `}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
