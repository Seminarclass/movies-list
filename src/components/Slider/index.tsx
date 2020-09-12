import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={() => { setOpen(prev => !prev); }}
        />
        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
              <header className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between space-x-3">
                  <h2 className="flex items-center text-lg leading-7 font-extrabold text-dark">
                    <span className="
                      flex items-center justify-center text-center
                      rounded-full
                      w-5 h-5
                      bg-red-500 text-white text-xs
                    ">
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
              {nominations.length > 0 ? (
                <Table
                  slider
                  data={nominations}
                  nominations={nominations}
                  onBtnClick={removeNomination}
                />
              ) : (
                  <div className="
                    flex items-center justify-center h-full
                    font-light text-gray-400
                  ">
                  Search and nominate some films!
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : null;
}