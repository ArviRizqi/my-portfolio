"use client";
import React, { useRef, useEffect } from 'react';
import { Button } from "../ui/button";
import { gsap } from 'gsap';
import { socialLinks } from '@/lib/data';

export default function NavbarSosmed() {
  const socialRef = useRef(null);

  useEffect(() => {
    if (!socialRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(socialRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 1.0,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <aside ref={socialRef} className="fixed bottom-16 left-8 z-50">
      <div className="flex flex-col items-center">

        {/* Social icons */}
        <ul className="flex flex-col space-y-4 mb-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="text-xl font-bold text-slate-400 hover:text-indigo-500 transition-colors duration-200 h-8 w-8"
                >
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                  >
                    <Icon className="!w-5.5 !h-5.5" />
                  </a>
                </Button>
              </li>
            );
          })}
        </ul>

        {/* Vertical line */}
        <div className="w-0.5 h-16 bg-slate-500" />
      </div>
    </aside>
  );
}
