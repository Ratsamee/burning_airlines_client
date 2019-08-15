import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>©2019 Burning Airlines | Proud sponsors of<span role="img" aria-label="fire"> 🔥</span>Festival</p>
      </div>

    );
  }
}

export default Footer;
