import React from "react";

//REVIEW
//React Conditional
const Basics = (props) => {
  const [greeting] = React.useState(props.greet);
  const [printName, setPrintName] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setPrintName(false);
    }, 3000);
  }, []);

 
  const flipTheSwitch = () => {
    setPrintName(!printName);
  };

  return (
    <div>
      {(greeting && <h1>Hello There!</h1>) || <h4>it's not good time</h4>}
      <div>
        {(printName && <h2>Conditional Using Use Effect</h2>) || (
          <h3>UseEffect is not true</h3>
        )}
        <button onClick={flipTheSwitch}>Flip Switch</button>
      </div>
    </div>
  );
};

export default Basics;
