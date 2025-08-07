import { Service } from "@/types";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${service.gradient} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-3xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-sm opacity-90 mb-4">{service.description}</p>
        <p className="font-bold">{service.price}</p>
      </div>
    </div>
  );
}
