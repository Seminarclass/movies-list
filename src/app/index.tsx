import React, { useState } from 'react';
import axios from 'axios';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import SearchField from '../components/SearchField';

import { Movies } from '../utils/constants';

export default function AppPage() {
  const [nominations, setNominations] = useState<Array<Movies>>([]);
  const [searchResults, setSearchResults] = useState<Array<Movies>>([]);
  const [query, setQuery] = useState<string>('');

  const queryOMDB = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      if (response.status === 200 && response.data.Response === "True") {
        console.log(response.data.Search)
        setSearchResults(response.data.Search);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NavBar />
      <Layout>
        <Header />
        <SearchField
          placeholder="Search Movies"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onClick={() => { console.log(query) }}
          onSubmit={queryOMDB}
        />
      </Layout>
      <Footer />
    </>
  );
}
