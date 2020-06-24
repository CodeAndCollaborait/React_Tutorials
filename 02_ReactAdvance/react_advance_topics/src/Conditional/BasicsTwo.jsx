import React from "react";

const BasicsTwo = () => {
  const [printName, setPrintName] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setPrintName(true);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>This is Basics Two Component</h1>
      {(printName && <h1>This is True</h1>) || <h3>This is false</h3>}

      <button
        onClick={() => {
          setPrintName(!printName);
        }}
      >
        Switch
      </button>
    </div>
  );
};

export default BasicsTwo;
