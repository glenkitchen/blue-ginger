import { services } from "@/data/services";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            {/* <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                <i className="fas fa-paw text-primary"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground">
                  Blue Ginger
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Pet Sitting
                </p>
              </div>
            </div> */}
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Blue Ginger Pet Sitting Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-primary-foreground">
                  Blue Ginger
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Pet Sitting
                </p>
              </div>
            </div>

            <p className="text-primary-foreground/80">
              Professional pet care with love and dedication in Ballito and
              surrounding areas.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Contact
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>072 576 0937</li>
              <li>bluegingerpetsitting@gmail.com</li>
              <li>Ballito, KZN</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-primary"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-primary"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-primary"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>
            &copy; 2025 Blue Ginger Petsitting. All rights reserved. |
            Professional pet care you can trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
