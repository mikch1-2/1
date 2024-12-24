import GradientButton from '../common/GradientButton';

interface SolutionsDropdownProps {
  onPageChange: (page: string) => void;
}

const solutions = [
  { name: 'AI Chatbot', href: 'chatbot', description: 'Intelligent customer service automation' },
  { name: 'Lead Finder', href: 'leads', description: 'Smart lead finding and qualification' },
  { name: 'Email Outreach', href: 'email', description: 'Automated outreach campaigns' },
  { name: 'Website Builder', href: 'website', description: 'AI-powered website creation' },
];

export default function SolutionsDropdown({ onPageChange }: SolutionsDropdownProps) {
  return (
    <div className="group relative">
      <GradientButton>
        Solutions
      </GradientButton>
      
      <div className="absolute left-1/2 -translate-x-1/2 w-64 mt-2 rounded-xl 
        bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible
        group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="p-2">
          {solutions.map((item) => (
            <button
              key={item.name}
              onClick={() => onPageChange(item.href)}
              className="w-full flex flex-col px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-left"
            >
              <span className="text-sm font-medium text-gray-900">{item.name}</span>
              <span className="text-xs text-gray-500">{item.description}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}