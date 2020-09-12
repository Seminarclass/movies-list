import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import SearchField from '../components/SearchField';
import Slider from '../components/Slider';
import Table from '../components/Table';

import { Movies } from '../utils/constants';

/*
 * TODO:
 * 1) share nominations via url
 * 2) deploy online on Netlify
 */

export default function AppPage() {
  const { addToast } = useToasts();

  // slider and nomination list states
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const [nominations, setNominations] = useState<Array<Movies>>([]);

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
    </div>
  );
}
