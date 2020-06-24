import React, { Component } from "react";

export default class ReactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 101, name: "JS" },
        { id: 102, name: "JSX" },
        { id: 103, name: "CSS" },
        { id: 104, name: "HTML" },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.id} : {item.name}
              </li>
            );
          })}
        </ul>
        <ul>
          {this.state.list
            .filter((item) => item.name.indexOf("J"))
            .map((filterItem) => (
              <li key={filterItem.id}>
                {filterItem.name} : {filterItem.id}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
