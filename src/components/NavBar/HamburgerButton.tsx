import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface HamburgerButtonProps {
  numItems: number;
  open: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function HamburgerButton({ numItems, open, onClick }: HamburgerButtonProps) {
  return (
    <button
      className="
        relative flex items-center justify-center w-10 p-2
        rounded bg-white hover:bg-gray-200
        transition duration-300 ease-in-out
        focus:outline-none
      "
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="text-dark"
        icon={open ? faTimes : faBars}
        size="lg"
      />
      {numItems > 0 ? (
        <span className="
          absolute -top-0.5 -right-0.5
          flex items-center justify-center text-center
          rounded-full
          w-5 h-5
          bg-red-500 text-white text-xs
        ">
          {numItems}
        </span>
      ) : null}
    </button>
  );
}
