"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const [init, setInit] = useState(false);

  // INIT tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);                 // core fitur
      await loadPolygonMaskPlugin(engine);    // <-- PENTING! polygon mask baru hidup disini
    }).then(() => {
      setInit(true);
    });
  }, []);

const particleOptions = {
  autoPlay: true,

  // === FIX: TIDAK fullscreen, hanya di Hero section ===
  fullScreen: {
    enable: false
  },

  background: {
    color: { value: "transparent" }
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "canvas", // <– FIX
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      resize: {
        enable: true,
        delay: 0.5
      }
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      attract: {
        distance: 200,
        duration: 0.4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      slow: {
        factor: 3,
        radius: 200
      }
    }
  },

  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },

    color: { value: "#ffffff" },

    shape: { type: "circle" },

    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 3
      }
    },

    size: {
      value: { min: 1, max: 10 },
      animation: {
        enable: true,
        speed: 20
      }
    },

    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: "out"
    }
  },

  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  motion: {
    disable: false,
    reduce: {
      value: true,
      factor: 4
    }
  }
};

  // GSAP anim
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
    }, sectionRef);

    return () => ctx.revert();
  }, [init]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen pt-18 pb-24 md:pt-24 md:pb-24 overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] via-[#0d1228] to-[#0b1120] to- z-0"></div>

      {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0 z-[4] pointer-events-none"
        />
      )}

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
              Even small actions taken in quiet can echo farther than expected—every line of code, every project, every step forward matters.
            </p>
          </div>
        <div className="relative w-full z-[20] text-start max-w-7xl mx-auto px-6 lg:px-10">
            <p
              ref={subtitleRef}
              className="mt-20 text-slate-100 w-full text-sm md:text-xl notch-font text-end font-extralight"
            >
              Started as a curious Computer Science student eager<br /> 
              to learn, discovered my passion in crafting beautiful<br />
              and functional web experiences through<br />
              several projects and experiments.
            </p>
        </div>
      </div>

    </section>
  );
}
