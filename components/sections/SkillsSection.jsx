"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BotIcon,
  BrainCircuitIcon,
  BarChart2Icon,
  RocketIcon,
  ZapIcon,
} from "lucide-react";
import { skillGroups } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  bot:    <BotIcon size={18} className="text-cyan-400" />,
  brain:  <BrainCircuitIcon size={18} className="text-violet-400" />,
  chart:  <BarChart2Icon size={18} className="text-emerald-400" />,
  rocket: <RocketIcon size={18} className="text-orange-400" />,
  zap:    <ZapIcon size={18} className="text-yellow-400" />,
};

const accentMap = {
  bot:    "border-cyan-500/20 hover:border-cyan-500/40",
  brain:  "border-violet-500/20 hover:border-violet-500/40",
  chart:  "border-emerald-500/20 hover:border-emerald-500/40",
  rocket: "border-orange-500/20 hover:border-orange-500/40",
  zap:    "border-yellow-500/20 hover:border-yellow-500/40",
};

const pillAccentMap = {
  bot:    "hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-950/40",
  brain:  "hover:text-violet-400 hover:border-violet-400/40 hover:bg-violet-950/40",
  chart:  "hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-950/40",
  rocket: "hover:text-orange-400 hover:border-orange-400/40 hover:bg-orange-950/40",
  zap:    "hover:text-yellow-400 hover:border-yellow-400/40 hover:bg-yellow-950/40",
};

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate y-position — never set opacity:0 so cards always render
      gsap.fromTo(".skill-group-card",
        { y: 20 },
        {
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 relative"
      style={{ background: "linear-gradient(to bottom, #060b14, #080e1c, #060b14)" }}
    >
      <hr className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-xs headline-font mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white notch-font">
            Skills & Tools
          </h2>
          <p className="text-slate-400 mt-3 text-base headline-font max-w-xl">
            My toolkit for building data products — from raw data pipelines to deployed applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gIdx) => (
            <div
              key={group.category}
              className={`skill-group-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 border bg-white/[0.03] backdrop-blur-sm ${accentMap[group.icon] ?? "border-white/8"}`}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  {iconMap[group.icon]}
                </div>
                <div>
                  <p className="text-white font-bold text-sm notch-font">{group.category}</p>
                  {gIdx === skillGroups.length - 1 && (
                    <p className="text-[10px] text-slate-500 headline-font mt-0.5">
                      Enables full-stack data products
                    </p>
                  )}
                </div>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-slate-400 text-xs px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] font-medium transition-all duration-200 cursor-default hover:-translate-y-px ${pillAccentMap[group.icon] ?? ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 text-xs mt-10 headline-font">
          ⚡ Frontend skills are a differentiator — I can build the UI that makes the model accessible.
        </p>
      </div>
    </section>
  );
}
