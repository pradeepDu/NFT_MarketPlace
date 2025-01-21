import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // Content inside the button
  className?: string;        // Optional className for custom styling
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
