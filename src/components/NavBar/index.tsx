import React from 'react';
import { useToasts } from 'react-toast-notifications';

import AppIcon from './AppIcon';
import ShareButton from './ShareButton';
import HamburgerButton from './HamburgerButton';

interface NavBarProps {
  numItems: number;
  sliderOpen: boolean;
  onSliderOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NavBar({ numItems, sliderOpen, onSliderOpen }: NavBarProps) {
  const { addToast } = useToasts();
  
  const handleShareClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (numItems > 0) {
      onSliderOpen(event);
    } else {
      addToast('Nominate films to generate sharable link!', {
        appearance: 'error'
      });
    }
  }

  return (
    <nav className="fixed w-full bg-columbia z-40">
      <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <AppIcon link="/" />
          <div className="flex">
            <ShareButton
              className="mr-4"
              onClick={handleShareClick}
            />
            <HamburgerButton
              numItems={numItems}
              open={sliderOpen}
              onClick={onSliderOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}