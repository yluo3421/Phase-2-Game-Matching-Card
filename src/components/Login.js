import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login() {
  const history=useHistory();
  const [name, setName] = useState("");

  function handleSubmit(e) {  
    e.preventDefault()
    fetch("http://localhost:3002/leader", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        moves:0
      }),
    })
    history.push("/Game")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <input 
        type="text" 
        name="username" 
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}


export default Login;