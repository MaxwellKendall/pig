import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container__main">
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}
