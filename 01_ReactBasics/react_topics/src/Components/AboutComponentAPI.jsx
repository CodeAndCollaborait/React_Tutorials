import React, { Component } from "react";
import AboutState from "./AboutState";
import AboutForceUpdate from "./AboutForceUpdate";
import AboutFindNode from "./AboutFindNode";
export class AboutComponentAPI extends Component {
  render() {
    return (
      <div>
        <h2>React Component API functions</h2>
        <ul>
          <li>
            1. setState()
            <p>
              - setState() function will allow to modify the state values in
              runtime - setState does not immediately update the object, it will
              only update upon requested event. like onClick, onLoad or any html
              event.
            </p>
            <AboutState />
          </li>
          <li>
            2. forceUpdate()
            <p>
              {" "}
              - forceUpdate will allows us to update the component manually -
              not recommend to use unless it's required. - force entire HTML
              object to reload every time we call this function.
            </p>
            <AboutForceUpdate />
          </li>
          <li>
            3. findDOMNode()
            <p>
              We need to import ReactDOM class we can target specific html tag
              (node) and we can apply the action or event.
            </p>
            <AboutFindNode />
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutComponentAPI;
