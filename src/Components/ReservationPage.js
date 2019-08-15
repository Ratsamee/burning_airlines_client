import React, { Component } from 'react';
import axios from 'axios';

const FLIGHT_URL = 'https://group-project-airline.herokuapp.com/flights/:id.json'
class ReservationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flightId: 0,
        data: {}
    };
    const fetFlight = ()=>{
        const flight_Id = this.props.match.params.id;
        this.setState({flightId: flight_Id});
        const url = FLIGHT_URL.replace(":id", flight_Id);
        console.log(url);
        axios.get(url).then((result)=>{
            console.log(result.data);
            this.setState({data: result.data});
        });
    }

    fetFlight();
  }

  render() {
    return (
      <div>
          <h1>Virgin Airline</h1>
          <table>
              <tr>
                  <td>
                    <label>{(new Date(this.state.data.departure_date)).toLocaleDateString()}</label>
                  </td>
                  <td>
                    <label>{`Flight: ${this.state.data.flight_number}`}</label>
                  </td>
                  <td>
                    <label>{`${this.state.data.origin} > ${this.state.data.destination}`}</label>
                  </td>
              </tr>
              <tr>
                  <td></td>
                  <td>
                    <Seats data={this.state.data} />
                  </td>
                  <td></td>
              </tr>
          </table>
      </div>
    );
  }
}

export default ReservationPage;

class Seats extends Component {
  constructor() {
    super();
    
  }

  renderSeats(){
    const rows = Array(this.props.data.airplane.rows);
    const cols = this.props.data.airplane.columns;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

        }
        
    }
  }

  render() {
    return (
      <div>
          
      </div>
    );
  }
}

