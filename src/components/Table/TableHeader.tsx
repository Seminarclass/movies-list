import React from 'react';

interface TableHeaderProps {
  headers: Array<string>;
}

export default function TableHeader({ headers }: TableHeaderProps) {
  const colpadding = 'px-3 py-2 sm:px-6 sm:py-4';
  return (
    <thead>
      <tr>
        {headers.map((tableHeader, index) => (
          <th
            key={index}
            className={`
              ${colpadding}
              bg-gray-50
              text-left text-sm leading-4 font-medium text-gray-400 uppercase
              tracking-wider
            `}
          >
            {tableHeader}
          </th>
        ))}
      </tr>
    </thead>
  );
}