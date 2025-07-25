"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface PawIcon {
  id: number;
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  size: number;
}

export default function HeroSection() {
  const [pawIcons, setPawIcons] = useState<PawIcon[]>([]);
  const [nextId, setNextId] = useState(1);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const createPawIcon = () => {
      const newPaw: PawIcon = {
        id: nextId,
        x: Math.random() * 100, // Random position 0-100%
        y: Math.random() * 100, // Random position 0-100%
        rotation: Math.random() * 360, // Random rotation 0-360 degrees
        opacity: 0,
        size: Math.random() * 3 + 2, // Random size between 2-5 times larger
      };

      setPawIcons((prev) => [...prev, newPaw]);
      setNextId((prev) => prev + 1);

      // Animate fade in
      setTimeout(() => {
        setPawIcons((prev) =>
          prev.map((paw) =>
            paw.id === newPaw.id ? { ...paw, opacity: 1 } : paw
          )
        );
      }, 200);

      // Remove after animation completes
      setTimeout(() => {
        setPawIcons((prev) =>
          prev.map((paw) =>
            paw.id === newPaw.id ? { ...paw, opacity: 0 } : paw
          )
        );

        setTimeout(() => {
          setPawIcons((prev) => prev.filter((paw) => paw.id !== newPaw.id));
        }, 2000);
      }, 4000);
    };

    // Create a new paw icon every 3 seconds
    const interval = setInterval(createPawIcon, 3000);

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 relative overflow-hidden">
      {/* Animated paw icons */}
      {pawIcons.map((paw) => (
        <div
          key={paw.id}
          className="absolute pointer-events-none transition-opacity duration-2000 ease-in-out"
          style={{
            left: `${paw.x}%`,
            top: `${paw.y}%`,
            transform: `rotate(${paw.rotation}deg)`,
            opacity: paw.opacity,
          }}
        >
          <i
            className="fas fa-paw text-primary-foreground"
            style={{ fontSize: `${paw.size}rem` }}
          ></i>
        </div>
      ))}

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Where we look after your pets as if they are our own
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional pet sitting in Ballito with dedication, love and so
              much care. Your pet is looked after in their own home with
              personalized attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:bg-muted transition-colors text-center"
              >
                Book Now
              </button>
              <a
                href="tel:072 576 0937"
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-colors text-center"
              >
                072 576 0937
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/Infographic.PNG"
              alt="Blue Ginger Pet Sitting Infographic"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
