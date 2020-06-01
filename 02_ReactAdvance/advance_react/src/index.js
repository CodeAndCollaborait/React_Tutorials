import React, { Component } from "react";
import ReactDOM from "react-dom";
import Employee from "./Components/Employee";
import Student from "./Components/Student";
import { firstName, lastName, address, deptName } from "./Components/Names";
import * as PersonNames from "./Components/Names";
import SomeName from "./Components/MultipleComp";
import Basics from "./Conditional/Basics";
import "./index.css";
import IFcondition from "./Conditional/IF_condition";
import Model from "./Conditional/Model";
import ButtonChange from "./Conditional/ButtonChange";

export default class App extends Component {
  someInfo = () => {
    return "This is Some Info ";
  };

  someList = () => {
    return (
      <div>
        <h4>This is someList function</h4>
      </div>
    );
  };

  render() {
    const obj = { dept: "IT", salary: 10000 };
    return (
      <div>
        <h1>This is React Advance Topics</h1>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{address}</h3>
        <h4>{deptName}</h4>
        <h4>{PersonNames.printName("Some user")}</h4>
        <SomeName />
        <h3>
          {PersonNames.firstName} {PersonNames.lastName} {PersonNames.address}
        </h3>
        <Employee
          name="true"
          age={20}
          id={209}
          details={obj}
          numbers={["Sam", "Mike", 55, 44]}
          numberArray={[55, 66, 77, 88]}
          getInfo={this.someInfo}
          getList={this.someList}
        />
        <Student
          name="StudentName"
          id={101}
          schoolName="MIT"
          details={{ grads: "A" }}
          someArray={[11, 22, 33, 44]}
          myfunc={this.someFunction}
        />
        <Basics greet={false} />
        <IFcondition />
        <Model show={"SomeText"} />
        <ButtonChange />
      </div>
    );
  }

  someFunction = () => {
    return <p>this is function as props value</p>;
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
