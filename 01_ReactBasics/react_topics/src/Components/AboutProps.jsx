import React, { Component } from "react";

export class AboutProps extends Component {
  /**
   * In class component in react you must have
   * render function with return type is required.
   *
   * the value of the props are not mandatory
   *
   * In js Class
   * 1. keyword class
   * 2. constructor
   * 3. functions - static , instance(new)
   * 4. global and local variables
   * 5. static and instance can be public or private
   * 6. In class do not use keyword function
   */

  // If the user did not args

  static defaultProps = {
    name: "Default Name",
    appName: "Default AppName",
  };

  //before ES6..
  triggerAlert = () => {
    alert("Function with an alert");
  };

  render() {
    return (
      <div id="PropDiv">
        <h1>This is about Props</h1>
        <p>Props are an args of class or functions component</p>
        <h4>This is H4 tag {this.props.name}</h4>
        <h4>My Application name: {this.props.appName}</h4>
        {/* Using and Arrow Function */}
        <button onClick={this.triggerAlert}>Click for an alert</button>

        {/* Using bind function to call the local functions */}
        <button onClick={this.triggerAlert.bind(this)}>
          Alert With Binding
        </button>
      </div>
    );
  }
}

export default AboutProps;
