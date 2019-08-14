import React, { Component } from 'react';
import axios from 'axios';

const Airplane_SERVER_URL = 'https://group-project-airline.herokuapp.com/airplanes.json'

class Airplane extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: []
    };
      this.saveAirplane = this.saveAirplane.bind(this) // DOUBLE CHECK

      const fetchAirplanes = () => {
        axios.get(Airplane_SERVER_URL).then((results)=>{
        console.log(results.data);
        this.setState({Airplanes: results.data});
        setTimeout( fetchAirplanes, 850 ) // The Recursion
      });
    }

fetchAirplanes();
  };

  saveAirplane(name, rows, columns) {
    axios.post(Airplane_SERVER_URL, { name: name, rows: rows, columns: columns}).then((result) => { // DOUBLECHECK
      console.log('aftersave', result);
      this.setState({airplanes: [...this.state.airplanes, result.data]});// DOUBLECHECK
    });
  }

  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <AirplaneCreate onSubmit={this.saveAirplane} />
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


    this._handleSubmit = this._handleSubmit.bind(this); // DOUBLE CHECK
    this._handleChange = this._handleChange.bind(this); // DOUBLE CHECK
  }

  _handleSubmit(event) { //This is the action of us sending the data
    event.preventDefault(); //we're stopping the page from refreshing
    this.props.onSubmit(this.state.name , this.state.columns, this.state.rows); // onsubmit, submit the name
    this.setState({name: '', rows: 0, colums: 0}); // make sure its a string and intergers
  }

  _handleChange(event) { // This is the action of us storing the data
    switch (event.target.name) {
      case "planeName":
      this.setState({ name: event.target.value});
      break;
      case "rows":
      this.setState({rows: event.target.value});
      break;
      case "cols":
      this.setState({columns: event.target.value});
      break;

    }


     // this is the code we're using to retain this data
  }

  render() { // for us to view anything we must render
    return( // a must to see anything within render
      <form onSubmit={ this._handleSubmit }>

        Name: <input type="text" name="planeName" onChange={ this._handleChange }  // onChanged activate _handleChange
        value={ this.state.name }></input>

        Row: <input type="number" name="rows" onChange={ this._handleChange }  // onChanged activate _handleChange
        value={ this.state.rows }></input>


        Column: <input type="number" name="cols" onChange={ this._handleChange }  // onChanged activate _handleChange
        value={ this.state.columns }></input>
        <input type="submit" value="Tell" />

      </form>
    );
  }
}



export default Airplane;
