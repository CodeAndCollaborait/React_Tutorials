import React, { Component } from "react";
import ReactDOM from "react-dom";

export class AboutFindNode extends Component {
  
  findDomNodeOne = () => {
    let div = document.getElementById("nodeOne");
    ReactDOM.findDOMNode(div).style.color = "red";
  };

  findDomNodeTwo = () => {
    let div = document.getElementById("nodeTwo");
    ReactDOM.findDOMNode(div).style.color = "blue";
  };

  render() {
    return (
      <div>
        <h3>React JS example of findDOMNode object</h3>
        <button onClick={this.findDomNodeOne}> DOM_Node 1</button>
        <button onClick={this.findDomNodeTwo}>DOM_Node 2</button>
        <h3 id="nodeOne">Node One</h3>
        <h3 id="nodeTwo">Node Two</h3>
      </div>
    );
  }
}

export default AboutFindNode;
