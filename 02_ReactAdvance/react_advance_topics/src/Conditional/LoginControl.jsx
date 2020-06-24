import React from "react";

// Component to display a greeting to the user
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>You are logged in!</h1>;
  }
  return <h1>Please log in.</h1>;
}

// Component to display login button and setup click handler
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

// Component to display logout button and setup click handler
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// Parent component that will contain the child components above (as appropriate)
export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    // conditionally display *either* the login or logout button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    // render the appropriate greeting and button
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
