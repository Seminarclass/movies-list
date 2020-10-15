import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import CloseButton from './CloseButton';
import Table from '../Table'

import { Movies } from '../../utils/constants';

interface SliderProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nominations: Array<Movies>;
  removeNomination: (newItem: Movies) => void;
}

export default function Slider({ open, setOpen, nominations, removeNomination }: SliderProps) {
  return open ? (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={() => { setOpen(prev => !prev); }}
        />
        <section className="absolute inset-y-0 right-0 flex max-w-full pl-10">
          <div className="relative w-screen max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <div className="flex flex-col h-full py-6 space-y-6 overflow-y-scroll bg-white shadow-xl">
              <header className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="flex items-center text-lg font-extrabold leading-7 text-dark">
                    <span className="flex items-center justify-center w-5 h-5 text-xs text-center text-white bg-red-500 rounded-full ">
                      {nominations.length}
                    </span>
                    <span className="mx-4">
                      Nominated Film{nominations.length !== 1 ? 's' : ''}
                    </span>
                    <FontAwesomeIcon
                      className="text-yellow-200"
                      icon={faStar}
                      size="1x"
                    />
                  </h2>
                  <CloseButton onClick={() => { setOpen(prev => !prev); }} />
                </div>
              </header>
              <div className="relative flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">
                  {nominations.length > 0 ? (
                    <Table
                      slider
                      data={nominations}
                      nominations={nominations}
                      onBtnClick={removeNomination}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full font-light text-gray-400 ">
                      Search and nominate some films!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : null;
}