import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

interface AppIconProps {
  logo?: boolean;
  onClick?: () => void;
  text: string;
}

export default function AppIcon({ logo = false, onClick = () => {}, text }: AppIconProps) {
  const history = useHistory();
  
  return (
    <button
      className={`
        flex items-center p-2 rounded
      bg-white hover:bg-gray-200 shadow
        transition duration-300 ease-in-out
      `}
      onClick={() => {
        onClick();
        history.push('/');
      }}
    >
      <FontAwesomeIcon
        className="text-dark"
        icon={logo ? faFilm : faEdit}
        size="lg"
      />
      <p className="ml-2 font-medium truncate italic text-dark">
        {text}
      </p>
    </button>
  );
}