import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchFieldProps {
  placeholder?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => void;
}

export default function SearchField({ placeholder = 'Search', onSubmit }: SearchFieldProps) {
  const [query, setQuery] = useState('');
  return (
    <div className="flex-1 flex items-center justify-center p-2">
      <div className="max-w-xl w-full">
        <div className="relative">
          <button
            className="
              absolute inset-y-0 left-0
              focus:outline-none
              p-3
              flex items-center
              border border-dark bg-columbia
            "
            onClick={e => {
              onSubmit(e);
              console.log(query);
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
              className="text-white"
            />
          </button>
          <form onSubmit={e => {
            e.preventDefault();
            onSubmit(e);
            console.log(query);
          }}>
            <input
              id="search"
              className="
                block w-full
                pl-12 pr-3 py-2
                border border-dark
                leading-5 bg-white
                focus:outline-none
                sm:text-sm text-dark
                transition duration-150 ease-in-out
              "
              placeholder={placeholder}
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </form>
          </div>
        </div>
      </div>
  );
}