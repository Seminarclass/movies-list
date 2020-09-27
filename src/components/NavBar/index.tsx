import React from 'react';
import { useToasts } from 'react-toast-notifications';

import AppIcon from './AppIcon';
import ShareButton from './ShareButton';
import HamburgerButton from './HamburgerButton';

import GlobalState from '../../hooks/useGlobalState';

interface NavBarProps {
  sliderOpen?: boolean;
  onSliderOpen?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NavBar({ sliderOpen, onSliderOpen }: NavBarProps) {
  const {
    cookie, removeCookie,
    nominations, setNominations,
    setUserName
  } = GlobalState.useContainer();
  const { addToast } = useToasts();

  const handleShareClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (nominations.length > 0 && onSliderOpen !== undefined) {
      onSliderOpen(event);
    } else {
      addToast('Nominate films to generate sharable link!', {
        appearance: 'error'
      });
    }
  }

  const handleGoHome = () => {
    setUserName('');
    setNominations(cookie.nominations !== undefined ? cookie.nominations : []);
  };

  const handleEditList = () => {
    setUserName('');
    removeCookie('nominations');
  };

  return (
    <nav className="fixed w-full bg-columbia z-40">
      <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <AppIcon
            logo
            onClick={handleGoHome}
            text="The Nominator"
          />
          <div className="flex">
            {sliderOpen !== undefined && onSliderOpen !== undefined ? (
              <>
                <ShareButton
                  className="mr-4"
                  onClick={handleShareClick}
                />
                <HamburgerButton
                  numItems={nominations.length}
                  open={sliderOpen}
                  onClick={onSliderOpen}
                />
              </>
            ) : (
              <AppIcon
                text="Edit List"
                onClick={handleEditList}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}