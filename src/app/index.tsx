import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

import FixedFooter from '../components/FixedFooter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import SearchField from '../components/SearchField';
import Slider from '../components/Slider';
import Table from '../components/Table';

import { Movies } from '../utils/constants';

/*
 * The Nominator Features:
 *  * Search OMDB (limited to top 10 queries) for films
 *  * Nominate your favorite films under the nomination list (via slider menu)
 *  * Badge (by Hamburger Menu) to show the total number of nominated films
 *  * Cookies to store session
 *  * Notifications for searching, adding, removing films
 *  * Sharable links
 * 
 * TODO:
 * 1) share nominations via url
 *   * click share button (can POST req if nomination > 0)
 *   * save to Firebase with some giberish
 *   * setup react router such that calling that route loads this nomination state
 *     priority: route-based state via Firebase, cookie, no cookie
 * 2) modal when clicking on titles from search table
 * 3) Add react-transition-group
 * 4) deploy online on Netlify
 */

export default function AppPage() {
  const { addToast } = useToasts();

  // agrees to cookie?
  const [cookie, setCookie, removeCookie] = useCookies(['nominations', 'agreesToCookie']);
  const [agreesToCookie, setAgreeToCookie] = useState<boolean>(cookie.agreesToCookie !== undefined ? cookie.agreesToCookie : false);
  useEffect(() => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCookie('agreesToCookie', true, { expires: tomorrow });
  }, [agreesToCookie, setCookie]);

  // slider and nomination list states
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const [nominations, setNominations] = useState<Array<Movies>>(cookie.nominations !== undefined ? cookie.nominations : []);
  useEffect(() => {
    if (agreesToCookie) {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setCookie('nominations', nominations, { expires: tomorrow });
    } else {
      removeCookie('nominations');
    }
  }, [agreesToCookie, nominations, setCookie, removeCookie]);

  // search results and query states
  const [searchResults, setSearchResults] = useState<Array<Movies>>([]);
  const [query, setQuery] = useState<string>('');

  const queryOMDB = async () => {
    if (query.length < 1) {
      addToast('Query empty!', { appearance: 'error' });
      return;
    }

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      if (response.data.Response === "True") {
        setSearchResults(response.data.Search);
        addToast(`Search returned ${response.data.Search.length} results!`, {
          appearance: 'success'
        });
      } else {
        addToast(response.data.Error, { appearance: 'error' });
      }
    } catch (e) {
      console.log(e);
    }
  };

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

  return (
    <div className="font-open">
      <NavBar
        numItems={nominations.length}
        sliderOpen={sliderOpen}
        onSliderOpen={() => setSliderOpen(open => !open)}
      />
      <Layout>
        <Header />
        <br />
        <SearchField
          placeholder="Search Movies"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onClick={queryOMDB}
          onSubmit={queryOMDB}
        />
        <br />
        {searchResults.length > 0 ? (
          <Table
            data={searchResults}
            nominations={nominations}
            onBtnClick={toggleNomination}
          />
        ) : null}
        <Slider
          open={sliderOpen}
          setOpen={setSliderOpen}
          nominations={nominations}
          removeNomination={toggleNomination}
        />
      </Layout>
      <Footer />
      <FixedFooter
        accepted={agreesToCookie}
        onAccept={() => { setAgreeToCookie(prev => !prev); }}
      />
    </div>
  );
}
