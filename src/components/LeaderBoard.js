import React, {useEffect, useState} from "react";

function LeaderBoard() {
  const [leader, setLeader]=useState([])

  useEffect(()=>
  {
      fetch('http://localhost:3002/leader')
      .then(response => response.json())
      .then(data => {
        data.sort(function(a, b) {
          return a.moves - b.moves;
        })
        let firstTen = data.slice(0,10)
        let filterTen=firstTen.filter((player) => player.moves != 9999) 
          setLeader(filterTen)
        })
    }, [])

  
  
  
  return (
    <div>
       <h1 id="leaderBoard">LEADERBOARD</h1>
       <ol>
       {leader.map((person)=>{

         return (
            <li key={person.id}>Username: {person.name}   Moves: {person.moves}</li>
         )
       })}
       </ol>

     </div>
     )
}

export default LeaderBoard;