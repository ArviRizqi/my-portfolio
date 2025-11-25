"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { address } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef(null);
    const [status, setStatus] = useState("");

  useEffect(() => {
    const el = sectionRef.current;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

    function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Contact form submitted:", data);
    setStatus("Thank you, I will get back to you soon.");
  } 

  return (
    <section id="contact" ref={sectionRef} className="relative z-20 h-0">

      <div className="absolute left-1/2 -translate-x-1/2 -top-80 w-full px-6 max-w-264">
        <div className="rounded-2xl bg-white border border-white/10 shadow-lg p-8 lg:p-14 text-start grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900 notch-font">
            Do you have a project idea?
            <br />
            Let&apos;s discuss your project!
          </h2>
          <p className="text-slate-600 max-w-98 text-base md:text-md headline-font">
            Tell me about your goals, timelines, and constraints. I&apos;ll get
            back to you with how we can work together.
          </p>
          <div className="space-y-1.5 max-w-84">
            {address.map((item, i) => {
              const Icon = item.icon;

              return(
                <div
                key={i}
                className="flex gap-4 items-start p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl">
                  <Icon color="#314158"/>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 text-base md:text-lg headline-font">
                    {item.label}
                  </p>
                  <p className="text-slate-400 text-sm">{item.value}</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-900 notch-font mb-4">
            Let&apos;s Connect!
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
          >
            <div className="flex flex-col gap-1">
              <label className="text-slate-700">Name*</label>
              <Input name="name" required />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-700">Email*</label>
              <Input type="email" name="email" required />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-700">Location</label>
              <Input name="location" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-700">Budget</label>
              <Input name="budget" />
            </div>
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-slate-700">Message*</label>
              <Textarea name="message" rows={4} required />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <Button type="submit">Submit</Button>
              {status && (
                <span className="text-xs text-emerald-400">{status}</span>
              )}
            </div>
          </form>
        </div>


        </div>
      </div>
    </section>
  );
}
