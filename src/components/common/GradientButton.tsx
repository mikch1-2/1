interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'default' | 'large';
}

export default function GradientButton({ children, size = 'default', className = '', ...props }: GradientButtonProps) {
  const baseStyles = "bg-gradient-to-r from-[#4F46E5] to-[#E935C1] text-white rounded-full hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-200 text-sm font-medium transform-gpu";
  
  const sizes = {
    default: "px-5 py-2",
    large: "px-6 py-2.5"
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}