import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const fbConfig = {};

const rrfConfig = {
  apiKey: 'AIzaSyD8HOjOj7VeNCKAtQPoCrjpEC8l0W0aMyM',
  authDomain: 'my-cargo-us.firebaseapp.com',
  projectId: 'my-cargo-us',
  storageBucket: 'my-cargo-us.appspot.com',
  messagingSenderId: '900162737404',
  appId: '1:900162737404:web:128404b4cc3e2dd2e7b379',
  measurementId: 'G-5LTGM6G78M'
};
const getFirebase = () => {
  if (typeof window !== 'undefined') return firebase.initializeApp(rrfConfig, 'marketplace');
  return null;
};

export { ReactReduxFirebaseProvider, fbConfig, firebaseReducer, getFirebase };
