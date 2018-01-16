import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export default class PrivateRoute extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    activeUser: PropTypes.object,
  }

  static defaultProps = {
    activeUser: null,
  }

  render() {
    return (
      <Route
        exact
        path={this.props.path}
        render={(props) => {
          /* eslint-disable no-unused-expressions */
          const newProps = { ...props, activeUser: this.props.activeUser };
          return (
            this.props.activeUser !== null
              ? <this.props.component {...newProps} />
              : <Redirect to="/login" />
          );
        }}
      />
    );
  }
}
