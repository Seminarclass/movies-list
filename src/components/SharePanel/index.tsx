import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';
import copy from 'copy-to-clipboard';

import CopyButton from './CopyButton';
import ShareButton from './ShareButton';
import SharableTextField from './SharableTextField';

import { setNominationList } from '../../services/firestore';
import { Movies } from '../../utils/constants';

interface SharePanelProps {
  nominations: Array<Movies>;
  stateModified: boolean;
}

export default function SharePanel({ nominations, stateModified }: SharePanelProps) {
  const { addToast } = useToasts();
  const { id } = useParams();
  const [sharableURL, setSharableURL] = useState<string>(id); // should be a global state

  const generateSharableLink = () => {
    setNominationList(nominations)
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

  const sharedLink = sharableURL !== undefined || !stateModified;
  return (
    <div className="py-2 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded border border-gray-400">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-dark">
            {sharedLink ? 'Shared Link' : 'Share'}
          </h3>
          <div className="mt-4 max-w-xl text-sm leading-5 text-gray-400">
            <p>
              {sharedLink ? 'Cool person shared this list!' : 'Generate sharable link!'}
            </p>
          </div>
          <div className="mt-4 md:flex md:items-center">
            {sharedLink ? (
              <div className="w-full">
                <SharableTextField generatedURL={sharableURL} />
              </div>
            ) : null}
            <span className={`mt-4 inline-flex rounded shadow md:mt-0 ${
              sharedLink ? 'md:ml-4' : ''
              } sm:w-auto`
            }>
              {sharedLink ? (
                <CopyButton onClick={copyToClipboard} />
              ) : (
                <ShareButton onClick={generateSharableLink} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}