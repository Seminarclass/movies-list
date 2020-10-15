import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import GlobalState from '../../hooks/useGlobalState';

export default function FixedFooter() {
  const { agreesToCookie, setAgreeToCookie } = GlobalState.useContainer();

  const handleAcceptCookie = () => { setAgreeToCookie(prev => !prev); };

  return (
    <div className={`fixed inset-x-0 bottom-0 ${agreesToCookie ? 'hidden' : ''}`}>
      <div className="bg-columbia">
        <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center">
            <span className="flex p-2 rounded shadow bg-white">
              <FontAwesomeIcon
                className="text-dark"
                icon={faExclamationTriangle}
                size="lg"
              />
            </span>
            <p className="mx-3 font-bold text-dark">
              This website uses cookies!
            </p>
          </div>
          <div className="flex items-center text-dark">
            <p className="flex text-xs my-3">
              This site uses cookies to save your film nominations that expire in
              24 hours. No other information is saved. By clicking 'Accept', you
              agree to the storing of cookies on your device.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <button
              className={`
                flex items-center justify-center
                px-4 py-2 border border-transparent rounded shadow
                text-sm leading-5 font-medium text-white
                bg-green-400 hover:bg-green-600 focus:outline-none
                transition ease-in-out duration-150
              `}
              onClick={handleAcceptCookie}
            >
              Accept and Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}