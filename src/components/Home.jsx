import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

import checkAuth from '../utils';

import Header from './Header';
import Map from './Map';

import firestore from '../rebase';

export default class Home extends Component {
  render() {
    return (
      <div className="container__home">
        <p>This is the Home Page</p>
      </div>
    );
  }
}
