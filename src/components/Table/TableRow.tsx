import React from 'react';

import NominateButton from './NominateButton';

interface TableRowProps {
  fromShared?: boolean;
  fromSlider?: boolean;
  poster: string;
  title: string;
  year: string;
  nominated: boolean;
  onFavorite?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function TableRow({
  fromShared = false,
  fromSlider = false,
  poster,
  title,
  year,
  nominated,
  onFavorite
}: TableRowProps) {
  const colpadding = 'px-3 py-2 sm:px-6 sm:py-4';
  return (
    <tr className="text-sm hover:bg-gray-50">
      <td className={colpadding}>
        <img className="object-scale-down w-full h-32" src={poster} alt={title} />
      </td>
      <td className={colpadding}>
        <div className="flex flex-wrap items-center">
          <div className="font-medium leading-5 text-gray-900">
            {title} ({year})
          </div>
        </div>
      </td>
      {fromShared ? null : (
        <td className={colpadding}>
          <NominateButton
            fromSlider={fromSlider}
            nominated={nominated}
            onClick={onFavorite}
          />
        </td>
      )}
    </tr>
  );
}