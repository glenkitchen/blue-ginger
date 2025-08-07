export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to give your pet the care they deserve?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-primary-foreground"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">072 576 0937</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">072 576 0937</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-accent-foreground"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">
                    bluegingerpetsitting@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-accent-foreground"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Service Area</p>
                  <p className="text-muted-foreground">
                    Ballito, KZN and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary to-secondary rounded-xl text-primary-foreground">
              <h4 className="text-xl font-semibold mb-2">Emergency Contact</h4>
              <p className="opacity-90">
                Available 24/7 for urgent pet care needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="tel:072 576 0937"
                  className="inline-block bg-primary-foreground text-primary px-6 py-2 rounded-full font-semibold hover:bg-muted transition-colors text-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
                <a
                  href="https://wa.me/27725760937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
