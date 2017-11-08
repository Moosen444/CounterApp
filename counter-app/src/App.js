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
        getInitialState: function(){
          return { count: 0 };
        },
        incrementFair: function() {}
        <span>
         <button onClick={() => {}}>
        Forward Air
        </button>
        </span>

        <span>
        <button>
        Nair
        </button>
        </span>

        <span>
        <button>
      Shadow Ball
        </button>
        </span>
      </div>
        );
      }
    }

    export default App;
