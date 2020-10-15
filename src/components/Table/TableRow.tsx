import React from 'react';

import NominateButton from './NominateButton';

interface TableRowProps {
  fromShared?: boolean;
  fromSlider?: boolean;
  poster: string;
  title: string;
  year: string;
  imdbID: string;
  nominated: boolean;
  onFavorite?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function TableRow({
  fromShared = false,
  fromSlider = false,
  poster,
  title,
  year,
  imdbID,
  nominated,
  onFavorite = e => {}
}: TableRowProps) {
  const openIMDBLink = () => window.open(`https://www.imdb.com/title/${imdbID}/`, "_blank")

  const colpadding = 'px-3 py-2 sm:px-6 sm:py-4';
  return (
    <tr className="text-sm cursor-pointer hover:bg-gray-50" onClick={openIMDBLink}>
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
            onClick={e => {
              e.stopPropagation();
              onFavorite(e);
            }}
          />
        </td>
      )}
    </tr>
  );
}