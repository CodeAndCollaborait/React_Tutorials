import React, { Component } from "react";
import PropTypes from "prop-types";

class Employee extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age} </p>
        <p>ID: {this.props.id}</p>
        <p>
          Details: {this.props.details.dept} : {this.props.details.salary}
        </p>
        <p>NumberArray: {this.props.numbers}</p>

        {this.props.numbers.map((num, index) => {
          return (
            <ul key={index}>
              <li>
                {index}: {num}
              </li>
            </ul>
          );
        })}
        <div>{this.props.numberArray}</div>
        <div>{this.props.getInfo()}</div>
        <div>{this.props.getList()}</div>
      </div>
    );
  }
}

Employee.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  id: PropTypes.number.isRequired,
  details: PropTypes.object.isRequired,
  numbers: PropTypes.array.isRequired,
  numberArray: PropTypes.arrayOf(PropTypes.number),
  getInfo: PropTypes.func,
  getList: PropTypes.func.isRequired
};

export default Employee;
