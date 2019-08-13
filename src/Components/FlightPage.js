import React, { Component } from 'react';
import axios from 'axios';

const AIRPLANE_SERVER_URL = 'http://localhost:3000/airplanes.json';
const FLIGHT_SERVER_URL = 'http://localhost:3000/flights.json'
class FlightPage extends Component {
  constructor() {
    super();
    this.state = {
        flights: []
    };

    this.saveFlight = this.saveFlight.bind(this);

    // polling
    const fetchflights = () => {
        axios.get(FLIGHT_SERVER_URL).then((results)=>{
            console.log(results.data);
            this.setState({flights: results.data});
        });
        setTimeout(this.fetchflights, 4000);
    };

    fetchflights();
  }

  saveFlight(flight){
    axios.post(FLIGHT_SERVER_URL, flight).then((result)=>{
        this.setState({flights: [...this.state.flights, result.data]});
    })
  }

  render() {
    return (
        <div>
            <h1>Virgin Airline</h1>
            <FlightForm onSubmit={this.saveFlight} />
            {console.log(this.state.flights)}
            <FlightList flights={this.state.flights} />
        </div>
    );
  }
}

class FlightForm extends Component {
    constructor(){
        super();
        this.state = {
            airplanes: [],
            flightNumber: "",
            departureDate: "",
            origin: "",
            destination: "",
            plane: ""
        };
        const loadAirplanes = () => {
            axios.get(AIRPLANE_SERVER_URL).then((result)=>{
                let airplanes = result.data.map((airplane)=>{
                    return <option value={airplane.id} key={airplane.id}>{airplane.name}</option>
                });
                this.setState({airplanes:airplanes});
            })
        };
        loadAirplanes();

        this._handleFlightNumberOnChange = this._handleFlightNumberOnChange.bind(this);
        this._handleDepartureDateOnChange = this._handleDepartureDateOnChange.bind(this);
        this._handlerOriginOnChange = this._handlerOriginOnChange.bind(this);
        this._handlerDestinationOnChange = this._handlerDestinationOnChange.bind(this);
        this._handlerPlaneOnChange = this._handlerPlaneOnChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleFlightNumberOnChange(event) {
        this.setState({flightNumber:event.target.value});
    }

    _handleDepartureDateOnChange(event){
        this.setState({departureDate: event.target.value});
    }

    _handlerOriginOnChange(event){
        this.setState({origin: event.target.value});
    }

    _handlerDestinationOnChange(event){
        this.setState({destination: event.target.value});
    }

    _handlerPlaneOnChange(event){
        this.setState({plane: event.target.value});
    }

    _handleSubmit(event){
        event.preventDefault();
        const data = {flight_number: this.state.flightNumber, departure_date: this.state.departureDate, origin: this.state.origin, destination: this.state.destination, airplane_id: this.state.plane};
        this.props.onSubmit(data);
        this.setState({flightNumber: "", departureDate: "", origin: "", destination: ""});
    }
    
    render() {
      return (
        <form onSubmit={this._handleSubmit}>
            Flight Number: <input type="text" placeholder="QF746" onChange={this._handleFlightNumberOnChange} value={this.state.flightNumber} required />
            Departure Date: <input type="text" placeholder="DD/MM/YYYY" onChange={this._handleDepartureDateOnChange} value={this.state.departureDate} required />
            Origin: <input type="text" placeholder="Origin" onChange={this._handlerOriginOnChange} value={this.state.origin} required />
            Destination: <input type="text" placeholder="Destination" onChange={this._handlerDestinationOnChange} value={this.state.destination} required />
            Plane: <select onChange={this._handlerPlaneOnChange}>
                {this.state.airplanes}
            </select>
            <input type="button" value="Cancel"></input>
            <input type="submit" value="Save"></input>
        </form>
      )
    };
}

class FlightList extends Component{
    render() {
      return (
        <div>
            <div>
                <span>Date</span>
                <span>Flight</span>
                <span>From > To</span>
                <span>Plane</span>
                <span>Seats</span>
            </div>
            {
                this.props.flights.map((flight, index)=> 
                    <div key={flight.id}>
                        <span key={index+1}>{flight.departure_date}</span>
                        <span key={index+2}>{flight.flight_number}</span>
                        <span key={index+3}>{`${flight.origin} > ${flight.destination}`}</span>
                        <span key={index+4}>{flight.airplane_id}</span>
                        <span key={index+5}>0</span>
                    </div>
                )
            }
        </div>
      )
    };
}
export default FlightPage;
