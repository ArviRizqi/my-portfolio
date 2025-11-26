"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import RotatingText from "@/lib/animations/RotatingText";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(".about-content", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });

    gsap.from(".about-image", {
      opacity: 0,
      x: 60,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-28 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#eef2f6]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT CONTENT */}
        <div className="about-content space-y-6">
          <p className="text-indigo-600 font-semibold tracking-wide uppercase headline-font">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold notch-font text-slate-800 leading-tight">
            Crafting <br />  
            <span className="text-indigo-600"> 
              <span className="text-indigo-600"> 
              <RotatingText
                texts={['Clean', "Modern", 'User-Centered']}
                mainClassName=""
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                rotationInterval={3000}
              />
            </span>
            </span>
             Frontend Experiences
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-lg font-medium headline-font">
            I am a Computer Science student specializing in modern web development—particularly 
            <span className="text-indigo-600 font-semibold"> frontend developer</span>—while steadily expanding my <span className="text-indigo-600 font-semibold">interest in machine learning</span>. 
            I enjoy crafting <span className="text-indigo-600 font-semibold">clean, responsive, and user-centered interfaces</span>.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed max-w-lg font-medium headline-font">
            As someone who believes that meaningful impact often comes from thoughtful, 
            focused work, I take pride in refining my skills through <span className="text-indigo-600 font-semibold">consistency</span>  rather than noise. 
            I stay committed to <span className="text-indigo-600 font-semibold">learning new technologies</span>, understanding industry trends, 
            and building solutions that are scalable, intentional, and genuinely valuable.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 pt-4">
            <Button asChild className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-6 text-base">
              <a href="#portfolio">
              Explore My Work
              </a>
            </Button>

            <Button asChild variant="outline" className="border-indigo-500 w-36 text-indigo-600 hover:bg-indigo-50 px-6 py-6 text-base">
              <a href="/CV_Arvi Rizqi Fadhila.pdf" target="_blank" rel="noopener noreferrer">
                Resume <DownloadIcon />
              </a>
            </Button>

          </div>
        </div>

        {/* RIGHT — IMAGE SIDE */}
        <div className="about-image flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 bg-indigo-300/20 blur-2xl rounded-2xl"></div>
            <Image
              src="/arvi.jpg"
              alt="Profile Image"
              width={550}
              height={620}
              className="rounded-2xl shadow-xl relative z-10 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
