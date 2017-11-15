import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// this.click.bind(this)

class App extends Component {
  click(){
    alert("whaddup");

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.warosu.org/data/tg/img/0291/28/1388281435235.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Mewtwo Move Counter</h1>
        </header>
        <div>
            <button onClick={this.click}>Mewtwo Fair</button>
        </div>
      </div>
    );
  }
}


export default App;
