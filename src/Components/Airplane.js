import React, { Component } from 'react';
import axious from 'axious';

const FlightPage_SERVER_URL = 'http://localhost:3000/FlightPage.json';
const FLIGHT_SERVER_URL = 'http://localhost:3000/flights.json'

class Airplane extends component {
  constructor() {
    super();
    this.state = {
      airplanes: []
    };
      this.saveAirplane = this.saveAirplane.bind(this)

      const fetchAirplanes = () => {
        axios.get(Airplane_SERVER_URL).then((results)=>{
        console.log(results.data);
        this.setState({Airplanes: results.data});
        setTimeout( fetchAirplane, 850 )
      });
    }
  };

  render() {
    return (
      <div>
      <h1>Hello World</h1>
      </div>
    )
  }
}

export default Airplane;
