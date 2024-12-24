import { Brain, Users, Target, Bot, Calendar, Settings, Globe, ShieldCheck } from 'lucide-react';
import FeatureCard from '../../components/cards/FeatureCard';

const features = [
  {
    icon: Brain,
    title: "AI-powered",
    description: "Advanced machine learning for intelligent, context-aware responses"
  },
  {
    icon: Users,
    title: "Customer Engagement",
    description: "Build stronger relationships with personalized interactions"
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Convert conversations into qualified leads automatically"
  },
  {
    icon: Bot,
    title: "Automated Support",
    description: "24/7 instant responses to common customer inquiries"
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Seamless booking integration with your calendar"
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Adapt the chatbot to match your brand and workflows"
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Connect with customers in their preferred language"
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description: "Ensure customer information is protected with top-tier encryption"
  }
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}