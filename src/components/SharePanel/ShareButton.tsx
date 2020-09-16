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
      type="button"
      className={`
        w-full flex items-center justify-center
        px-4 py-2
        border border-columbia rounded
        font-medium text-white
        bg-columbia hover:bg-opacity-75 hover:border-opacity-75
        focus:outline-none transition ease-in-out duration-150
        ${className}
      `}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="mr-2"
        icon={faShareAlt}
        size="sm"
      />
      Share
    </button>
  );
}