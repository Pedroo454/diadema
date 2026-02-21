import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3 font-display font-bold text-lg uppercase tracking-wider transition-all duration-300 clip-path-slant";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 box-neon hover:box-neon-hover border border-red-500",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600/10 hover:text-red-400"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
