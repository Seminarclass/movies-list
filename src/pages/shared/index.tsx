import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

import FixedFooter from '../../components/FixedFooter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';

import GlobalState from '../../hooks/useGlobalState';
import { getNominationList } from '../../services/firestore';

export default function SharedPage() {
  const { nominations, setNominations, setUserName } = GlobalState.useContainer();
  const { id } = useParams();
  const { addToast } = useToasts();

  // SHARABLE LINK
  useEffect(() => {
    if (id !== undefined) {
      getNominationList(id)
        .then(doc => {
          const res = doc.data();
          if (res !== undefined) {
            setNominations(res.nominations);
            setUserName(res.name)
          } else {
            addToast('Uh oh... Invalid URL!', { appearance: 'error' });
          }
        })
        .catch(err => {
          console.log('Error adding document:', err);
        });
    }
  }, [addToast, id, setNominations, setUserName]);

  return (
    <div className="font-open">
      <NavBar />
      <Layout>
        <Header />
        <br />
        <Table
          slider
          shared
          data={nominations}
        />
      </Layout>
      <Footer />
      <FixedFooter />
    </div>
  );
}
