import React from "react";

const ButtonChange = () => {
  const [toggle, setToggle] = React.useState(true);
  const flipTheToggle = () => {
    return setToggle(!toggle);
  };

  //T operator allowed inside the return jsx
  return (
    <div>
      {toggle ? (
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            laudantium maxime laboriosam sint possimus, nulla labore voluptate
            excepturi cupiditate unde odit blanditiis repellendus eius, ab earum
            quis consequuntur aspernatur! Ut.
          </p>
          <button onClick={flipTheToggle}>Switch</button>
        </div>
      ) : (
        <div>
          <p>This is false </p>
          <button onClick={flipTheToggle}>Switch</button>
        </div>
      )}
    </div>
  );
};

export default ButtonChange;
