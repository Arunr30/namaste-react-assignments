import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const NamedContext = () => {
  const { theme } = useContext(GlobalContext);
  console.log(theme);
  return (
    <h1 style={{ color: theme === "light" ? "red" : "blue" }}>Arunvasu</h1>
  );
};
export default NamedContext;
