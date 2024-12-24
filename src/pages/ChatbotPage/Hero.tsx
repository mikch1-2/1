import { MessageSquare, Zap, Clock } from 'lucide-react';
import GradientButton from '../../components/common/GradientButton';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="inline-flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
            Customer Support Chatbot
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 -z-10" />
          </h1>
          <p className="text-xl text-purple-600 font-medium">powered by AI</p>
        </div>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-6">
          Transform your customer service with an intelligent chatbot that learns and adapts to your business needs
        </p>
        <div className="flex justify-center gap-4">
          <GradientButton size="large">Start Free Trial</GradientButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: MessageSquare, title: '24/7 Support', description: 'Always available to help your customers' },
            { icon: Zap, title: 'Instant Responses', description: 'No more waiting for answers' },
            { icon: Clock, title: 'Save 80% Time', description: 'Automate repetitive inquiries' }
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <item.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}