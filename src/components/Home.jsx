import React, { Component } from 'react';

import base from '../rebase';

export default class Home extends Component {
  state = {
    scrubs: '',
    n00b: '',
  }

  componentDidMount() {
    this.ref = base.bindCollection('scrubs', {
      context: this,
      state: 'scrubs',
      withRefs: true,
    });
  }

  handleChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      n00b: event.target.value,
    }));
  }

  handleClick = () => {
    base.addToCollection('scrubs', {
      name: this.state.n00b,
    });
    this.setState(prevState => ({
      ...prevState,
      n00b: '',
    }));
  }

  render() {
    return (
      <div className="main">
        <h2>Scrubs</h2>
        {this.state.scrubs && this.state.scrubs
          .map(scrub => <h4>{scrub.name}</h4>)
        }
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.n00b}
        />
        <button onClick={this.handleClick}>Add Scrub</button>
      </div>
    );
  }
}
