import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

import FixedFooter from '../../components/FixedFooter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import SearchField from '../../components/SearchField';
import Slider from '../../components/Slider';
import Table from '../../components/Table';

import GlobalState from '../../hooks/useGlobalState';

import { Movies } from '../../utils/constants';

export default function AppPage() {
  const {
    setCookie, removeCookie, agreesToCookie, nominations, toggleNomination,
  } = GlobalState.useContainer();
  const { addToast } = useToasts();

  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Array<Movies>>([]);
  const [query, setQuery] = useState<string>('');

  // if agrees to cookies, save nominations
  useEffect(() => {
    if (agreesToCookie) {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setCookie('nominations', nominations, { expires: tomorrow });
    } else {
      removeCookie('nominations');
    }
  }, [agreesToCookie, nominations, setCookie, removeCookie]);

  // auto trim prefix whitespace
  useEffect(() => {
    setQuery(query.trimStart());
  }, [query]);

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

  return (
    <div className="font-open">
      <NavBar
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
          <Table data={searchResults} onBtnClick={toggleNomination} />
        ) : null}
        <Slider open={sliderOpen} setOpen={setSliderOpen} />
      </Layout>
      <Footer />
      <FixedFooter />
    </div>
  );
}
