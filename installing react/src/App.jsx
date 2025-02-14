import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./components/class-component";
import { FunctionComponent } from "./components/functinal-component";
import Style from "./components/style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ClassComponent /> */}
      <FunctionComponent />
      <Style></Style>
    </>
  );
}

export default App;
