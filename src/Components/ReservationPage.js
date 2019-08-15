import React, { Component } from 'react';
import axios from 'axios';

const FLIGHT_URL = 'http://localhost:3000/flights/:id.json'
class ReservationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flightId: 0,
        data: {}
    };
  }

  componentDidMount(){
    const flight_Id = this.props.match.params.id;
        this.setState({flightId: flight_Id});
        const url = FLIGHT_URL.replace(":id", flight_Id);
        console.log(url);
        axios.get(url).then((result)=>{
            console.log(result.data);
            this.setState({data: result.data});
        });
  }

  render() {
    return (
      <div>
          <h1>Virgin Airline</h1>
          <table>
              <tbody>
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
                      
                  </td>
                  <td></td>
              </tr>
              </tbody>
          </table>
          <Seats data={this.state.data}/>
      </div>
    );
  }
}

class Seats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ReservationPage;

