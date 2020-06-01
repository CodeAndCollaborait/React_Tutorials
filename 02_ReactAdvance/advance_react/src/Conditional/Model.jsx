import React from "react";

const Model = (props) => {
  if (!props.show) {
    return null;
  }
  return <h3>This is Model Component </h3>;
};

export default Model;
