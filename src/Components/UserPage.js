import React, {Component} from 'react';
import axios from 'axios';

const USER_SERVER_URL = 'http://localhost:3000/users.json';
class UserPage extends Component {
  constructor() {
    super();

  this.saveUser = this.saveUser.bind(this);
}
//CHECK THIS SECTION
  saveUser (user) {
    console.log(user);
    axios.post(USER_SERVER_URL, user).then(()=>{
      alert("submitted")
    });
  }
  render(){
    return(
      <div>
        <h2>User Page</h2>
        <UserSignUp onSubmit={ this.saveUser }/>
      </div>
    );
  }
}

class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this._handleFirstNameChange = this._handleFirstNameChange.bind(this);
    this._handleLastNameChange = this._handleLastNameChange.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handlePasswordConfirmationChange = this._handlePasswordConfirmationChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleFirstNameChange(event){
    this.setState( {firstName: event.target.value });
  }
  _handleLastNameChange(event){
    this.setState( {lastName: event.target.value });
  }
  _handleEmailChange(event){
    this.setState( {email: event.target.value });
  }
  _handlePasswordChange(event){
    this.setState( {password: event.target.value });
  }
  _handlePasswordConfirmationChange(event){
    this.setState( {passwordConfirmation: event.target.value });
  }

  _handleSubmit(event){
    event.preventDefault();
    const data = {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, isadmin: false, password: this.state.password };
    this.props.onSubmit( data );
    this.setState( {first_name: "", last_name: "", email: "", password: "" });
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        First Name: <input type="text" placeholder="First Name" onChange={this._handleFirstNameChange} value={this.state.firstName}/>
        Last Name: <input type="text" placeholder="Last Name" onChange={this._handleLastNameChange} value={this.state.lastName} />
        Email Address: <input type="email" placeholder="Email" onChange={this._handleEmailChange} value={this.state.email}/>
        Password: <input type="password" placeholder="Password" onChange={this._handlePasswordChange}  value={this.state.password}/>
        Password Confirmation: <input type="password" placeholder="Password Confirmation" onChange={this._handlePasswordConfirmationChange}  value={this.state.passwordConfirmation}/>
        <input type="button" value="Cancel"></input>
        <input type="submit" value="Save"></input>
      </form>
    );
  }
}










class UserLogIn extends Component {
  render() {
    return(
      <h3>UserLogIn form coming soon</h3>
    );
  }
}




export default UserPage;
