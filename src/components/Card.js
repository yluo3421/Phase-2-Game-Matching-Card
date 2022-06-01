/*
import React, {useState} from "react";

function Card({card, onClick}){
    const {id}=card
    const [isFlipped, setIsFlipped]=useState(false)
    
    function handleClick(){
        setIsFlipped(!isFlipped)
        onClick(id)
    }

    // function handleTileClick(){
    //     console.log(index)
    // }
    const backTile="https://raw.githubusercontent.com/FluffyStuff/riichi-mahjong-tiles/9e2eba21ca69d6cd5cdd9a309d5754ac9517c481/Regular/Front.svg"
    return (
    <div className="tile" >
        {isFlipped?<img alt="tile" src= {card.image} onClick={handleClick}/>:
        <img alt="tile" src= {backTile} onClick={handleClick}/>}
    </div>
    )
}

export default Card
*/

import React from "react";
import classnames from "classnames";
//import "./card.scss";


const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  const backTile="https://raw.githubusercontent.com/FluffyStuff/riichi-mahjong-tiles/9e2eba21ca69d6cd5cdd9a309d5754ac9517c481/Regular/Front.svg"
  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-back-face">
        <img src={card.image}  />
      </div>
      <div className="card-face card-front-face">
        <img src={backTile}  />
      </div>
    </div>
  );
};

export default Card;