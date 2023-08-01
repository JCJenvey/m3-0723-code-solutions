import { useState } from 'react';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  let passwordError = 'A password is required';
  let iconClass = 'fa-sharp fa-solid fa-xmark cross';

  if (password.length > 0) {
    passwordError = 'Your password is too short';
  }

  let errorClass = 'form-text error-text';

  if (password.length >= 8) {
    iconClass = 'fa-solid fa-check check';
    errorClass = 'form-text error-text hide';
  }
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              id="password"
              className="form-control border"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className={iconClass}></i>
          </div>
        </div>
        <div className={errorClass}>{passwordError}</div>
      </form>
    </>
  );
}
