import React, { Component } from "react";
import "./App.css";
import AboutProps from "./Components/AboutProps";
import DemoPorps from "./Components/DemoProps";

export class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            Class Component
            <ul>
              <li>this KeyWord</li>
              <li>state</li>
              <li>Props(Properties)</li>
              <li>lifecycle of class Component</li>
            </ul>
            <AboutProps name="React" appName="React App"></AboutProps>
          </li>
          <li>Functional Component</li>
        </ul>
       <DemoPorps></DemoPorps>

      </div>
    );
  }
}

export default App;
