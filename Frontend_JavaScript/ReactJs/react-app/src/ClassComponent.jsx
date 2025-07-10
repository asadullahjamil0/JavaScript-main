import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <>
        <h1>This is Class Component</h1>
        <h2>My name is {this.props.name}</h2>
        {this.props.children}
      </>
    );
  }
}

export function FunctionComponent() {
  return (
    <>
      <h1>This is function component</h1>
    </>
  );
}

export default ClassComponent;
