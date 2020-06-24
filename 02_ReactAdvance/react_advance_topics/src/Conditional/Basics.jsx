import React from "react";

const Basics = (props) => {
  //Create State and change value based on event

  const [signIN] = React.useState("Sing In");
  const [signOUT] = React.useState("Sing Out");
  const [auth] = React.useState(props.value);
  if (auth) {
    return (
      <div>
        <h1>This is basics conditional rendering</h1>
        <h1>{signIN}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>This is basics conditional rendering</h1>
        <h1>{signOUT}</h1>
      </div>
    );
  }
};

export default Basics;
