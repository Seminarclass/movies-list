import React from 'react';

import AppIcon from './AppIcon';
import HamburgerButton from './HamburgerButton';

interface NavBarProps {
  numItems: number;
  sliderOpen: boolean;
  onSliderOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NavBar({ numItems, sliderOpen, onSliderOpen }: NavBarProps) {
  return (
    <nav className="fixed z-40 w-full bg-columbia">
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <AppIcon
            link="/"
          />
          <HamburgerButton
            numItems={numItems}
            open={sliderOpen}
            onClick={onSliderOpen}
          />
        </div>
      </div>
    </nav>
  );
}