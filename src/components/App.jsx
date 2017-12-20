import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';

export default class App extends Component {
  state = {
    user: null,
    authorized: false,
  }

  render() {
    return (
      <Router>
        <div className="container__main">
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
        </div>
      </Router>
    );
  }
}
