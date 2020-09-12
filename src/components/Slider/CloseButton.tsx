import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="
        flex items-center justify-center
        w-10 p-2 rounded bg-white hover:bg-gray-200 focus:outline-none
        transition duration-300 ease-in-out
      "
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="text-dark"
        icon={faTimes}
        size="lg"
      />
    </button>
  );
}