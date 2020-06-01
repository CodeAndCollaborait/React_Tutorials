import React, { Component } from "react";
import faker from "faker";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    userName: "MJ",
    firstName: "Mary",
    lastName: "Jane",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        userName: faker.name.prefix(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      });
    }, 3000);
  }

  handleUserNameInput = (e) => {
    this.setState({ userName: e.target.value });
  };
  handleFirstNameInput = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameInput = (e) => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <div>
        <h3> The text fields will update in 3 seconds </h3>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={this.state.userName}
          placeholder="Your username"
        />
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          placeholder="Your firstName"
        />
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          placeholder="Your lastName"
        />

        <h4>User Names</h4>
        <ul>
          <li>{this.state.userName}</li>
          <li>{this.state.firstName}</li>
          <li>{this.state.lastName}</li>
        </ul>
      </div>
    );
  }
}

export default UserForm;
