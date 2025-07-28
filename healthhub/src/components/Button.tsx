import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  height?: string;
  width?: string;
  padding?: string;
  color?: string;
  bgcolor?: string;
  textSize?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  height = 'auto',
  width = '100%',
  padding = '0.5rem 1rem', // default py-2 px-4
  color = 'white',
  bgcolor = '#60A5FA', // Tailwind blue-400
  textSize = '1rem',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        height,
        width,
        padding,
        backgroundColor: bgcolor,
        color,
        fontSize: textSize,
        borderRadius: '0.375rem', // Tailwind's rounded-md
        fontWeight: 500,
      }}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
