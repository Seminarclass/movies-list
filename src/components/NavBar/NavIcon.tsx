import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavIconProps {
  link: string;
  icon: any;
}

export default function NavIcon({ link, icon }: NavIconProps) {
  return (
    <a
      className="flex items-center p-1 rounded bg-white"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon
        className="text-dark"
        icon={icon}
        size="lg"
      />
    </a>
  );
}