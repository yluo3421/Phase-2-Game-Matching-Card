import React, {useState, useEffect, useRef} from "react";
import Card from './Card'


function Game() {

  /* Below are original code that is commented for now
  const [tiles, setTiles]=useState([])
  const [flippedTile, setFlippedTile]=useState([])
  // const [isFlipped, setIsFlipped]=useState(false)

  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      setTiles(shuffleCards(data.concat(data)))
      
    });
  }, [])


  function handleClick(id){

    setFlippedTile((flippedTile)=>[...flippedTile, id])
    // console.log(flippedTile)

  }

  useEffect(() => {
    let timeout = null;
    if (flippedTile.length === 2) {
      //
      console.log("done")
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [flippedTile]);
  

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
  */

  const [tiles, setTiles]=useState([])
  const [cards, setCards] = useState(
    shuffleCards.bind(null, tiles.concat(tiles))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);
  // take tils as state so can be replaced with uniqueElementsArray
  

  // this method helps shuffle cards
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

  // fetch data from server
  useEffect(()=>
  {
    fetch('http://localhost:3001/mahjong')
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      setCards(shuffleCards(data.concat(data)))
      
    });
  }, [])
  //console.log(cards)
  

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === tiles.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].name === cards[second].name) {
      setClearedCards((prev) => ({ ...prev, [cards[first].name]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.name]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(tiles.concat(tiles)));
  };

  return (
    <div className="App">
      <header>
        <h3>Play the Flip card game</h3>
        <div>
          Select two cards with same content consequtively to make them vanish
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score:</span> {bestScore}
            </div>
          )}
        </div>
        {/* <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div> */}
      </footer>
      {/* <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}

export default Game;