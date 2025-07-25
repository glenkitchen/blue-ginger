import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={`bg-gradient-to-br ${service.gradient} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-sm opacity-90 mb-4">{service.description}</p>
      <p className="font-bold">{service.price}</p>
    </div>
  );
}