import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div>
      <h1>Student Object Information</h1>
      <p>Name: {props.name} </p>
      <p>ID:{props.id} </p>
      <p>School Name: {props.schoolName}</p>
      <p>SomeObjectDetails:{props.details.grads} </p>
      <p>SomeArray: {props.someArray} </p>
      <div>SomeFunction: {props.myfunc()}</div>
    </div>
  );
};

export default Student;

Student.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  schoolName: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  someArray: PropTypes.array.isRequired,
  myfunc: PropTypes.func.isRequired,
};
