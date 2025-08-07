"use client";

import { navItems } from "@/data/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Blue Ginger Pet Sitting Logo"
              width={75}
              height={75}
            />
            {/* Original logo - commented out */}
            {/* <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <i className="fas fa-paw text-primary-foreground text-sm"></i>
            </div> */}
            <div>
              <h1 className="text-lg font-bold text-primary uppercase">
                Blue Ginger
              </h1>
              <p className="text-xs text-muted-foreground uppercase">
                Pet Sitting
              </p>
            </div>{" "}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-xl hover:cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-muted-foreground`}
            ></i>
          </button>

          <div className="hidden md:flex items-center space-x-2">
            {/* Call Now Button */}
            <a
              href="tel:072 576 0937"
              className="text-xl bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-accent transition-colors flex items-center space-x-2"
            >
              <i className="fas fa-phone text-sm"></i>
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/27725760937"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors flex items-center space-x-2 ml-2"
            >
              <i className="fab fa-whatsapp text-sm"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pb-2 border-t border-border">
            <div className="flex flex-col space-y-2 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:072 576 0937"
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-accent transition-colors text-center mt-2 text-sm flex items-center justify-center space-x-2"
              >
                <i className="fas fa-phone text-sm"></i>
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/27725760937"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-center mt-2 text-sm flex items-center justify-center space-x-2"
              >
                <i className="fab fa-whatsapp text-sm"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
