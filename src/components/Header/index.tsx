import React from 'react';
import { useParams } from "react-router-dom";

import GlobalState from '../../hooks/useGlobalState';

import Icon from '../../images/logo.png';

export default function Header() {
  const { userName } = GlobalState.useContainer();
  const { id } = useParams();
  return (
    <header className="flex flex-col items-center justify-center text-gray-400">
      {id ? (
        <p className="text-xl mt-10">
          <b className="text-dark">{userName}</b> shared this movie list with you!
        </p>
      ) : (
          <>
            <img
              className="h-64"
              src={Icon}
              alt="icon"
            />
            <p>
              Search to nominate films
            </p>
          </>
      )}
    </header>
  );
}