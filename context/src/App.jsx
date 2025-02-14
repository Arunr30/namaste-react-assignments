import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Name from "./context/Name";
import Button from "./context/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Name />
      <Button />
    </>
  );
}

export default App;
