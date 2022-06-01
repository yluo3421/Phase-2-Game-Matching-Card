import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login() {
  const [name, setName] = useState("")

  const history=useHistory();
  function handleSubmit(e){  
    e.preventDefault()
    console.log(e.target)
    history.push("/Game")}
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <input type="text" name="username" placeholder="Username" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}


export default Login;