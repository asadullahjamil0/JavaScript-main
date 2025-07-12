import React, { Component } from "react";

class ClassComponentDesctructuring extends Component {
  constructor() {
    super();
    this.state = {
      model: "ClassComponent Destrcuturing in state",
      desc: "This is class component for destructuring in react",
    };
  }
  render() {
    const { model, desc } = this.state;
    return (
      <div>
        <h3>{model}</h3>
        <h3>{desc}</h3>
      </div>
    );
  }
}

export default ClassComponentDesctructuring;
