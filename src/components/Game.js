import React, {useState, useEffect} from "react";
import Card from './Card'


function Game() {

  const [tiles, setTiles]=useState([])
  const [flippedTile, setFlippedTile]=useState([])
  // const [isFlipped, setIsFlipped]=useState(false)
  const emptyState = [];
  

  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      setTiles(shuffleCards(data.concat(data)))
      
    });
  }, [])


  // function handleFlippedCounter(){
  //     setFlippedCounter((flippedCounter)=>flippedCounter+1)
  // }
  // console.log(flippedCounter)

  // this method create random array of cards to be used

  function handleClick(id){

    setFlippedTile((flippedTile)=>[...flippedTile, id])
    // console.log(flippedTile)

    if (flippedTile.length===2){
      if (flippedTile[0]===flippedTile[1]){
        console.log('yyaayy')

      }
      
      setFlippedTile([id])
      console.log(flippedTile + "on changeing to empty")
      
    }
    
  }
  



  

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

  // let randomCards = shuffleCards(tiles.concat(tiles))
  //console.log(randomCards);

  // function handleTileClick() {
  //     setIsFlipped(!isFlipped)
  //     handleFlippedCounter()
  // }


  
  return (
    <div className="gamePage">
      <h1>Play Card Matching Game!</h1>
      <div className='container'>
          {tiles.map((tile, index)=>{
            return <Card 
              key={index} 
              tile={tile}
              index={index}
              onClick={handleClick}
              // handleFlippedCounter={handleFlippedCounter}
              // isFlipped={isFlipped}
            />})
          }
      </div>
    </div>
  )
}

export default Game;