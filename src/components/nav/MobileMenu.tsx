interface MobileMenuProps {
  isOpen: boolean;
  onPageChange: (page: string) => void;
}

export default function MobileMenu({ isOpen, onPageChange }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="#blog" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
          Blog
        </a>
        {/* Mobile Solutions submenu */}
        <div className="px-3 py-2">
          <div className="text-sm font-medium text-gray-900 mb-2">Solutions</div>
          <div className="space-y-2 pl-2">
            <button onClick={() => onPageChange('chatbot')} className="block text-sm text-gray-600 hover:text-gray-900">AI Chatbot</button>
            <button onClick={() => onPageChange('leads')} className="block text-sm text-gray-600 hover:text-gray-900">Lead Finder</button>
            <button onClick={() => onPageChange('email')} className="block text-sm text-gray-600 hover:text-gray-900">Email Outreach</button>
            <button onClick={() => onPageChange('website')} className="block text-sm text-gray-600 hover:text-gray-900">Website Builder</button>
          </div>
        </div>
      </div>
    </div>
  );
}