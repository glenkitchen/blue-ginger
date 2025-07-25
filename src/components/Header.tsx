"use client";

import { useState } from "react";
import { navItems } from "@/data/navigation";

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
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <i className="fas fa-paw text-primary-foreground text-sm"></i>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Blue Ginger</h1>
              <p className="text-xs text-muted-foreground">Pet Sitting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
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

          {/* Call Now Button */}
          <a
            href="tel:072 576 0937"
            className="hidden md:block bg-secondary text-secondary-foreground px-4 py-1 rounded-full hover:bg-accent transition-colors text-sm"
          >
            Call Now
          </a>
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
                className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full hover:bg-accent transition-colors text-center mt-2 text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
