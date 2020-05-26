import React, { useState, useEffect } from "react";
import faker from "faker";

const FunctionWithStateTwo = () => {
  const [fullName, setFullName] = useState("Default Name");
  const [jobTitle, setJobTitle] = useState("TBD");
  const [jobArea, setJobArea] = useState("TBD");
  const [jobType, setJobType] = useState("TBD");

  const provideNames = () => {
    setFullName(faker.name.firstName() + " " + faker.name.lastName());
    setJobTitle(faker.name.jobTitle());
    setJobArea(faker.name.jobArea());
    setJobType(faker.name.jobType());
  };

  useEffect(() => {
    setTimeout(() => {
      provideNames();
    }, 3000);
  }, []);

  return (
    <div>
      <h3>User Information(Functional)</h3>
      <h4>User Full Name: {fullName}</h4>
      <h5>Job Title: {jobTitle}</h5>
      <h5>Job Area: {jobArea}</h5>
      <h5>Job Type: {jobType}</h5>
    </div>
  );
};

export default FunctionWithStateTwo;
