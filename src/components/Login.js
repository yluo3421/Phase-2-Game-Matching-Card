import React from "react";
import { useHistory } from "react-router-dom";


function Login() {
  const history=useHistory();
  function handleSubmit(e){  
    e.preventDefault()
    history.push("/Game")}
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}


export default Login;