import React from "react";
import Basics from "./Conditional/Basics";
import BasicsTwo from "./Conditional/BasicsTwo";
import ButtonChange from "./Conditional/ButtonChange";
import ReactList from "./CodeTest/ReactList";
import LoginControl from "./Conditional/LoginControl";

function App() {
  const [isAuth] = React.useState(true);

  return (
    <div className="App">
      <Basics value={isAuth} />
      <BasicsTwo />
      <ButtonChange />
      <ReactList />
      <LoginControl />
    </div>
  );
}

export default App;
