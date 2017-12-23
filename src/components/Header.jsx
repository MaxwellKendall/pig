import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

import firestore from '../rebase';

export default class Header extends Component {
  state = {
    activeUser: null,
    users: [],
  }

  componentWillMount() {
    this.syncState();
  }

  componentDidMount() {
    this.checkAuth();
  }

  syncState = () => {
    this.ref = firestore.rebase.bindCollection('Users', {
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
    });
    // this.updateFireStore();
  }

  // updateFireStore = () => {
  //   const { activeUser, users } = this.state;
  //   console.log('updateFireStore', 'users: ', users, 'activeUser: ', activeUser);
  //   if (users.indexOf(activeUser.uid) === -1) {
  //     firestore.rebase.addToCollection('Users', { uid: activeUser.uid });
  //   }
  // }

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
        {activeUser ? (
          <p>{`${activeUser.displayName}`}</p>
        ) : [
          <p key="1">Log in with Facebook or Google!</p>,
          <FirebaseAuth key="2" uiConfig={uiConfig} firebaseAuth={firebase.auth()} />,
        ]}
      </div>
    );
  }
}
