import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login({ setUser }) {
  const history=useHistory();
  const [name, setName] = useState("");
  const[error, setError] = useState(false)

  function handleSubmit(e) { 
    e.preventDefault()

    if (name!==""){
      fetch("http://localhost:3002/leader", {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:name,
          moves:9999
        }),
      })
      .then((r)=>r.json())
      .then((data)=>{
        //setLeaderId(data.id)
        setUser(data)
      })
      history.push("/Game")
  } 
  else{
    setError(!error)
  }
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
        className="username"
        />
      </div>
      <p>{error? 'Username is required!' : ''}</p>
      <input className="submitButton" type="submit" value="Submit" />
    </form>
  );
}


export default Login;