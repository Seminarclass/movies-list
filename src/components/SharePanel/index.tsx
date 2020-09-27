import React from 'react';
import { useToasts } from 'react-toast-notifications';
import copy from 'copy-to-clipboard';

import CopyButton from './CopyButton';
import InputField from '../../components/InputField';
import ShareButton from './ShareButton';
import SharableTextField from './SharableTextField';

import GlobalState from '../../hooks/useGlobalState';
import { setNominationList } from '../../services/firestore';

export default function SharePanel() {
  const {
    nominations,
    userName, setUserName,
    sharableURL, setSharableURL
  } = GlobalState.useContainer();
  const { addToast } = useToasts();

  const generateSharableLink = () => {
    if (userName === '') {
      addToast('Username is reqired!', { appearance: 'error' });
      return;
    }

    setNominationList(userName, nominations)
      .then(res => {
        setSharableURL(res.id);
        addToast('Successfully generated URL!', { appearance: 'success' });
      }).catch(err => {
        addToast('Error generating URL!', { appearance: 'error' });
        console.log('Error adding document:', err);
      })
  };

  const copyToClipboard = () => {
    copy(`https://${window.location.hostname}/${sharableURL}`);
    addToast('Copied to Clipboard!', { appearance: 'success' });
  };

  return (
    <div className="py-2 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded border border-gray-400">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-dark">
            Share
          </h3>
          <div className="mt-4 max-w-xl text-sm leading-5 text-gray-400">
            <p>
              Enter your name and generate a sharable link!
            </p>
          </div>
          <div className="mt-4 md:flex md:items-center">
            {sharableURL ? (
              <div className="w-full">
                <SharableTextField generatedURL={sharableURL} />
              </div>
            ) : null}
            <span className={`
              mt-4 inline-flex md:mt-0 ${
              sharableURL ? 'md:ml-4' : ''
              } sm:w-auto`
            }>
              {sharableURL ? (
                <CopyButton onClick={copyToClipboard} />
              ) : (
                <>
                  <InputField
                    className="mr-4"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                  <ShareButton onClick={generateSharableLink} />
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}