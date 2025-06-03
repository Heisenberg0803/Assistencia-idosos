import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105',
        variant === 'primary' 
          ? 'bg-[#f9bc60] text-[#001e1d] hover:bg-[#f9bc60]/90' 
          : 'bg-[#abd1c6] text-[#001e1d] hover:bg-[#abd1c6]/90',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}