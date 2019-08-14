import React from 'react';

import Airplane from './Airplane';
import FlightPage from './FlightPage';
import UserPage from './UserPage'


function App() {
  return (
    <div className="App">
      <FlightPage />
      <UserPage />
      <Airplane />
    </div>
  );
}

export default App;
