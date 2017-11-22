import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// this.click.bind(this)

class Inc extends React.Component {
 constructor(props){
   super(props);
   this.state = {counter : 0}
   this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState({
      counter : this.state.counter + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.warosu.org/data/tg/img/0291/28/1388281435235.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Mewtwo Move Counter</h1>
        </header>
        <span>
            <button onClick={this.increment}>Mewtwo Fair {this.state.counter}</button>
        </span>
        <span>
            <button onClick={this.increment}>Mewtwo Nair {this.state.counter}</button>
        </span>
        <span>
            <button onClick={this.increment}>Mewtwo Shadow Ball {this.state.counter}</button>
        </span>
      </div>
    );
  }
};


export default Inc;
