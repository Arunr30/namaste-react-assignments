import { createContext, useState } from "react";

// create a context
export const GlobalContext = createContext(null); // initial state value

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
