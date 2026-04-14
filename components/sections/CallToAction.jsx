"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon, SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: MapPinIcon, label: "Location", value: "Yogyakarta, Indonesia", href: null },
  { icon: MailIcon, label: "Email", value: "arvrzqfdhla@gmail.com", href: "mailto:arvrzqfdhla@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "arvi-rizqi-fadhila", href: "https://www.linkedin.com/in/arvi-rizqi-fadhila" },
  { icon: GithubIcon, label: "GitHub", value: "github.com/ArviRizqi", href: "https://github.com/ArviRizqi" },
];

export default function CallToAction() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Contact form submitted:", data);
    setTimeout(() => {
      setLoading(false);
      setStatus("Message sent! I'll get back to you soon. 🎯");
      e.target.reset();
    }, 800);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 relative"
      style={{ background: "linear-gradient(to bottom, #080e1c, #060b14)" }}
    >
      <hr className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-xs headline-font mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white notch-font">
            Open to Data & ML Roles
          </h2>
          <p className="text-slate-400 mt-4 text-base headline-font leading-relaxed">
            I&apos;m actively looking for opportunities to contribute to{" "}
            <span className="text-cyan-400">data-driven teams</span>. Whether you&apos;re
            hiring, collaborating, or just want to talk ML — I&apos;m reachable.
          </p>

          {/* Quick social row */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="https://www.linkedin.com/in/arvi-rizqi-fadhila"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 hover:border-blue-400/50 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a
              href="https://github.com/ArviRizqi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:bg-white/10 hover:border-white/25 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="mailto:arvrzqfdhla@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/40 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <MailIcon size={14} /> Email
            </a>
          </div>
        </div>

        {/* Form + Info grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Contact info */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-lg notch-font mb-4">
              Contact Info
            </h3>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex gap-4 items-center p-4 glass-card rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-all">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 headline-font">{item.label}</p>
                    <p className="text-slate-200 text-sm font-medium headline-font">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-white font-bold text-lg notch-font mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs headline-font">Name *</label>
                  <Input
                    name="name"
                    required
                    className="bg-white/4 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-0"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs headline-font">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    required
                    className="bg-white/4 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-0"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs headline-font">Subject</label>
                <Input
                  name="subject"
                  className="bg-white/4 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-0"
                  placeholder="Job opportunity, collaboration, etc."
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs headline-font">Message *</label>
                <Textarea
                  name="message"
                  rows={4}
                  required
                  className="bg-white/4 border-white/10 text-slate-200 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-0 resize-none"
                  placeholder="Tell me about the role or collaboration..."
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060b14] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <SendIcon size={14} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <span className="text-xs text-emerald-400 headline-font">{status}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
