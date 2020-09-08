import React from 'react';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import NavIcon from './NavIcon';

export default function NavBar() {
  return (
    <nav className="bg-columbia border-b border-dark">
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
              icon={faGithub}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}