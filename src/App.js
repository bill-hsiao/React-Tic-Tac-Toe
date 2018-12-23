import React, { Component } from 'react';
import Board from './containers/Board';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     moves: null
  //   }
  // }

//   handleClick = squareName => {
//   this.setState(move(this.state, squareName));
// };

  render() {
    return (
      <div className="component-app">
        <Board />
      </div>
    );
  }
}

export default App;
