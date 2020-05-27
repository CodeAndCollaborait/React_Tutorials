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
    }, 1500);
  }

  render() {
    let card = {
      border: "5px solid green",
      listStyleType: "none",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      padding: "2px 16px",
      width: "255px",
      height: "200px",
    };
    return (
      <div>
        <h3>No of Users: {this.state.users.length}</h3>
        <div>
          {this.state.users.map((user) => {
            return (
              <ul key={user.id} style={card}>
                <li>Name: {user.name}</li>
                <li>UserName: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>PhoneNumber: {user.phone}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersInfo;
