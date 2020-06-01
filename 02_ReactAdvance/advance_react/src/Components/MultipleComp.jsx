import React from "react";

const SomeName = () => {
  return (
    <div>
      <SomeNamePartOne></SomeNamePartOne>
      <SomeNamePartTwo></SomeNamePartTwo>
    </div>
  );
};

const SomeNamePartOne = () => {
  return (
    <div>
      <h3>This is form partOne</h3>
    </div>
  );
};

const SomeNamePartTwo = () => {
  return (
    <div>
      <h4>This is from part Tow</h4>
    </div>
  );
};

export default SomeName;
