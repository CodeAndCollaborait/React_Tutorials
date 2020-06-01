import React from "react";
import ReactDOM from "react-dom";
import MyCSS from "./app.module.css";
import UsersInfo from "./UsersInfo";
import UserForm from "./UserForm";
const App = () => {
  return (
    <div className="container">
      <h1 className={MyCSS.title}>Users Information</h1>
     
      {/* <Demo/> */}
      <UserForm />
      <UsersInfo />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
