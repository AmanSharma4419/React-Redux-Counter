import React from "react";

function Hoc(Hello) {
  class childOfHoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initialValue: "Hello Aman"
      };
    }
    render() {
      return <Hello name={this.state.initialValue} />;
    }
  }
  return childOfHoc;
}
export default Hoc;
