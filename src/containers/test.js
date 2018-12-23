import React from "react";
class Haha extends React.Component {
  state = {
    text: "100"
  };
  componentDidMount() {
    var text = this.refs.haha.innerText;
    console.log(text);
  }
  render() {
    return (
      <p className="Blend" ref="haha">
        {this.state.text}
      </p>
    );
  }
}
export default Haha;

import React from "react";
import { render } from "react-dom";
import Haha from "./Haha";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Haha name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
