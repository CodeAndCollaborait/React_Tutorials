import React, { Component } from "react";

export class AboutBinding extends Component {
  constructor() {
    super();
    this.state = {};
    // this.sayHello = this.sayHello.bind(this);
  }

  sayHello = () => {
    alert("Hello New User!!!");
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <h4>{this.props.id}</h4>
        <button onClick={this.sayHello}>Alert</button>
      </div>
    );
  }
}

export default AboutBinding;
