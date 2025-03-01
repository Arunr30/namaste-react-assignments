import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducerFn(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, { count: 1 }); // step 1:

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    if (state.count === 0) return;
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
