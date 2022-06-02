import React, {useState, useEffect} from "react";
import Card from './Card'
function shuffleCards(data) {
  const shuffledCards=[...data, ...data]
    .sort(()=>Math.random()- 0.5)
    .map((card)=>({...card, id: Math.random()}))
  return shuffledCards
}

function Game() {

  const [tiles, setTiles]=useState([])
  const [isMatched, setIsMatched] = useState([])
  const [clickOne, setClickOne]=useState(null)
  const [clickTwo, setClickTwo]=useState(null)


  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      setTiles(shuffleCards(data))
      
    });
  }, [])

  function handleClick(tile){
    clickOne?setClickTwo(tile):setClickOne(tile)
  }

  useEffect(()=>{
    if (clickOne && clickTwo){
      if (clickOne.name === clickTwo.name){
        resetClicks()
        setIsMatched((prev)=>[...prev,clickOne.name])
      }else {
        setTimeout(()=>resetClicks(),1000)
      }
    }
  }, [clickOne, clickTwo])

  function resetClicks(){
    setClickOne(null)
    setClickTwo(null)
  }

  useEffect(()=>{
    checkComplete()}, [isMatched])

  function checkComplete(){
    if (isMatched.length===18){
      console.log('win')
    }
  }

  return (
    <div className="gamePage">
      <h1>Play Card Matching Game!</h1>
      <div className='container'>
          {tiles.map((tile)=>{
            return <Card 
              key={tile.id} 
              tile={tile}
              onClick={handleClick}
              flipped={tile===clickOne||tile===clickTwo||isMatched.includes(tile.name)}
            />})
          }
      </div>
    </div>
  )
}

export default Game;