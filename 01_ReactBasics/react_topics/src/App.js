import React, { Component } from "react";
import "./App.css";
import AboutProps from "./Components/AboutProps";
import DemoPorps from "./Components/DemoProps";
import AboutBinding from "./Components/AboutBinding";
import AboutComponentAPI from "./Components/AboutComponentAPI";
import AboutLifeCycle from "./LifeCycle/AboutLifeCycle";
import IntroFunction from "./FunctionAndJsx/IntroFunction";
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
            <DemoPorps></DemoPorps>
            <AboutBinding id="101" name="Mark Miller"></AboutBinding>
            <AboutProps name="React" appName="React App"></AboutProps>
            <AboutComponentAPI />
          </li>
          <li>Functional Component</li>
        </ul>

        <AboutLifeCycle></AboutLifeCycle>
        <IntroFunction />
      </div>
    );
  }
}

export default App;
