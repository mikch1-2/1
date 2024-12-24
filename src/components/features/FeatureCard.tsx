import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export default function FeatureCard({ title, description, icon: Icon, onClick }: FeatureCardProps) {
  return (
    <button 
      className="relative group w-full text-left"
      onClick={onClick}
    >
      {/* Gradient background with enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-50 group-hover:opacity-75 blur group-hover:blur-xl transition-all duration-300"></div>
      
      {/* Card content with scale and hover effects */}
      <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl h-full border border-black/5 
        transform transition-all duration-300 ease-out
        group-hover:scale-[1.02] group-hover:bg-white/95 group-hover:border-black/10
        group-hover:shadow-lg group-hover:shadow-blue-500/20">
        
        {/* Icon container with gradient and hover effect */}
        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
          flex items-center justify-center mb-4
          transform transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        {/* Text content with subtle hover effects */}
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 
          group-hover:text-transparent group-hover:bg-clip-text 
          group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>
    </button>
  );
}