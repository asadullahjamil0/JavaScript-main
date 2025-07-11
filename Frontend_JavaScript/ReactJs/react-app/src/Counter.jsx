import React, { Component } from "react";

export default class Counter extends Component {
  // How to declare a state without constructor and rest of the process is same
  //  this.state = {
  //       count: 0,
  //       name: "AsadUllah",
  //       age: this.props.age,
  //     };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "AsadUllah",
      age: this.props.age,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      name: (this.state.name = "Jamil"),
      age: (this.state.age = 34),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.increment}>
          Count: {this.state.count} name: {this.state.name} age:{" "}
          {this.state.age}
        </button>
      </>
    );
  }
}
