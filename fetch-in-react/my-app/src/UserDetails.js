import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function UserDetails({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    fetchUserDetails(userId).then((json) => {
      setUser(json);
      setIsLoading(false);
    });
  }, [userId]);

  async function fetchUserDetails(userId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const statusCode = response.status;
      if (!response.ok) {
        throw new Error(statusCode);
      }
      const userJSON = await response.json();
      return userJSON;
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
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
