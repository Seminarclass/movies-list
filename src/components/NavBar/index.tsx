import React from 'react';
import { faCode, faFilm } from '@fortawesome/free-solid-svg-icons';

import NavIcon from './NavIcon';

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-columbia">
      <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <NavIcon
              link="#"
              icon={faFilm}
            />
            <p className="ml-2 font-medium truncate italic text-dark">
              The Nominator
            </p>
          </span>
          <div className="flex items-center">
            {/* share saved nominations */}
            {/* list of nominations here */}
            <NavIcon
              link="https://github.com/michaelihwang/nominator"
              icon={faCode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}