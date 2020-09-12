import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as Star, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons';


interface NominateButtonProps {
  fromSlider?: boolean;
  nominated: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NominateButton({ fromSlider = false, nominated, onClick }: NominateButtonProps) {
  return (
    <button
      className="
        px-2 flex items-center justify-center
        text-xs leading-5 font-extrabold rounded-full
        focus:outline-none
      "
      onClick={onClick}
    >
      {fromSlider ? (
        <FontAwesomeIcon
          className="text-red-400 hover:text-red-800 mx-2 transition duration-300 ease-in-out"
          icon={faTrashAlt}
          size="2x"
        />
      ) : (
        <FontAwesomeIcon
          className={`
            ${nominated ? 'text-yellow-200' : 'text-dark hover:text-yellow-200'}
            transition duration-300 ease-in-out
          `}
          icon={nominated ? SolidStar : Star}
          size="2x"
        />
      )}
    </button>
  );
}