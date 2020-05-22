import React, { Component } from "react";

export default class SimpleClass extends Component {
  render() {
    return (
      <div>
        <h4>This is example of Stateless Class Component</h4>
        <button
          onClick={() => {
            return alert("This is Simple Class Component");
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
