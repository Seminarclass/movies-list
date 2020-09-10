import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons';
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons';


interface NominateButtonProps {
  nominated: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NominateButton({ nominated, onClick }: NominateButtonProps) {
  return (
    <button
      className="
        px-2 flex items-center justify-center
        text-xs leading-5 font-extrabold rounded-full
        focus:outline-none
      "
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={nominated ? 'text-yellow-200' : 'text-dark'}
        icon={nominated ? SolidStar : Star}
        size="2x"
      />
    </button>
  );
}