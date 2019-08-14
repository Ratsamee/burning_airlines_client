import React, { Component } from 'react';
import axios from 'axios';

const AIRPLANE_SERVER_URL = 'http://localhost:3000/airplanes.json';
const FLIGHT_SERVER_URL = 'http://localhost:3000/flights.json';
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
            console.log('fetData',results.data);
            this.setState({flights: results.data});
        });
        setTimeout(this.fetchflights, 4000);
    };

    fetchflights();
  }

  saveFlight(flight){
      console.log(flight);
    axios.post(FLIGHT_SERVER_URL, flight).then((result)=>{
        this.setState({flights: [...this.state.flights, result.data]});
    })
  }

  render() {
    return (
        <div>
            <h1>Virgin Airline</h1>
            <FlightForm onSubmit={this.saveFlight} />
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
            airplane_id: ""
        };
        const loadAirplanes = () => {
            axios.get(AIRPLANE_SERVER_URL).then((result)=>{
                let airplanes = result.data.map((airplane, index)=>{
                    return <option value={airplane.id} key={airplane.id}>{airplane.name}</option>
                });
                this.setState({airplanes:airplanes});
                this.setState({airplane_id: result.data[0].id});
            })
        };
        loadAirplanes();

        this._handleOnChange = this._handleOnChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleOnChange(event){
        switch (event.target.name) {
            case "flight_number":
                this.setState({flightNumber:event.target.value});
                break;
            case "departure_date":
                this.setState({departureDate: event.target.value});
                break;
            case "origin":
                this.setState({origin: event.target.value});
                break;
            case "destination":
                this.setState({destination: event.target.value});
                break;
            case "airplane":
                this.setState({airplane_id: event.target.value});
                break;
            default:
                break;
        }
    }

    _handleSubmit(event){
        event.preventDefault();
        const data = {flight_number: this.state.flightNumber, departure_date: this.state.departureDate, origin: this.state.origin, destination: this.state.destination, airplane_id: this.state.airplane_id};
        this.props.onSubmit(data);
        this.setState({flightNumber: "", departureDate: "", origin: "", destination: ""});
    }

    render() {
      return (
        <form onSubmit={this._handleSubmit}>

            Flight Number: <input name="flight_number" type="text" placeholder="QF746" onChange={this._handleOnChange} value={this.state.flightNumber} required />
            Departure Date: <input name="departure_date" type="text" placeholder="DD/MM/YYYY" onChange={this._handleOnChange} value={this.state.departureDate} required />
            Origin: <input type="text" name="origin" placeholder="Origin" onChange={this._handleOnChange} value={this.state.origin} required />
            Destination: <input type="text" name="destination" placeholder="Destination" onChange={this._handleOnChange} value={this.state.destination} required />
            Plane: <select name="airplane" onChange={this._handleOnChange}>
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
export default FlightPage;
