import React from 'react';
import { useHistory, useParams } from 'react-router';
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
  const history = useHistory();
  const {
    cookie, removeCookie,
    nominations, setNominations, setSharableURL, setUserName, setModifyingList
  } = GlobalState.useContainer();
  const { addToast } = useToasts();
  const { id } = useParams();

  const handleShareClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (nominations.length > 0 && onSliderOpen !== undefined) {
      onSliderOpen(event);
    } else {
      addToast('Nominate movies to generate sharable link!', {
        appearance: 'error'
      });
    }
  }

  const handleGoHome = () => {
    setUserName('');
    setNominations(cookie.nominations !== undefined ? cookie.nominations : []);
    setModifyingList(false);
    history.push('/');
  };

  const handleModifyList = () => {
    removeCookie('nominations');
    setSharableURL(id);
    setModifyingList(true);
  };

  const handleNewList = () => {
    setUserName('');
    setNominations([]);   // clear nominations from cookies for creating new list
    setModifyingList(false);
    history.push('/');
  };

  return (
    <nav className="fixed z-40 w-full bg-columbia">
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
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
              <>
                  <AppIcon
                    className="mr-4"
                    text="Modify"
                    onClick={handleModifyList}
                  />
                  <AppIcon
                    text="New"
                    onClick={handleNewList}
                  />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}