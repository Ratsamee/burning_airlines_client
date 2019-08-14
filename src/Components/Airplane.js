import React, { Component } from 'react';
import axios from 'axios';

const Airplane_SERVER_URL = 'http://localhost:3000/flights.json'

class Airplane extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: []
    };
      // this.saveAirplane = this.saveAirplane.bind(this)

      const fetchAirplanes = () => {
        axios.get(Airplane_SERVER_URL).then((results)=>{
        console.log(results.data);
        this.setState({Airplanes: results.data});
        setTimeout( fetchAirplanes, 850 )
      });
    }
  };

  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <AirplaneCreate />
      </div>
    )
  }
}

class AirplaneCreate extends Components {
  constructor(){
    super();
    this.state = {content: ''};
    this._handleSubmit = this.handleSubmit.bind(this);
    this._handleChange = this.handleSubmit.bind(this);
  }

  _handleSubmit(event) { //This is the action of us sending the data
    event.preventDefault(); //we're stopping the page from refreshing
    this.props.onSubmit(this.state.content); // onsubmit, submit the content
    this.setState({content: ''}); // make sure its a string
  }

  _handleChange(event) { // This is the action of us storing the data
    this.setState({ content: event.target.value}); // this is the code we're using to retain this data
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this.handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
    );
  }
}



export default Airplane;
