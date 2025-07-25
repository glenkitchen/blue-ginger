import { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
        <i className={`${feature.icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}