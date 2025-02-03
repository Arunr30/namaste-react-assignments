import { useState, useEffect } from "react";

export const Index = () => {
  const [recipie, setRecipie] = useState([]);

  async function getRecipieInfo() {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipieInfo();
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
