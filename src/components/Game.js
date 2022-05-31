import React, {useState, useEffect} from "react";
import Card from './Card'


function Game() {

  const [tiles, setTiles]=useState([])
  

  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      setTiles(data)
      
    });
  }, [])

  

  // this method create random array of cards to be used
  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  let randomCards = shuffleCards(tiles.concat(tiles))
  //console.log(randomCards);

  function handleTileClick() {

  }
  
  return (
    <div className="gamePage">
      <h1>Play Card Matching Game!</h1>
      <div className='container'>
          {randomCards.map((tile, index)=>{
            return <Card 
              key={index} 
              tile={tile}
              index={index}
              onClick={handleTileClick}
            />})
          }
      </div>
    </div>
  )
}

export default Game;