import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firestore from '../rebase';

/* eslint-disable react/prefer-stateless-function */
export default class Header extends Component {
  static propTypes = {
    activeUser: PropTypes.object.isRequired,
  };

  static defaultProps = {
    activeUser: {},
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      
    });
  }

  render() {
    const { activeUser } = this.props;
    return (
      <div className="container__header">
        <h1>PIG</h1>
        <h1>{ activeUser && activeUser.displayName ? `Wassup ${activeUser.displayName}!!!!` : `Wassup!!!`}</h1>
        {activeUser && <button onClick={this.signOut}>Log Out</button>}
      </div>
    );
  }
}
