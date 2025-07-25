'use client';

import Image from 'next/image';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-pet-purple via-purple-600 to-pet-teal text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Where we look after your pets as if they are our own
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional pet sitting in Ballito with dedication, love and so much care. 
              Your pet is looked after in their own home with personalized attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-pet-purple px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Book Now
              </button>
              <a
                href="tel:072 576 0937"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pet-purple transition-colors text-center"
              >
                072 576 0937
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Happy cat"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Happy dog"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dog walking"
                width={400}
                height={300}
                className="rounded-lg shadow-lg -mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Pet care"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}