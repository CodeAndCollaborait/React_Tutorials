import React, { Component } from "react";

export class AboutState extends Component {
  // REVIEW
  /**
   * 1. state keyword in react ...
     2. state is always part of the const ...
     3. state is an object..(key and value.)
     4. state key value can only be update via setState function.
     5. state have local data that can be use while loading class component
   */

  constructor() {
    super();
    this.state = this.initialState;
  }

  initialState = {
    brand: "Tesla",
    model: "Model x",
    color: "Red",
  };

  changeTheModel = () => {
    this.setState({ model: "Model 3" });
  };

  changeTheColor = () => {
    this.setState({ color: "Blue" });
  };

  resetToState = () => {
    this.setState(this.initialState);
  };

  //render function that will always return single HTML Tag
  render() {
    return (
      <div>
        <h1>Car Brand is: {this.state.brand}</h1>
        <p>
          This Brand offers model such as {this.state.model} and color such as{" "}
          {this.state.color}
        </p>
        <button onClick={this.changeTheModel}>Change Model</button>
        <button
          style={{ background: "lightYellow" }}
          onClick={this.changeTheColor}
        >
          Change Color
        </button>
        <button onClick={this.resetToState}>Reset Model</button>
      </div>
    );
  }
}

export default AboutState;
