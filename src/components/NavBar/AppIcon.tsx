import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

interface AppIconProps {
  link: string;
}

export default function AppIcon({ link }: AppIconProps) {
  return (
    <a
      className="
        flex items-center p-2 rounded
        bg-white hover:bg-gray-200
        transition duration-300 ease-in-out
      "
      href={link}
    >
      <FontAwesomeIcon
        className="text-dark"
        icon={faFilm}
        size="lg"
      />
      <p className="ml-2 font-medium truncate italic text-dark">
        The Nominator
      </p>
    </a>
  );
}