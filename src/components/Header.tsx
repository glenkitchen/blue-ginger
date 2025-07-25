'use client';

import { useState } from 'react';
import { navItems } from '@/data/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pet-purple to-pet-teal rounded-full flex items-center justify-center">
              <i className="fas fa-paw text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-pet-purple">Blue Ginger</h1>
              <p className="text-sm text-gray-600">Pet Sitting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-pet-purple transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700`}></i>
          </button>

          {/* Call Now Button */}
          <a
            href="tel:072 576 0937"
            className="hidden md:block bg-pet-teal text-white px-6 py-2 rounded-full hover:bg-pet-green transition-colors"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-pet-purple transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:072 576 0937"
                className="bg-pet-teal text-white px-6 py-2 rounded-full hover:bg-pet-green transition-colors text-center mt-4"
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