import ContactForm from '@/components/ui/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to give your pet the care they deserve?</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pet-purple rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">072 576 0937</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pet-teal rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">bluegingerpetsitting@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pet-green rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Service Area</p>
                  <p className="text-gray-600">Ballito, KZN and surrounding areas</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-pet-purple to-pet-teal rounded-xl text-white">
              <h4 className="text-xl font-semibold mb-2">Emergency Contact</h4>
              <p className="opacity-90">Available 24/7 for urgent pet care needs</p>
              <a
                href="tel:072 576 0937"
                className="inline-block mt-4 bg-white text-pet-purple px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}