import React, { Component } from 'react';
import axios from 'axios';

const Airplane_SERVER_URL = 'http://localhost:3000/Airplane.json'

class Airplane extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: []
    };
//      this.saveAirplane = this.saveAirplane.bind(this) // DOUBLE CHECK

      const fetchAirplanes = () => {
        axios.get(Airplane_SERVER_URL).then((results)=>{
        console.log(results.data);
        this.setState({Airplanes: results.data});
        setTimeout( fetchAirplanes, 850 ) // The Recursion
      });
    }

    fetchSecrets();
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

class AirplaneCreate extends Component { // we're doing all the interactions with the application in this class, this is a child.
  constructor(){
    super();
    this.state = {content: ''}; // we want the state of the content to be a string
//    this._handleSubmit = this.handleSubmit.bind(this); // DOUBLE CHECK
//    this._handleChange = this.handleSubmit.bind(this); // DOUBLE CHECK
  }

  _handleSubmit(event) { //This is the action of us sending the data
    event.preventDefault(); //we're stopping the page from refreshing
    this.props.onSubmit(this.stsate.content); // onsubmit, submit the content
    this.setState({content: ''}); // make sure its a string
  }

  _handleChange(event) { // This is the action of us storing the data
    this.setState({ content: event.target.value}); // this is the code we're using to retain this data
  }

  render() { // for us to view anything we must render
    return( // a must to see anything within render
      <form onSubmit={ this._handleSubmit }> //when the onsubmit is activated this._handleSubmit function will trigger
        <textarea onChange={ this.handleChange }  // onChanged activate _handleChange
        value={ this.state.content }></textarea> // DOUBLE CHECK
        <input type="submit" value="Tell" /> // DOUBLE CHECK
      </form>
    );
  }
}



export default Airplane;
