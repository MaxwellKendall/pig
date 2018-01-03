import React, { Component } from 'react';
import Link from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
export default class Scrubs extends Component {
  renderScrub = () => {
    const arr = ['Jeremy', 'Tyrone', 'Britt', 'Max'];
    return arr.map((el, index) => (
      <li key={index}>
        <Link to="/bla">{el}</Link>
      </li>
    ));
  };

  render() {
    const arr = ['Jeremy', 'Tyrone', 'Britt', 'Max'];
    return (
      <ul className="scrubs">
        {arr.map((el, index) => (
          <li key={index}>{el}</li>
        ))
        }
      </ul>
    );
  }
}

