import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import UserCard from './UserCard';
import './Users.css';

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    fetchUsers().then((json) => {
      setUsers(json);
      setIsLoading(false);
    });
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const statusCode = response.status;
      if (!response.ok) {
        throw new Error(statusCode);
      }
      const usersJSON = await response.json();
      return usersJSON;
    } catch (e) {
      setError(`Fetch failed with status code ${e}`);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <UserDetails userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

function UserList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
