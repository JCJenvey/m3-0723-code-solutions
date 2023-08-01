import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { username, password };
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameC">Username</label>
        <input
          type="text"
          id="usernameC"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="passwordC">Password</label>
        <input
          type="password"
          id="passwordC"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </>
  );
}
