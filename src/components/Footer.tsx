import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pet-purple to-pet-teal rounded-full flex items-center justify-center">
                <i className="fas fa-paw text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Blue Ginger</h3>
                <p className="text-sm text-gray-400">Pet Sitting</p>
              </div>
            </div>
            <p className="text-gray-400">
              Professional pet care with love and dedication in Ballito and surrounding areas.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>072 576 0937</li>
              <li>bluegingerpetsitting@gmail.com</li>
              <li>Ballito, KZN</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-pet-purple rounded-full flex items-center justify-center hover:bg-pet-teal transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pet-purple rounded-full flex items-center justify-center hover:bg-pet-teal transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pet-purple rounded-full flex items-center justify-center hover:bg-pet-teal transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Blue Ginger Petsitting. All rights reserved. | Professional pet care you can trust.</p>
        </div>
      </div>
    </footer>
  );
}