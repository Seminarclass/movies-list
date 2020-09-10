import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import axios from 'axios';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import SearchField from '../components/SearchField';
import Table from '../components/Table';

import { Movies } from '../utils/constants';

/*
 * TODO:
 * 1) NominateButton to toggle b/w nominated and not nominated
 * 2) NavBar dropdown list to see list of nominated movies
 * 3) dropdown list with numbers if > 0
 * 4) share nominations via url
 * 5) deploy online
 */

export default function AppPage() {
  const { addToast } = useToasts();

  const [nominations, setNominations] = useState<Array<Movies>>([]);
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

  return (
    <div className="font-open">
      <NavBar />
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
          <Table searched={searchResults} nominated={nominations} />
        ) : null}
      </Layout>
      <Footer />
    </div>
  );
}
