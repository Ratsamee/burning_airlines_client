import React, { Component } from 'react';
import axios from 'axios';

const FLIGHT_URL = 'https://group-project-airline.herokuapp.com/flights/:id.json'
class ReservationPage extends Component {
  constructor() {
    super();
    this.state = {
        flightId: 0,
        data: {}
    };
    const fetFlight = ()=>{
        console.log(this.props.match.params);
        // const flight_Id = this.props.match.params.flight_id;
        // this.setState({flightId: flight_Id});
        // const url = FLIGHT_URL.replace(":id", flight_id);
        // console.log(url);
        // axios.get(url).then((result)=>{
        //     console.log(result.data);
        //     this.setState({data: result.data});
        // });
    }

    fetFlight();
  }

  render() {
    return (
      <div>
          <h1>Virgin Airline</h1>
          
      </div>
    );
  }
}

export default ReservationPage;

// class Seats extends Component {
//   constructor() {
//     super();
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <div>
          
//       </div>
//     );
//   }
// }

