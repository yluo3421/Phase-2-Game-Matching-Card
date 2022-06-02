import React, {useState, useEffect} from "react";
import Card from './Card'
import End from "./End";

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
  const [moves, setMoves]=useState(0)
  const [showEnd, setShowEnd]=useState(false)
  const [restart, setRestart]=useState(false)
  const [isDisabled, setIsDisabled]=useState(false)


  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      setTiles(shuffleCards(data))
      
    });
  }, [restart])

  function handleClick(tile){
    clickOne?setClickTwo(tile):setClickOne(tile)
    setMoves((moves)=>moves+1)
  }

  useEffect(()=>{
    if (clickOne && clickTwo){
      setIsDisabled(true)
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
    setIsDisabled(false)
  }

  useEffect(()=>{
    checkComplete()}, [isMatched])

  function checkComplete(){
    if (isMatched.length===1){
      setShowEnd(!showEnd)
    }
  }

  function restartGame(){
    setClickOne(null)
    setClickTwo(null)
    setIsMatched([])
    setMoves(0)
    setShowEnd(!showEnd)
    setRestart(!restart)

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
              isDisabled={isDisabled}
            />})
          }
      </div>
      <div className="moves">Moves: {moves}</div>
      {showEnd?<End moves={moves} restartGame={restartGame}/>:null}
    </div>
  )
}

export default Game;