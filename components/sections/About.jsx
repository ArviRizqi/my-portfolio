"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownloadIcon, LinkedinIcon } from "lucide-react";
import RotatingText from "@/lib/animations/RotatingText";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "3", label: "ML Projects Built", icon: "🤖" },
  { value: "2", label: "Live Deployments",   icon: "🚀" },
  { value: "~92%", label: "CNN+ViT Accuracy", icon: "🎯" },
  { value: "2024",  label: "Fresh Graduate",   icon: "🎓" },
];

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-content",
        { y: 40 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(".about-image",
        { x: 40 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 85%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(".metric-card",
        { y: 15 },
        { y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".metric-strip", start: "top 90%", toggleActions: "play none none none" } }
      );
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-28 relative"
      style={{ background: "linear-gradient(to bottom, #060b14, #080e1c, #060b14)" }}
    >
      <hr className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div className="about-content space-y-6">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-xs headline-font">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold notch-font text-white leading-tight">
            Building{" "}
            <span className="gradient-text-cyan">
              <RotatingText
                texts={["Predictive", "Data-Driven", "End-to-End"]}
                mainClassName=""
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                rotationInterval={2800}
              />
            </span>
            <br />
            Data Products
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-lg headline-font">
            I&apos;m <span className="text-white font-semibold">Arvi</span> — a fresh Informatics
            graduate from Universitas AMIKOM with a strong focus on{" "}
            <span className="text-cyan-400 font-semibold">machine learning</span> and{" "}
            <span className="text-cyan-400 font-semibold">computer vision</span>.
          </p>
          <p className="text-slate-400 text-base leading-relaxed max-w-lg headline-font">
            I don&apos;t just train models in notebooks — I architect complete pipelines, from data
            preprocessing and model training to{" "}
            <span className="text-cyan-400 font-medium">deployment via Streamlit and HuggingFace</span>.
            My frontend skills (React, Vue, Tailwind) let me build the interfaces that make my
            models <em>usable</em> — turning experiments into real products anyone can interact with.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060b14] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Explore My Work
            </a>
            <a
              href="/CV_Arvi Rizqi Fadhila.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Resume <DownloadIcon size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/arvi-rizqi-fadhila"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:border-blue-400/50 hover:text-blue-400 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="about-image flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 bg-cyan-400/8 blur-3xl rounded-3xl" />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/10" />
            <Image
              src="/arvi.jpg"
              alt="Arvi Rizqi Fadhila — Data Analyst & ML Engineer"
              width={480}
              height={560}
              className="rounded-2xl relative z-10 object-cover w-full"
            />
            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -right-4 z-20 glass-card px-4 py-3 rounded-xl float">
              <p className="text-xs text-slate-400 headline-font">Currently open to</p>
              <p className="text-sm font-bold text-cyan-400 notch-font">Data / ML Roles 🎯</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div className="metric-strip max-w-7xl mx-auto px-6 lg:px-10 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="metric-card">
              <p className="text-2xl mb-1">{m.icon}</p>
              <p className="text-2xl font-bold text-cyan-400 notch-font">{m.value}</p>
              <p className="text-xs text-slate-400 mt-1 headline-font">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
