import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

import firestore from '../rebase';

export default class Header extends Component {
  state = {
    activeUser: null,
    users: null,
  }

  componentWillMount() {
    this.syncState();
  }

  componentDidMount() {
    this.checkAuth();
  }

  syncState = () => {
    this.ref = firestore.rebase.syncDoc('Users/ids', {
      context: this,
      state: 'users',
    });
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(prevState => ({
          ...prevState,
          activeUser: user.providerData[0],
        }));
      } else {
        return false;
      }
      return true;
    });
  }

  updateFireStore = () => {
    const { activeUser, users } = this.state;
    if (users.ids.indexOf(activeUser.uid) === -1) {
      // adding to fire store if this is a new user
      this.setState(prevState => ({
        ...prevState,
        users: {
          ids: [...prevState.users.ids, activeUser.uid],
        },
      }));
    }
  }

  loginSuccess = (user) => {
    this.setState(prevState => ({
      ...prevState,
      activeUser: user.providerData[0],
    }), this.updateFireStore);
  }

  render() {
    const { activeUser } = this.state;
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: (user) => {
          this.loginSuccess(user);
        },
      },
    };
    return (
      <div className="container__header">
        <h1>PIG</h1>
        {activeUser.displayName ? (
          <p key="1">{`${activeUser.displayName}`}</p>
        ) : [
          <p>Log in with Facebook or Google!</p>,
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />,
        ]}
      </div>
    );
  }
}
