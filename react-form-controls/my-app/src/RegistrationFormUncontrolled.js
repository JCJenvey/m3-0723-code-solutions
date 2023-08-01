export default function RegistrationFormUncontrolled() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameU">Username</label>
        <input type="text" id="usernameU" name="username" />
        <label htmlFor="passwordU">Password</label>
        <input type="password" id="passwordU" name="password" />
        <button>Sign Up</button>
      </form>
    </>
  );
}
