import React, {useState, useEffect} from "react";
import Card from './Card'


function Game() {
  const [tiles, setTiles]=useState([])
  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => setTiles(data));
  }, [])
  
  return (
    <div>
      <h1>Play Card Matching Game!</h1>
      <div className='container'>
          {tiles.map((tile)=>{
            return <Card key={tile.id} tile={tile}/>})
          }
      </div>
    </div>
  )
}

export default Game;