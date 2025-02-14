import { useEffect, useState } from "react";

export function Users() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      if (result?.users) {
        setUsersList(result?.users);
      } else {
        setUsersList([]);
      }
    } catch (error) {
      console.log(error.message());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  if (loading) return <h1>loading please wait</h1>;
  return (
    <div>
      <h1>All users list</h1>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem?.id}>{userItem?.firstName}</li>
          ))
        ) : (
          <h1>No user found</h1>
        )}
      </ul>
    </div>
  );
}
