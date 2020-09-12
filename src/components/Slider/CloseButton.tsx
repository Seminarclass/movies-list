import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="h-7 flex items-center focus:outline-none"
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