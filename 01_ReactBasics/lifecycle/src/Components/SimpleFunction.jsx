import React from "react";

function SimpleFunction() {
  return (
    <div>
      <h4>This is example of Stateless Function Component</h4>
      <button
        onClick={() => {
          return alert("This is stateless function");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default SimpleFunction;
