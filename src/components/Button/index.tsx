import React from 'react';

interface ShareButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ShareButton({ className, children, onClick }: ShareButtonProps) {
  return (
    <button
      type="button"
      className={`
        w-full flex items-center justify-center
        px-4 py-2
        border border-columbia rounded shadow
        font-medium text-white
        bg-columbia hover:bg-opacity-75 hover:border-opacity-75
        focus:outline-none transition ease-in-out duration-150
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}