import React from 'react';
import { motion } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Comp
          className={`
            px-6 py-3 rounded-lg font-medium transition-colors
            ${variant === 'primary' 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-300'}
            ${className}
          `}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Button.displayName = 'Button';