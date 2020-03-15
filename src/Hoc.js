import React from "react";

function Hoc(Hello) {
  class childOfHoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initialValue: "Hello Aman"
      };
    }
    stateChanger = () => {
      this.setState({ ...this.state, initialValue: "hello Sharma" });
    };
    render() {
      return (
        <Hello name={this.state.initialValue} method={this.stateChanger} />
      );
    }
  }
  return childOfHoc;
}
export default Hoc;
