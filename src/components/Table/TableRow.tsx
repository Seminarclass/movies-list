import React from 'react';

import NominateButton from './NominateButton';

interface TableRowProps {
  fromSlider?: boolean;
  title: string;
  year: string;
  nominated: boolean;
  onBtnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function TableRow({
  fromSlider = false,
  title,
  year,
  nominated,
  onBtnClick
}: TableRowProps) {
  const colpadding = 'px-3 py-2 sm:px-6 sm:py-4';
  return (
    <tr className="text-sm hover:bg-gray-50">
      <td className={colpadding}>
        <div className="flex items-center flex-wrap">
          <div className="leading-5 font-medium text-gray-900">
            {title}
          </div>
        </div>
      </td>
      <td className={colpadding}>
        <div className="leading-5 text-gray-900">{year}</div>
      </td>
      <td className={colpadding}>
        <NominateButton
          fromSlider={fromSlider}
          nominated={nominated}
          onClick={onBtnClick}
        />
      </td>
    </tr>
  );
}