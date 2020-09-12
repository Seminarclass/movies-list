import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons';
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons';


interface NominateButtonProps {
  fromSlider?: boolean;
  nominated: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NominateButton({ fromSlider = false, nominated, onClick }: NominateButtonProps) {
  return (
    <button
      className={`
        px-2 flex items-center justify-center
        text-xs leading-5 font-extrabold rounded-full
        focus:outline-none
        ${fromSlider ? 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800 hover:bg-red-300 hover:text-red-900' : ''}
      `}
      onClick={onClick}
    >
      {fromSlider ? 'Remove' : (
        <FontAwesomeIcon
          className={nominated ? 'text-yellow-200' : 'text-dark'}
          icon={nominated ? SolidStar : Star}
          size="2x"
        />
      )}
    </button>
  );
}