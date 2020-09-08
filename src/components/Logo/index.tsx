import React from 'react';

import Icon from '../../images/logo.png';

export default function Logo() {
  return (
    <header className="flex flex-col items-center justify-center">
      <img
        className="h-64"
        src={Icon}
        alt="icon"
      />
    </header>
  );
}