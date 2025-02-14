import { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const Button = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      change theme
    </button>
  );
};

export default Button;
