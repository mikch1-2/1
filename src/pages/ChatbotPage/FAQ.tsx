import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the AI chatbot learn from interactions?",
    answer: "Our chatbot uses advanced machine learning algorithms to analyze patterns in customer conversations, learning from each interaction to improve its responses and understanding over time."
  },
  {
    question: "What integration options are available?",
    answer: "The chatbot seamlessly integrates with popular platforms including Slack, Microsoft Teams, WhatsApp, and major CRM systems. We also offer a REST API for custom integrations."
  },
  {
    question: "How do you handle data privacy and security?",
    answer: "We implement enterprise-grade encryption, comply with GDPR and CCPA, and provide data retention controls. All conversations are encrypted, and you maintain full ownership of your data."
  },
  {
    question: "Can the chatbot handle complex customer inquiries?",
    answer: "Yes, the chatbot can handle multi-step conversations, understand context, and escalate to human agents when needed. It can also process attachments and follow custom decision trees."
  },
  {
    question: "What analytics and reporting features are included?",
    answer: "Get detailed insights into customer interactions, response times, satisfaction rates, and common inquiries. Export custom reports and track KPIs through our analytics dashboard."
  },
  {
    question: "How long does it take to set up and train the chatbot?",
    answer: "Initial setup takes just minutes. Basic training with your FAQs and common scenarios can be done in a few hours. The chatbot continues to improve automatically through machine learning."
  },
  {
    question: "What languages and channels are supported?",
    answer: "The chatbot supports 100+ languages with automatic translation. It can be deployed across your website, mobile app, social media, and messaging platforms."
  },
  {
    question: "Is there a limit to concurrent conversations?",
    answer: "No, our enterprise-grade infrastructure scales automatically to handle unlimited concurrent conversations without performance degradation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}