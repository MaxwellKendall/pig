import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firestore from '../rebase';

/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
  static propTypes = {
    activeUser: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.addUserToUsers();
  }

  addUserToUsers = () => {
    const { activeUser } = this.props;
    const user = firestore.db.collection('Users').doc(activeUser.uid);
    user.get()
      .then((doc) => {
        if (doc.exists) {
          console.log('user already exists');
        } else {
          console.log('user doesnt exist');
          firestore.rebase.addToCollection('Users', activeUser.providerData[0], `${activeUser.uid}`)
            .then(() => {
              console.log('should be added');
            }).catch(() => {
              console.log('something went wrong updating DB');
            });
        }
      }).catch((err) => {
        console.log('fetching data error', err);
      });
  }

  render() {
    console.log(this.users);
    return (
      <div className="container__home">
        <p>This is the Home Page</p>
      </div>
    );
  }
}
