import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mewtwo Move Counter</h1>
        </header>
        <p className="App-intro">
          <code>An easy way to track usage of moves!</code>
        </p>
        <button>Forward Air</button>
      </div>
    );
  }
}



export default App;
