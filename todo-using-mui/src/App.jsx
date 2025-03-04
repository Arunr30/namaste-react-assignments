import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getTodoList() {
    try {
      setLoading(true);
      const todoResult = await fetch("https://dummyjson.com/todos");
      const response = await todoResult.json();
      console.log(response);
      setTodo(response);
    } catch (e) {
      setError("error", e);
    }
  }
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <>
      <h1>todo app using mui</h1>
    </>
  );
}

export default App;
