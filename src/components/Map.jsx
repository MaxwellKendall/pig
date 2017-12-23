import React, { Component } from 'react';
import firebase from 'firebase';
import map from 'google-maps';

import key from '../secret';
import firestore from '../rebase';

export default class Map extends Component {
  state = {}

  componentDidMount() {
    const container = document.querySelector('.map__container');
    const options = {
      center: 'california',
      zoom: 13,
    };
    map.load((google) => {
      google.maps.Map(container, options);
    });
    // https://developers.google.com/maps/documentation/javascript/info-windows-to-db
  }

  render() {
    console.log(map);
    return (
      <div className="map__container">
      </div>
    );
  }
}
