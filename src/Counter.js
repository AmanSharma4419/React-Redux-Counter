import React from "react";
import { createStore } from "redux";
import Hoc from "./Hoc";

function Rootreducer(state = { count: 0 }, action) {
  if (action.type === "Increment") {
    return { count: state.count + 1 };
  } else if (action.type === "Decrement") {
    return { count: state.count - 1 };
  } else if (action.type === "Reset") {
    return { count: (state.count = 0) };
  }
}

const Style = {
  color: "Green"
};

const store = createStore(Rootreducer);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({ ...this.setState, count: store.getState().count });
    });
    this.state = {
      count: 0
    };
  }

  increment = () => {
    store.dispatch({ type: "Increment" });
    console.log(this.props.name);
  };
  decrement = () => {
    store.dispatch({ type: "Decrement" });
  };
  Reset = () => {
    this.setState({ ...this.state, count: 0 });
  };
  render() {
    return (
      <React.Fragment>
        <h1 style={Style}>{this.state.count}</h1>
        <div className="card" style={{ width: "15rem" }}>
          <button onClick={this.increment} class="btn btn-primary">
            Increment
          </button>
          <button onClick={this.decrement} class="btn btn-secondary">
            Decrement
          </button>
          <button onClick={this.Reset} class="btn btn-success">
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Hoc(Counter);
