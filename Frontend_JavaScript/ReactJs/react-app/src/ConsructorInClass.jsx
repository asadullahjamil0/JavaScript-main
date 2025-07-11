import React, { Component } from "react";

class ConsructorInClass extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h1>This is Constructor in Class {this.props.name}</h1>
      </>
    );
  }
}

export default ConsructorInClass;
