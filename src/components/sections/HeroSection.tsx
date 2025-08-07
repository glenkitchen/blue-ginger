"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "/Infographic.PNG",
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
    "/image-4.jpg",
    "/image-5.jpg",
    "/image-6.jpg",
  ];

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

  // Carousel auto-advance effect
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 8000); // Change image every 8 seconds (twice as slow)

    return () => clearInterval(carouselInterval);
  }, [carouselImages.length]);

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
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
            {/* Carousel Container */}
            <div className="relative h-[600px] w-[600px] shadow-lg rounded-xl">
              {/* Current Image */}
              <div className="relative h-full">
                <Image
                  src={carouselImages[currentImageIndex]}
                  alt={`Blue Ginger Pet Sitting - Image ${
                    currentImageIndex + 1
                  }`}
                  width={600}
                  height={400}
                  className={
                    "w-full h-full transition-opacity duration-1000 rounded-xl object-cover"
                  }
                  priority={currentImageIndex === 0}
                />
              </div>

              {/* Carousel Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-primary-foreground"
                        : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Previous/Next Buttons */}
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? carouselImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) => (prev + 1) % carouselImages.length
                  )
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
