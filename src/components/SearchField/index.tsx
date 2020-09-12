import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchFieldProps {
  placeholder?: string;
  value: string | number | readonly string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchField({
  placeholder = 'Search',
  onChange,
  onClick,
  onSubmit,
  value
}: SearchFieldProps) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="relative">
          <button
            className="
              absolute inset-y-0 left-0
              focus:outline-none
              p-3
              flex items-center
              border border-gray-400 bg-columbia rounded-tl rounded-bl
              hover:bg-opacity-75
              transition duration-300 ease-in-out
            "
            onClick={onClick}
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
          }}>
            <input
              id="search"
              className="
                block w-full
                pl-12 pr-3 py-2
                border border-gray-400 rounded shadow
                leading-5 bg-white
                focus:outline-none
                sm:text-sm text-dark
                transition duration-150 ease-in-out
              "
              placeholder={placeholder}
              type="search"
              value={value}
              onChange={onChange}
            />
          </form>
          </div>
        </div>
      </div>
  );
}