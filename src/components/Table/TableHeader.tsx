import React from 'react';

interface TableHeaderProps {
  headers: Array<string>;
}

export default function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead>
      <tr>
        {headers.map((tableHeader, index) => (
          <th
            key={index}
            className="
              px-6 py-3
              bg-gray-50
              text-left text-xs leading-4 font-medium text-gray-500 uppercase
              tracking-wider
            "
          >
            {tableHeader}
          </th>
        ))}
      </tr>
    </thead>
  );
}