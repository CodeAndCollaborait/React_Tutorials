import React from "react";

//REVIEW
//Using if-else and inline if-Else like ternary operator
const IFcondition = () => {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 2000);
  }, []);

  if (toggle) {
    return <div>{toggle ? <ListNumberOne /> : <SimpleText />}</div>;
  } else {
    return <SimpleText />;
  }
};

export default IFcondition;

const ListNumberOne = () => {
  return (
    <React.Fragment>
      <ul>
        <li>One List</li>
        <li>One Tag</li>
      </ul>
    </React.Fragment>
  );
};

const SimpleText = () => {
  return (
    <React.Fragment>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt
        optio obcaecati, quos eos consectetur dolore. Iste dolor libero
        assumenda voluptate ipsum dolorum officiis iusto voluptas
        necessitatibus. Vel, inventore consequuntur!
      </p>
    </React.Fragment>
  );
};
