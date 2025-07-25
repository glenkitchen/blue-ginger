import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Why Choose Blue Ginger?
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Driven by a lifelong passion for animals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
