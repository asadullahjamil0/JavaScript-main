import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <>
        <h1>This is class Component</h1>
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
