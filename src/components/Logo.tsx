import { Cpu } from 'lucide-react';
import { cn } from '../utils/cn';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <a 
      href="#" 
      onClick={onClick}
      className={cn(
        "group flex items-center gap-5 transition-all duration-300",
        className
      )}
    >
      {/* Small Logo with Dark Gray Border */}
      <div className="relative">
        <Cpu className="w-6 h-6 bg-transparent stroke-[1] stroke-[#4b4b4b] transform-gpu group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Text Logo with Small Letters, Dark Gray Border, Spaces Between Words */}
      <div className="flex items-baseline gap-x-[8px] font-['Helvetica'] tracking-[-0.05em] text-lg">
        <span className="font-black text-transparent stroke-[1] stroke-[#4b4b4b] [-webkit-text-stroke:1px_#4b4b4b]">
          my
        </span>
        <span className="font-black text-transparent stroke-[1] stroke-[#4b4b4b] [-webkit-text-stroke:1px_#4b4b4b]">
          systems
        </span>
        <span className="font-black text-transparent stroke-[1] stroke-[#4b4b4b] [-webkit-text-stroke:1px_#4b4b4b]">
          ai
        </span>
      </div>
    </a>
  );
}