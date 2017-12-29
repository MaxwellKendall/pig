import React from 'react';
import firebase from 'firebase';
import { FirebaseAuth } from 'react-firebaseui';

const Login = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  return (
    <div className="container__login">
      <h2>Login</h2>
      <p>Log in with Facebook or Google!</p>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Login;
