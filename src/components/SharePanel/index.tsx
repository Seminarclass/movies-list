import React from 'react';
import { useToasts } from 'react-toast-notifications';
import copy from 'copy-to-clipboard';

import CopyButton from './CopyButton';
import SaveButton from './SaveButton';
import InputField from '../../components/InputField';
import ShareButton from './ShareButton';
import SharableTextField from './SharableTextField';

import GlobalState from '../../hooks/useGlobalState';
import { setNominationList, updateNominationList } from '../../services/firestore';

export default function SharePanel() {
  const {
    nominations, touched,
    userName, setUserName,
    sharableURL, setSharableURL,
    modifyingList
  } = GlobalState.useContainer();
  const { addToast } = useToasts();

  const updateSharedList = () => {
    if (!touched) {
      addToast('No changes made!', { appearance: 'error' });
      return
    }

    if (sharableURL) {
      updateNominationList(sharableURL, userName, nominations).then(() => {
        addToast('Successfully updated watchlist!', { appearance: 'success' });
      }).catch(err => {
        addToast('Error updating watchlist!', { appearance: 'error' });
        console.log('Error updating document:', err);
      });
    }
  };

  const generateSharableLink = () => {
    if (userName === '') {
      addToast('Username is required!', { appearance: 'error' });
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
      <div className="bg-white border border-gray-400 rounded shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-dark">
            {modifyingList ? `Update ${userName}'s watchlist!` : 'Share'}
          </h3>
          <div className="max-w-xl mt-4 text-sm leading-5 text-gray-400">
            <p>
              {modifyingList ? `When you are done modifying, click the button below!` : sharableURL ? (
                'URL generated! Share this watchlist with your friends!'
              ) : 'Enter your name and generate a sharable link!'}
            </p>
          </div>
          <div className="mt-4">
            <div className="w-full">
              {sharableURL ? (
                <SharableTextField generatedURL={sharableURL} />
              ) : (
                <InputField
                  className="mr-4"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                />
              )}
            </div>
            <span className={`mt-4 inline-flex sm:w-auto`}>
              {sharableURL ? (
                <>
                  <CopyButton onClick={copyToClipboard} />
                  {modifyingList ? (
                    <SaveButton className="ml-2" onClick={updateSharedList} />
                  ) : null}
                </>
              ) : <ShareButton onClick={generateSharableLink} />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}