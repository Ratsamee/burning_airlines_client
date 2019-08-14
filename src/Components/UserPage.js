import React, {Component} from 'react';

class UserPage extends Component {
  render(){
    return(
      <h2>User Page</h2>
      <UserSignUp />
      <UserLogIn />
      <UserList />
    )
  }
}

class UserSignUp extends Component {
  render() {
    return(
      <h3>UserSignUp form coming soon</h3>
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

class UserList extends Component {
  render() {
    return(
      <h3>UserSignUp form coming soon</h3>
    );
  }
}



export default UserPage;
