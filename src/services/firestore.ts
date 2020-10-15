import firebase from 'firebase/app';
import 'firebase/firestore';

import { Movies } from '../utils/constants';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
 * GET { nominations, name, created } from Firestore
 */
export const getNominationList = (sessionId: string) => {
  const db = firebase.firestore();
  const sessionsRef = db.collection('sessions');

  return sessionsRef.doc(sessionId).get();
};

/*
 * ADD { nominations, name, created } to Firestore
 * Use the return id as the sharable URL
 */
export const setNominationList = (userName: string, nominations: Array<Movies>) => {
  const db = firebase.firestore();
  const sessionsRef = db.collection('sessions');

  return sessionsRef.add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    name: userName,
    nominations: nominations
  });
};

export default firebase;