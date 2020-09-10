import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import { Movies } from '../../utils/constants';

const headers = ['Title', 'Year', 'Status']

interface TableProps {
  searched: Array<Movies>;
  nominated: Array<Movies>;
}

export default function Table({ searched, nominated }: TableProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className=" overflow-hidden border border-dark">
          <table className="min-w-full divide-y divide-dark">
            <TableHeader headers={headers} />
            <tbody className="bg-white divide-y divide-gray-200">
              {searched.map((movie) => (
                <TableRow
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  nominated={true}
                  onBtnClick={() => { }}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}