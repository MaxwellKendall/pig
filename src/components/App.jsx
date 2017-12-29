import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import firebase from 'firebase';

import PrivateRoute from '../components/PrivateRoute';
import Login from '../components/Login';
import Home from '../components/Home';
import Header from '../components/Header';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  state = {
    loading: true,
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading && <h1>Loading...</h1>}
        {!loading &&
          <Router>
            <div className="container__main">
              <Header activeUser={firebase.auth().currentUser} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute path="/" component={Home} activeUser={firebase.auth().currentUser} />
            </div>
          </Router>
        }
      </div>
    );
  }
}
