import { MessageSquare, Search, Mail, Layout } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface FeaturesProps {
  onPageChange?: (page: string) => void;
}

const features = [
  {
    title: 'Customer Assistant Chatbot',
    description: 'Intelligent chatbot that handles customer inquiries 24/7, improving response times and satisfaction.',
    icon: MessageSquare,
    page: 'chatbot'
  },
  {
    title: 'Cold Email Outreach',
    description: 'Personalized email campaigns that engage prospects with relevant, compelling content.',
    icon: Mail,
    page: 'email'
  },
  {
    title: 'Lead Finder',
    description: 'Advanced AI algorithms to identify and qualify potential leads based on your ideal customer profile.',
    icon: Search,
    page: 'leads'
  },
  {
    title: 'Website Builder',
    description: 'AI-powered website builder that creates stunning, conversion-optimized websites in minutes.',
    icon: Layout,
    page: 'website'
  }
];

export default function Features({ onPageChange }: FeaturesProps) {
  return (
    <section id="features" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              onClick={() => onPageChange?.(feature.page)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}