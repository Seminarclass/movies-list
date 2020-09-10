import React from 'react';

import Icon from '../../images/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center">
      <img
        className="h-64"
        src={Icon}
        alt="icon"
      />
      <p className="font-light text-gray-400">
        Search to nominate films
      </p>
    </header>
  );
}