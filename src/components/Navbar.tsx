import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import NavLink from './nav/NavLink';
import SolutionsDropdown from './nav/SolutionsDropdown';
import MobileMenu from './nav/MobileMenu';
import NavbarContainer from './nav/NavbarContainer';
import Logo from './Logo';

interface NavbarProps {
  onPageChange: (page: string) => void;
}

export default function Navbar({ onPageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <div className="flex items-center">
        <Logo onClick={() => onPageChange('home')} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="#blog">Blog</NavLink>
        <SolutionsDropdown onPageChange={onPageChange} />
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-gray-900"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMenuOpen} onPageChange={onPageChange} />
    </NavbarContainer>
  );
}