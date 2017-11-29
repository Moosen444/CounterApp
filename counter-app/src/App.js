import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// this.click.bind(this)

class Inc extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     counterFair : 0,
     counterNair : 0,
     counterShadowBall : 0,
     counterReset : 0,
   };
   this.incrementFair = this.incrementFair.bind(this);
   this.incrementNair = this.incrementNair.bind(this);
   this.incrementShadowBall = this.incrementShadowBall.bind(this);
   this.incrementReset = this.incrementReset.bind(this);
  }
  incrementFair(){
    this.setState(
      {//squiggle bracket could be an object(counter is a property of the object)
        counterFair : this.state.counterFair + 1,
      }
    );
  }
  incrementNair(){
    this.setState({
      counterNair : this.state.counterNair + 1,
    });
  }
  incrementShadowBall(){
    this.setState({
      counterShadowBall : this.state.counterShadowBall + 1,
    });
  }
  Reset(){
    this.setState({
      counterReset : this.state.counterReset = 0
    });
  }
//3 seperate functions and state.counters and 3 seprate properties
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://i.warosu.org/data/tg/img/0291/28/1388281435235.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Mewtwo Move Counter</h1>
        </header>
        <span>
            <button onClick={this.incrementFair}>Mewtwo Fair {this.state.counterFair}</button>
        </span>
        <span>
            <button onClick={this.incrementNair}>Mewtwo Nair {this.state.counterNair}</button>
        </span>
        <span>
            <button onClick={this.incrementShadowBall}>Mewtwo Shadow Ball {this.state.counterShadowBall}</button>
        </span>
        <div>
            <button onClick={this.Reset}>Reset {this.state.counterReset}</button>
        </div>
      </div>
    );
  }
};


export default Inc;
