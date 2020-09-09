import React from 'react';
import { faCode, faFilm } from '@fortawesome/free-solid-svg-icons';

import NavIcon from './NavIcon';

export default function NavBar() {
  return (
    <nav className="bg-columbia">
      <div className="max-w-screen-xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <NavIcon
              link="#"
              icon={faFilm}
            />
            <p className="ml-2 font-medium truncate text-dark">
              The Shoppies
            </p>
          </span>
          <div className="flex items-center">
            <NavIcon
              link="https://github.com/michaelihwang/shoppies"
              icon={faCode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}