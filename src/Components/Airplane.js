import React, { Component } from 'react';
import axios from 'axios';

const Airplane_SERVER_URL = 'http://localhost:3000/airplanes.json'

class Airplane extends Component {
  constructor() {
    super();
    this.state = {
      airplane: []
    };
      this.saveAirplane = this.saveAirplane.bind(this) // DOUBLE CHECK

      const fetchPlanes = () => {
        axios.get(Airplane_SERVER_URL).then((results) => {
          this.setState({airplane: results.data});
          setTimeout( fetchPlanes, 2000 );
        })}
        fetchPlanes();
  };


  saveAirplane(name, rows, columns) {
    axios.post(Airplane_SERVER_URL, { name: name, rows: rows, columns: columns}).then((result) => { // DOUBLECHECK
      this.setState({airplane: result.data});// DOUBLECHECK
    });
  }

  render() {
    return (
      <div>
      <h2>Add Plane</h2>
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

        Seat Rows: <input type="number" name="rows" onChange={ this._handleChange }  // onChanged activate _handleChange
        value={ this.state.rows }></input>


        Seat Columns: <input type="number" name="cols" onChange={ this._handleChange }  // onChanged activate _handleChange
        value={ this.state.columns }></input>
        <input type="submit" value="Submit" />

      </form>
    );
  }
};



export default Airplane;
