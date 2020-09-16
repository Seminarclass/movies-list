import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

interface ShareButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ShareButton({ className, onClick }: ShareButtonProps) {
  return (
    <button
      className={`
        relative flex items-center justify-center w-10 p-2
        shadow rounded bg-white hover:bg-gray-200
        transition duration-300 ease-in-out
        focus:outline-none ${className}
      `}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="text-dark"
        icon={faShareAlt}
        size="lg"
      />
    </button>
  );
}
