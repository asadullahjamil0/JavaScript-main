import React, { Component } from "react";

class ClassComponentDesctructuring extends Component {
  constructor() {
    super();
    this.state = {
      model: "ClassComponent Destrcuturing in state",
      desc: "This is class component for destructuring in react",
    };
  }

  changeContent = () => {
    alert("Content changed in class component!");
  };

  render() {
    const helloName = (name) => {
      alert("Hello " + name);
    };
    const { model, desc } = this.state;
    return (
      <div>
        <h3>{model}</h3>
        <h3>{desc}</h3>
        <button onClick={this.changeContent}>Click</button>
        <button
          onClick={() => {
            helloName("Jamil");
          }}
        >
          Print Name
        </button>
      </div>
    );
  }
}

export default ClassComponentDesctructuring;
