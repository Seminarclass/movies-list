import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

interface AppIconProps {
  className?: string;
  logo?: boolean;
  onClick?: () => void;
  text: string;
}

export default function AppIcon({
  className = '',
  logo = false,
  onClick = () => {},
  text
}: AppIconProps) {
  return (
    <button
      className={`
        flex items-center p-2 rounded
      bg-white hover:bg-gray-200 shadow
        transition duration-300 ease-in-out
        ${className}
      `}
      onClick={onClick}
    >
      {logo ? (
        <FontAwesomeIcon
          className="text-dark"
          icon={faFilm}
          size="lg"
        />
      ) : null}
      <p className={`font-medium truncate text-dark ${logo ? 'ml-2' : ''}`}>
        {text}
      </p>
    </button>
  );
}