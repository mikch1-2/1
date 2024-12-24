import { useScrollDirection } from '../../hooks/useScrollDirection';
import { cn } from '../../utils/cn';

interface NavbarContainerProps {
  children: React.ReactNode;
}

export default function NavbarContainer({ children }: NavbarContainerProps) {
  const { scrollY } = useScrollDirection();
  const isScrolled = scrollY > 50;
  
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-[rgb(250,239,228)]',
        'transition-all duration-300 transform-gpu',
        isScrolled ? 'h-12 shadow-sm' : 'h-16'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className={cn(
          'flex justify-between items-center h-full',
          'transition-all duration-300',
          isScrolled ? 'scale-90' : 'scale-100'
        )}>
          {children}
        </div>
      </div>
    </nav>
  );
}