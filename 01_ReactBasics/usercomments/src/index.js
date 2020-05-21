import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name={fullName()}></CommentDetail>
      <CommentDetail name={fullName()}></CommentDetail>
      <CommentDetail name={fullName()}></CommentDetail>
    </div>
  );
};

//function as an arguments
const fullName = ()=>{ 
  return faker.name.findName() + faker.name.lastName();
}

ReactDOM.render(<App />, document.getElementById("root"));
