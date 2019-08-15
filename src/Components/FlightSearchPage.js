import React, { Component } from 'react';
import axios from 'axios';

const FLIGHT_SERVER_URL = 'https://group-project-airline.herokuapp.com/flights.json';
class FlightSearchPage extends Component {
  constructor() {
    super();
    this.state = {
        flights: []
    };
    this.fetchSearchFlight = this.fetchSearchFlight.bind(this);
  }

  fetchSearchFlight(filter){
      axios.get(FLIGHT_SERVER_URL).then((response)=>{
          const data = response.data.filter((f)=>{
              return f.origin.toLowerCase() === filter.origin.toLowerCase() && f.destination.toLowerCase() === filter.destination.toLowerCase()
          });
          console.log(data);
          this.setState({flights: data});
      })
  }

  render() {
    return (
      <div>
          <h2>Flight Search</h2>
          <FlightSearchForm onSubmit={this.fetchSearchFlight} />
          <h2>Search Results</h2>
          <FlightList flights={this.state.flights} />
      </div>
    );
  }
}

class FlightSearchForm extends Component{
    constructor(){
        super();
        this.state = {
            origin: "",
            destination: ""
        };
        this._handleOnChange = this._handleOnChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleOnChange(event){
        switch (event.target.name) {
            case "origin":
                this.setState({origin: event.target.value});
                break;
            case "destination":
                this.setState({destination: event.target.value});
                break;
        }
    }

    _handleSubmit(event){
        event.preventDefault();
        let data = {origin: this.state.origin, destination:this.state.destination};
        this.props.onSubmit(data);
        this.setState({flightNumber: "", departureDate: "", origin: "", destination: ""});
    }

    render() {
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
              <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Origin:</label>
                                <input type="text" name="origin" placeholder="Origin" onChange={this._handleOnChange} value={this.state.origin}></input>
                            </td>
                            <td>
                                <label>Destination</label>
                                <input type="text" name="destination" placeholder="Destination" onChange={this._handleOnChange} value={this.state.destination}></input>
                            </td>
                            <td>
                                <input type="button" value="Cancel"></input>
                                <input type="submit" value="Search"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>

          </form>
        </div>
      )
    };
}

class FlightList extends Component{
    render() {
        return (
          <table>
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Flight</th>
                      <th>From > To</th>
                      <th>Plane</th>
                      <th>Seats</th>
                  </tr>
              </thead>
              {
                  this.props.flights.map((flight, index)=>
                  <tbody key={flight.id+1}>
                      <tr key={flight.id}>
                          <td key={index+1}>{(new Date(flight.departure_date)).toLocaleDateString()}</td>
                          <td key={index+2}>{flight.flight_number}</td>
                          <td key={index+3}>{`${flight.origin} > ${flight.destination}`}</td>
                          <td key={index+4}>{flight.airplane.name}</td>
                          <td key={index+5}>{(flight.airplane.rows * flight.airplane.columns).toString()}</td>
                      </tr>
                  </tbody>
                  )
              }
          </table>
        )
    };
}

export default FlightSearchPage;
