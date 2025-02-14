import { useEffect, useState } from "react";
import { Users } from "./components/Users";
import ButtonContext from "./components/create-context/ButtonContext";
import NamedContext from "./components/create-context/NameContext";

function App() {
  // return <Users />;
  return (
    <>
      <ButtonContext />
      <NamedContext />
    </>
  );
}

export default App;
