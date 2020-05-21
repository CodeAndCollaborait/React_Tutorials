/**
 * 1. function component is simple function with return type as HTML
 * 2. we can extend class or any object in function
 * 3. function does not have render function..
 * 4. function does not have constructor and this keyword
 */

import React from "react";
import NestedFunctions from "./NestedFunctions";
import FunctionsWithProps from "./FunctionsWithProps";
// Hot to pass JS variable or function inside the react function
function IntroFunction() {
  const greet = "This is Function as Component";
  const someString = "This is String!";
  let bool = "true"; //will not print unless make as string
  let number = 12.99;
  let numbers = [11, 22, 33, 44];
  let undif = undefined; //will not print
  let user = {
    name: "Mike",
    id: 101,
  };
  return (
    <div>
      <h1>{greet}</h1>
      <p>{someString}</p>
      <p>{bool}</p>
      <p>{number}</p>
      <p>{numbers}</p>
      <p>{undif}</p>
      <p>
        {user.name} and {user.id}
      </p>
      <button style={{ color: "red", backgroundColor: "yellow" }}>
        Submit
      </button>
      <NestedFunctions />
      <FunctionsWithProps />
    </div>
  );
}

export default IntroFunction;
