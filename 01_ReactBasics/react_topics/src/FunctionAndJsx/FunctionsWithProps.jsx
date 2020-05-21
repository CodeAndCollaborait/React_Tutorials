import React from "react";

function FunctionsWithProps() {
  return (
    <div>
      <PassAnArg info="SomeInfo" name="SomeName"></PassAnArg>
      <WithOutProps info="WithOutProps" name="WithoutPropsNames" />
    </div>
  );
}

//with Props ....
function PassAnArg(props) {
  return (
    <div>
      <p>{props.info}</p>
      <p>{props.name}</p>
    </div>
  );
}

//without props
function WithOutProps({ info, name }) {
  return (
    <div>
      <p>{info}</p>
      <p>{name}</p>
    </div>
  );
}

export default FunctionsWithProps;
