import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/flights">Flights</Link> | <Link to="/searchflights">Search Flights</Link> | <Link to="/airplanes">Airplanes</Link>
        </div>
        <h1><span role="img" aria-label="fire"> 🔥</span>Burning Airlines</h1>
      </div>

    );
  }
}

export default Navigation;
