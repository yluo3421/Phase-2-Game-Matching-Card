import React from "react";

function Login() {
  return (
    <form>
      <h1>Login</h1>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}


export default Login;