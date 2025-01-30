import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function flagOp(getFlag) {
    return getFlag ? (
      <h1>hello world for flag true</h1>
    ) : (
      <h1>hello world for flag false</h1>
    );
    console.log(flagOp(true));
  }
  return <>{flagOp(false)}</>;
}

export default App;
