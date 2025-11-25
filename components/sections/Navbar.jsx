"use client";
import React, { useRef, useEffect } from 'react';
import { Button } from "../ui/button";
import { gsap } from 'gsap';
import { navLinks } from '@/lib/data';


export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-8 right-8 z-50 mt-4">
      <ul className="flex flex-col space-y-5">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.id}>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-xl font-bold text-slate-400 hover:text-indigo-500 transition-colors duration-200 h-8 w-8"
                
              >
                <a href={link.href} title={link.title}>
                  <Icon className="!w-5.5 !h-5.5" />
                </a>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
