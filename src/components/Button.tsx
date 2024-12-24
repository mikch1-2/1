import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gradient' | 'outline' | 'gradient-vibrant';
  size?: 'default' | 'large';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'default',
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-full font-medium transition-all duration-200 text-sm transform-gpu';
  
  const sizes = {
    default: 'px-5 py-2',
    large: 'px-6 py-2.5'
  };
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90',
    'gradient-vibrant': `
      relative bg-gradient-to-r from-[#007991] to-[#78ffd6] 
      text-white font-semibold
      hover:shadow-lg hover:shadow-[#007991]/30 hover:scale-105
      animate-gradient bg-300%
    `,
    outline: 'border-2 border-black/10 text-gray-700 hover:bg-black/5'
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}