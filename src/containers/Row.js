import React from 'react';
import Square from '../components/Square';

class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.state.squares.length % 3
    }
  }
  renderSquare(i) {
    return (
      <Square
        value={props.state.squares[this.state.value][i]}
        onClick={() => props.handleClick(i)}
      />
    );
  }
  render() {
    return (
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
    )
  }

}
export default Row;
