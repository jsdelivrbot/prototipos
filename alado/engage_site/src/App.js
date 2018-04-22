import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit 
          <button className="ui active button"><i className="user icon"></i>Follow</button>
          and save to reload.
        </p>
        <div className="ui segment">
  <p></p>
  <div className="ui active dimmer">
    <div className="ui loader"></div>
  </div>
</div>
      </div>
    );
  }
}

export default App;
