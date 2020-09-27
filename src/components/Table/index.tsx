import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import GlobalState from '../../hooks/useGlobalState';
import { Movies } from '../../utils/constants';

const headers = ['Title', 'Year'];

interface TableProps {
  shared?: boolean;
  slider?: boolean;
  data: Array<Movies>;
  onBtnClick?: (newItem: Movies) => void;
}

export default function Table({
  shared = false,
  slider = false,
  data,
  onBtnClick = () => { }
}: TableProps) {
  const { nominations } = GlobalState.useContainer();
  return (
    <div className="flex-1 flex flex-col">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className={`
          overflow-hidden border-gray-400
          border rounded shadow
        `}>
          <table className="min-w-full divide-y divide-gray-400">
            <TableHeader headers={shared ? headers : [...headers, 'Status']} />
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map(movie => (
                <TableRow
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  fromShared={shared}
                  fromSlider={slider}
                  nominated={nominations.some(nom => nom.imdbID === movie.imdbID)}
                  onBtnClick={() => onBtnClick(movie)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}