import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div>
        <h2>Burning Airlines</h2>
        <p><Link to="/users">Users</Link></p>
        <p><Link to="/flights">Flights</Link></p>
        <p><Link to="/searchflights">Search Flights</Link></p>
        <p><Link to="/airplanes">Airplanes</Link></p>
      </div>
      
    )
  };
}
export default Home;
