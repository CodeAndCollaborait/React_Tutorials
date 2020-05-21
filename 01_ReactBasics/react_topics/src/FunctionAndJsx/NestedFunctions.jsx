import React from "react";

const NestedFunctions = () => {
  return (
    <div>
      <HeadLine></HeadLine>
      <p>{getNames()}</p>
    </div>
  );
};

const HeadLine = () => {
  const heading = "Hello Nested Functions";
  return <h1>{heading}</h1>;
};

//Call function which is not react function.
const getNames = () => {
  return "REACT Names";
};


export default NestedFunctions;