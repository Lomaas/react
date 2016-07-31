import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Home } from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PushTrip</h2>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
