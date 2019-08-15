import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Flights from './Components/FlightPage';
import Users from './Components/UserPage';
import FlightSearch from "./Components/FlightSearchPage";
import Airplanes from './Components/Airplane';
import Navigation from './Navigation';
import Footer from './Components/Footer';


// TO DO
// import Bookings
export const Routes = (
  <Router>
    <div>
      <Navigation/>
      <Route exact path="/" component={ Home } />
      <Route exact path="/flights" component={ Flights } />
      <Route exact path="/searchflights" component={ FlightSearch } />
      <Route exact path="/users" component={ Users } />
      <Route exact path="/airplanes" component= {Airplanes} />
      <Footer/>
    </div>
  </Router>
)

export default Routes;
