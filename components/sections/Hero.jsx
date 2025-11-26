"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Orb from "@/lib/animations/Orb";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const orbContainerRef = useRef(null); 

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 35,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        y: 35,
        opacity: 0,
        delay: 0.2,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.fromTo(
        orbContainerRef.current,
        {
          opacity: 0,
          scale: 0.7,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
        }
      );

      gsap.to(orbContainerRef.current, {
        y: "+=25",
        duration: 3,
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
      className="relative h-screen pt-18 pb-24 md:pt-24 md:pb-24 overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] via-[#0d1228] to-[#0b1120] z-0"></div>

      <div
        className="absolute inset-0 h-full w-full z-0 -top-12"
        ref={orbContainerRef}
      >
        <Orb
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      <div className="flex flex-row gap-4 flex-wrap items-stretch content-start">
        <div className="relative w-full z-[20] text-start max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-2xl uppercase tracking-[0.25em] text-slate-400 mb-3 headline-font">
            Portfolio
          </p>

          <h1
            ref={titleRef}
            className="text-4xl md:text-[90px] font-extrabold text-start text-white leading-tight dark-shine"
          >
            <span className="shine-text uppercase headline-font">
              Arvi Rizqi Fadhila
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-4 text-slate-100 max-w-xl text-sm md:text-xl notch-font font-extralight"
          >
            Even small actions taken in quiet can echo farther than expected—
            every line of code, every project, every step forward matters.
          </p>
        </div>

        <div className="relative w-full z-[20] text-start max-w-7xl mx-auto px-6 lg:px-10">
          <p className="mt-20 text-slate-100 max-w-lg text-sm md:text-xl notch-font text-end font-extralight ml-auto">
            Started as a curious Computer Science student eager <br />
            to learn, discovered my passion in crafting beautiful <br />
            and functional web experiences through <br />
            several projects and experiments.
          </p>
        </div>
      </div>
    </section>
  );
}
