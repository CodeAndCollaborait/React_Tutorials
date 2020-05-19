import React, { Component } from "react";

export class AboutForceUpdate extends Component {
  forceUpdateState = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h3>Example of Force Update using Math function</h3>
        <h3>Random Number: {Math.random() + 1}</h3>
        <button onClick={this.forceUpdateState}>ForceUpdate</button>
      </div>
    );
  }
}

export default AboutForceUpdate;
