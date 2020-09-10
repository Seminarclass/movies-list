import React from 'react';

import NominateButton from './NominateButton';

interface TableRowProps {
  title: string;
  year: string;
  nominated: boolean;
  onBtnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function TableRow({ title, year, nominated, onBtnClick }: TableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center flex-wrap">
          <div className="text-sm leading-5 font-medium text-gray-900">
            {title}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm leading-5 text-gray-900">{year}</div>
      </td>
      <td className="px-6 py-4">
        <NominateButton nominated={nominated} onClick={onBtnClick} />
      </td>
    </tr>
  );
}