import { Check } from 'lucide-react';
import GradientButton from '../../components/common/GradientButton';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    features: ['Up to 1,000 chats/month', 'Basic AI training', 'Email support', '2 languages']
  },
  {
    name: 'Professional',
    price: '$99',
    features: ['Up to 10,000 chats/month', 'Advanced AI training', 'Priority support', '10 languages']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited chats', 'Custom AI training', '24/7 support', 'All languages']
  }
];

export default function Pricing() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <GradientButton className="w-full">Get Started</GradientButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}