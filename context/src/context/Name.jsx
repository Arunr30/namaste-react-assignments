import { useContext } from "react";
import { GlobalContext } from "./GlobalState";
// consumer

const Name = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <h1 style={{ color: theme === "dark" ? "blue" : "purple" }}>hello, hii</h1>
  );
};

export default Name;
