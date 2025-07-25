import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Infographic2.PNG"
              alt="Blue Ginger Pet Sitting Infographic"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Rachel
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hi, I&apos;m Rachel. I have a certificate in dog behaviour, 5
              years of experience, and excellent references. I absolutely love
              animals and have been pet sitting in Ballito for 4 years.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I&apos;m not caring for others&apos; pets, I spend my free
              time working with rescues! I&apos;m involved in rescue work with
              deep commitment to animal rescue – from township outreaches to dog
              walking and adoption days, sharing on social media.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">
                Dog Behaviour Certified
              </span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm">
                5 Years Experience
              </span>
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm">
                Rescue Volunteer
              </span>
              <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm">
                Tellington TTouch Workshop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
