import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SideBar extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: '<div></div>',
  }

  state = {}

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}
