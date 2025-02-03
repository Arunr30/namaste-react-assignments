import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Index } from "./components";

function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("only run page loads");
    console.log("count is changed");
  }, [count]);
  return (
    <>
      <Index />
    </>
  );
}

export default App;
