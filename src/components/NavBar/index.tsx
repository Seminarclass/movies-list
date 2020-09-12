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
    <nav className="fixed w-full bg-columbia z-40">
      <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
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