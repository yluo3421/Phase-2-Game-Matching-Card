import React, {useState, useEffect} from "react";
import Card from './Card'
import End from "./End";

function shuffleCards(data) {
  const shuffledCards=[...data, ...data]
    .sort(()=>Math.random()- 0.5)
    .map((card)=>({...card, id: Math.random()}))
  return shuffledCards
}

function Game({ user }) {

  const [tiles, setTiles] = useState([])
  const [isMatched, setIsMatched] = useState([])
  const [clickOne, setClickOne] = useState(null)
  const [clickTwo, setClickTwo] = useState(null)
  const [moves, setMoves] = useState(0)
  const [showEnd, setShowEnd] = useState(false)
  const [restart, setRestart] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [beginning, setBeginning] = useState(true)
  //const [level, setLevel] = useState({"Hard":30})

  useEffect(()=>{
    setTimeout(()=>setBeginning(!beginning), 3000)
  }, [restart])

  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      setTiles(shuffleCards(data))
      
    });
  }, [restart])
  // console.log(level["Hard"])
  // function handleLevel(e) {
  //   console.log(e.target.value)
  // }

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
        setTimeout(()=>resetClicks(),500)
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
    const winMoves=moves/2
    if (isMatched.length===5){
      setShowEnd(!showEnd)
      console.log("win moves before patch: " + winMoves)
      console.log("bestMovers on server" + user.moves)
      if(user.moves > winMoves) {
        fetch(`http://localhost:3002/leader/${user.id}`, {
          method:"PATCH",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            moves: winMoves
          }),
        })
        .then((r) => r.json())
        .then(console.log("after patching"))
      }
    }
  }

  function restartGame(){
    setClickOne(null)
    setClickTwo(null)
    setIsMatched([])
    setMoves(0)
    setShowEnd(!showEnd)
    setRestart(!restart)
    setBeginning(!beginning)
  }


  return (
    <div className="gamePage">
      <h1>Play Mahjong Matching Game!</h1>
      <div className="moves">
          <li>Username: {user.name}</li>
          <li>Moves: {Math.round(moves/2)}</li>
          <li>Don't refresh page or you will lose your scores</li>
          {/* <button onClick={handleLevel}>Easy</button>
          <button onClick={handleLevel}>Medium</button>
          <button onClick={handleLevel}>Hard</button> */}
      </div>
      <div className='container'>
          {tiles.map((tile)=>{
            return <Card 
              key={tile.id} 
              tile={tile}
              onClick={handleClick}
              flipped={beginning||tile===clickOne||tile===clickTwo||isMatched.includes(tile.name)}
              isDisabled={isDisabled}
            />})
          }
      </div>
      {showEnd?<End moves={moves} restartGame={restartGame}/>:null}
    </div>
  )
}

export default Game;