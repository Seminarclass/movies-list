import React, { useState } from 'react';

import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import SearchField from '../components/SearchField';

export default function AppPage() {
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);



  return (
    <>
      <NavBar />
      <Layout>
        <Logo />
        <SearchField
          placeholder="Search Movies"
          onSubmit={() => { }}
        />
      </Layout>
      <Footer />
    </>
  );
}
