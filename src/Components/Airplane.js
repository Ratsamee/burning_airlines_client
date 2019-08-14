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

  //  fetchAirplanes(); // calling the above function
  };

  saveAirplane(plane) {
    axios.post(Airplane_SERVER_URL, { plane: plane}).then((result) => { // DOUBLECHECK
      this.setState({airplanes: [...this.state.airplane, result.data]});// DOUBLECHECK
    });
  }

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
    this.state = {name: '',
                  rows: 0,
                  columns: 0}; // we want the state of the name to be a string
//    this._handleSubmit = this.handleSubmit.bind(this); // DOUBLE CHECK
//    this._handleChange = this.handleSubmit.bind(this); // DOUBLE CHECK
  }

  _handleSubmit(event) { //This is the action of us sending the data
    event.preventDefault(); //we're stopping the page from refreshing
    this.props.onSubmit(this.state.name); // onsubmit, submit the name
    this.setState({name: ''}); // make sure its a string
  }

  _handleChange(event) { // This is the action of us storing the data
    this.setState({ name: event.target.value}); // this is the code we're using to retain this data
  }

  render() { // for us to view anything we must render
    return( // a must to see anything within render
      <form onSubmit={ this._handleSubmit }>

        Name: <input onChange={ this.handleChange }  // onChanged activate _handleChange
        value={ this.state.name }></input>

        Row: <input onChange={ this.handleChange }  // onChanged activate _handleChange
        value={ this.state.row }></input>


        Column: <input onChange={ this.handleChange }  // onChanged activate _handleChange
        value={ this.state.columns }></input>
        <input type="submit" value="Tell" />

      </form>
    );
  }
}



export default Airplane;
