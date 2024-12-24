import { Bot } from 'lucide-react';
import Button from './Button';
import GradientButton from './common/GradientButton';
import AnimatedText from './AnimatedText';

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-black/5">
          <Bot size={16} className="text-blue-600" />
          <span className="text-sm font-medium">AI-Automation Agency</span>
        </div>
        
        <AnimatedText />
        
        {/* Reduced mt-12 to mt-8 to move buttons higher */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <GradientButton onClick={scrollToFeatures} size="large">
            Explore
          </GradientButton>
          <Button variant="gradient-vibrant" size="large">
            Book Free Demo
          </Button>
        </div>
      </div>
    </div>
  );
}