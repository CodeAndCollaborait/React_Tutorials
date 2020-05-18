import React, { Component } from "react";

export class DemoProps extends Component {
  /**
   * 1. Switch called displayInfo;
   * 2. Only if user click the button, information should be display
   * 3. if user click another button , information must be hide in the page.
   */
  constructor() {
    super();
    this.state = {
      displayInfo: false,
    };
  }

  //function that will reverse the value of displayInfo
  toggleInfo = () => {
    this.setState({ displayInfo: !this.state.displayInfo });
  };

  render() {
    return (
      <div>
        <h1>This is Info Page.</h1>

        {/* variable = (true)? true: false */}
        {this.state.displayInfo ? (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              reiciendis perferendis fugit totam nemo, minima laboriosam, magni
              nisi officiis praesentium dicta eum voluptatibus earum possimus
              inventore ullam alias doloribus libero.
            </p>
            <button onClick={this.toggleInfo}>Show Less Information</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleInfo}>Show Information</button>
          </div>
        )}
      </div>
    );
  }
}

export default DemoProps;
