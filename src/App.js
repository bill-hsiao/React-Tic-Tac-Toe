import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './TicTactoe/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="component-app">
        <Board clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
