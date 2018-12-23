import React from 'react';
import './Square.css';
//
// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
//
//
//
// }
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
// (this.props.xo[this.props.name] === undefined ? '' :
// this.props.xo[this.props.name] === null ? '' :
//  this.props.xo[this.props.name] )


export default Square;
