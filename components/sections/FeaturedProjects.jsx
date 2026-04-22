"use client";

import { useEffect, useRef } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { featuredProjects } from "@/lib/data";

export default function FeaturedProjects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".feat-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("feat-card-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-28 pb-8 relative border-t border-slate-700/50"
      style={{ background: "linear-gradient(to bottom, #060b14, #07101e, #060b14)" }}
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-xs headline-font mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white notch-font">
            ML Projects
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg headline-font max-w-xl">
            End-to-end data products — each has a real problem, a trained model, and a live deployment.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="feat-card feat-card-visible glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top bar — colored accent line */}
              <div
                className={`h-0.5 w-full ${
                  project.typeColor === "cyan"
                    ? "bg-gradient-to-r from-cyan-500 to-cyan-300"
                    : project.typeColor === "violet"
                    ? "bg-gradient-to-r from-violet-500 to-pink-400"
                    : project.typeColor === "orange"
                    ? "bg-gradient-to-r from-orange-500 to-yellow-400"
                    : "bg-gradient-to-r from-emerald-500 to-cyan-400"
                }`}
              />

              <div className="grid md:grid-cols-5 gap-0">
                {/* === LEFT: Project details (3/5) === */}
                <div className="md:col-span-3 p-8 lg:p-10">

                  {/* Badge + number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{project.emoji}</span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full badge-${project.typeColor} headline-font`}
                    >
                      {project.type}
                    </span>
                    <span className="text-slate-600 text-sm font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white notch-font mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm headline-font mb-6 max-w-lg">
                    {project.tagline}
                  </p>

                  {/* Problem / Solution / Result */}
                  <div className="space-y-4">
                    {[
                      { label: "Problem", text: project.problem, color: "text-red-400" },
                      { label: "Solution", text: project.solution, color: "text-cyan-400" },
                      { label: "Result", text: project.result, color: "text-emerald-400" },
                    ].map(({ label, text, color }) => (
                      <div key={label} className="flex gap-4">
                        <span className={`text-xs font-bold uppercase tracking-widest ${color} pt-1 w-16 shrink-0 headline-font`}>
                          {label}
                        </span>
                        <p className="text-slate-300 text-sm leading-relaxed headline-font">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-pill text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-6">
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                          project.typeColor === "cyan"
                            ? "bg-cyan-500 hover:bg-cyan-400 text-[#060b14] hover:shadow-lg hover:shadow-cyan-500/25"
                            : project.typeColor === "violet"
                            ? "bg-violet-500 hover:bg-violet-400 text-white hover:shadow-lg hover:shadow-violet-500/25"
                            : project.typeColor === "orange"
                            ? "bg-orange-500 hover:bg-orange-400 text-white hover:shadow-lg hover:shadow-orange-500/25"
                            : "bg-emerald-500 hover:bg-emerald-400 text-[#060b14] hover:shadow-lg hover:shadow-emerald-500/25"
                        }`}
                      >
                        <ExternalLinkIcon size={14} /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-slate-300 hover:border-white/30 hover:text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                  </div>
                  <p className="text-start text-slate-400 text-[0.8rem] mt-10 headline-font">
                    ⚡ If the web server (Streamlit) breaks, simply run it again to restart.
                  </p>
                </div>

                {/* === RIGHT: Image + metrics (2/5) === */}
                <div className="md:col-span-2 relative flex flex-col">
                  {/* Screenshot */}
                  <div className="relative flex-1 min-h-[200px] md:min-h-0 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#07101e]/80" />
                  </div>

                  {/* Metric pills overlaid */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="glass-card px-3 py-2 rounded-lg text-right"
                      >
                        <p className="text-[10px] text-slate-200 headline-font">{m.label}</p>
                        <p className="text-sm font-bold text-cyan-400 notch-font">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
