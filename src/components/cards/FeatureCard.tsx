import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 
        group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />
      
      {/* Card content */}
      <div className="relative flex flex-col h-full bg-white p-6 rounded-xl transition duration-200
        group-hover:shadow-xl group-hover:scale-[1.01] transform-gpu">
        <div className="mb-4">
          <Icon className="h-8 w-8 transform-gpu transition duration-200 
            group-hover:scale-110 stroke-blue-600 group-hover:stroke-purple-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2 transition duration-200 
          group-hover:text-transparent group-hover:bg-gradient-to-r 
          group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
}