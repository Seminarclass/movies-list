import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useToasts } from 'react-toast-notifications';
import { createContainer } from 'unstated-next';

import { Movies } from '../utils/constants';

function GlobalState() {
  const { addToast } = useToasts();

  const [cookie, setCookie, removeCookie] = useCookies(['nominations', 'agreesToCookie']);
  const [agreesToCookie, setAgreeToCookie] = useState<boolean>(
    cookie.agreesToCookie !== undefined ? cookie.agreesToCookie : false
  );
  const [nominations, setNominations] = useState<Array<Movies>>(
    cookie.nominations !== undefined ? cookie.nominations : []
  );
  const [userName, setUserName] = useState<string>('');
  const [sharableURL, setSharableURL] = useState<string>();

  // if user agrees to cookies
  useEffect(() => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCookie('agreesToCookie', true, { expires: tomorrow });
  }, [agreesToCookie, setCookie]);

  // URL FOR SHARING
  useEffect(() => {
    setSharableURL(undefined);
  }, [nominations]);


  const toggleNomination = (newItem: Movies) => {
    const isNominated = nominations.some(movie => movie.imdbID === newItem.imdbID);
    if (isNominated) {
      setNominations(nominations.filter(movie => movie.imdbID !== newItem.imdbID));
      addToast(`Removed "${newItem.Title}" from nomination!`, { appearance: 'error' });
    } else {
      setNominations(prevState => [...prevState, newItem]);
      addToast(`Added "${newItem.Title}" to nomination!`, { appearance: 'success' });
    }
  };

  return {
    // COOKIE AND AGREES TO COOKIE
    cookie, setCookie, removeCookie,
    agreesToCookie, setAgreeToCookie,

    // NOMINATIONS LIST FOR SHARING
    nominations, setNominations,
    toggleNomination,

    // USERNAME FOR SHARING
    userName, setUserName,

    // URL FOR SHARING
    sharableURL, setSharableURL
  };
}

export default createContainer(GlobalState);
