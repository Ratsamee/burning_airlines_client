import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Flights from './Components/FlightPage';
import Users from './Components/UserPage';
import FlightSearch from "./Components/FlightSearchPage";
import Airplanes from './Components/Airplane';
// TO DO
// import Bookings
export const Routes = (
  <Router>
    <div>
      //Flights page set as Home page ('/')
      <Route exact path="/" component={ Home } />
      <Route exact path="/flights" component={ Flights } />
      <Route exact path="/searchflights" component={ FlightSearch } />
      <Route exact path="/users" component={ Users } />
      <Route exact path="/airplanes" component= {Airplanes} />
      //Change airplanes to 'fleet'

      // TO DO
      // Route Bookings
    </div>
  </Router>
)

export default Routes;
