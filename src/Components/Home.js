import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(
      <div>
        <p><Link to="/users">Passengers</Link></p>
        <p><Link to="/flights">Flights</Link></p>
        <p><Link to="/searchflights">Search Flights</Link></p>
        <p><Link to="/airplanes">Airplane Fleet</Link></p>
        
      </div>

    )
  };
}
export default Home;
