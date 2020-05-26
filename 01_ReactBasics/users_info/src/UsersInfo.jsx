import React, { Component } from "react";
import axios from "axios";

class UsersInfo extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  fetchUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ users: response.data });
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetchUser();
    }, 3000);
  }

  render() {
    return (
      <div>
        <h3>No of Users: {this.state.users.length}</h3>
        <ul>
          {/* When return html please use () and not {} */}
          {this.state.users.map((item) => {
            return (
              <li key={item.id}>
                {item.id} {item.name} {item.phone}
                {item.address.street}
                {item.company.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UsersInfo;
