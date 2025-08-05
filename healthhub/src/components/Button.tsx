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
  loading?: boolean;
  loadingLabel?:string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  height = 'auto',
  width = '100%',
  padding = '0.5rem 1rem',
  color = 'white',
  bgcolor = '#60A5FA', // Tailwind blue-400
  textSize = '1rem',
  className = '',
  loading = false,
  loadingLabel="Processing...",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={!loading ? onClick : undefined}
      disabled={disabled || loading}
      style={{
        height,
        width,
        padding,
        backgroundColor: bgcolor,
        color,
        fontSize: textSize,
        borderRadius: '0.375rem', // rounded-md
        fontWeight: 500,
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        opacity: loading || disabled ? 0.7 : 1,
      }}
      className={`transition duration-200 ease-in-out hover:opacity-80 flex items-center justify-center gap-2 ${className}`}
    >
      {loading && (
        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      )}
      {loading ? loadingLabel : label}
    </button>
  );
};

export default Button;
