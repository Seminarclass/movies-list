import React from 'react';

interface NominateButtonProps {
  nominated: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NominateButton({ nominated, onClick }: NominateButtonProps) {
  return (
    <button
      className={`
        px-2 inline-flex
        text-xs leading-5 font-extrabold rounded-full
        focus:outline-none
        ${nominated ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}
      `}
      onClick={onClick}
    >
      {nominated ? 'Nominated' : 'Nominate'}
    </button>
  );
}