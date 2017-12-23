import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBH43Z6vYmLV6dqr0-1INMeXkmIWrSCqFQ',
  authDomain: 'p-i-g-a454a.firebaseapp.com',
  databaseURL: 'https://p-i-g-a454a.firebaseio.com',
  projectId: 'p-i-g-a454a',
  storageBucket: 'p-i-g-a454a.appspot.com',
  messagingSenderId: '562938081603',
});

const db = firebase.firestore(app);
const rebase = Rebase.createClass(db);

const firestore = {
  db,
  rebase,
};

export default firestore;
