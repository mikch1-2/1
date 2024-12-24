interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'button';
}

export default function NavLink({ href, children, variant = 'default' }: NavLinkProps) {
  const baseStyles = "text-sm transition-all duration-200 font-medium";
  const variants = {
    default: "text-gray-600 hover:text-gray-900",
    button: "px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}