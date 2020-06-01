import React from "react";

const ButtonChange = () => {
  const [toggle, setToggle] = React.useState(false);

  const flipToggle = () => {
    return setToggle(!toggle);
  };

  return (
    <div>
      {toggle ? (
        <div>
          <p onMouseEnter={flipToggle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, aut odit ut nemo magni repellendus laudantium
            temporibus modi, dolores eligendi esse cum exercitationem ipsam
            fugit nulla tempore hic qui cumque!
          </p>
          <button onClick={flipToggle}>ShowLess</button>
        </div>
      ) : (
        <div>
          <p onMouseLeave={flipToggle}>this is less Info</p>
          <button onClick={flipToggle}>show More</button>
        </div>
      )}
    </div>
  );
};

export default ButtonChange;
