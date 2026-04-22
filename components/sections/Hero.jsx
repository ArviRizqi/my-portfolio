"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Orb from "@/lib/animations/Orb";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const badgesRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const orbContainerRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgesRef.current, { y: 20, opacity: 0, duration: 0.8 })
        .from(titleRef.current, { y: 40, opacity: 0, duration: 1.2 }, "-=0.4")
        .from(subtitleRef.current, { y: 30, opacity: 0, duration: 1 }, "-=0.6")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.5");

      gsap.fromTo(
        orbContainerRef.current,
        { opacity: 0, scale: 0.7, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 2.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.to(orbContainerRef.current, {
        y: "+=20",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060b14] via-[#080e1a] to-[#060b14] z-0" />
      <div className="absolute inset-0 dot-grid z-0 opacity-60" />

      {/* Orb */}
      <div
        className="absolute inset-0 h-full w-full z-0"
        ref={orbContainerRef}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={185}
          forceHoverState={false}
        />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-start">

        {/* Role badges */}
        <div ref={badgesRef} className="flex flex-wrap gap-2 mb-6">
          {["Data Scientist", "ML Engineer", "End-to-End Builder"].map((badge) => (
            <span
              key={badge}
              className="text-xs font-semibold px-3 py-1.5 rounded-full badge-cyan headline-font tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Name */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-[88px] font-extrabold text-white leading-none tracking-tight dark-shine notch-font"
        >
          <span className="shine-text">Arvi Rizqi</span>
          <br />
          <span className="shine-text">Fadhila</span>
        </h1>

        {/* Positioning statement */}
        <p
          ref={subtitleRef}
          className="mt-6 text-slate-300 max-w-2xl text-base md:text-xl headline-font font-light leading-relaxed"
        >
          I turn raw data into working products — from training models to
          deploying them as real applications. Fresh graduate in Informatics,
          specializing in{" "}
          <span className="text-cyan-400 font-medium">machine learning</span> &{" "}
          <span className="text-cyan-400 font-medium">deep learning</span>.
        </p>

        {/* CTA row */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060b14] font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
          >
            View My Projects ↓
          </a>
          <a
            href="/CV_Arvi Rizqi Fadhila.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Download Resume ↗
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-16 flex flex-wrap gap-8">
          {[
            { value: "3", label: "ML Projects Built" },
            { value: "2", label: "Live Deployments" },
            { value: "~90%", label: "MobileViTv2 Accuracy" },
          ].map((stat) => (
            <div key={stat.label} className="text-start">
              <p className="text-2xl font-bold text-cyan-400 notch-font">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5 headline-font">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
