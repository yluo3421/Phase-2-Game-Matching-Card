import React from "react";

function Card({tile, onClick, flipped, isDisabled}){

    function handleClick(){
        if(!isDisabled){
            onClick(tile)
    }
    }
    const backTile="https://raw.githubusercontent.com/FluffyStuff/riichi-mahjong-tiles/9e2eba21ca69d6cd5cdd9a309d5754ac9517c481/Regular/Front.svg"
    return (
    <div className="tile" >
        <div className={flipped ? "flipped" : ""}>
            <img 
                className="front" 
                alt="tile front" 
                src= {tile.image}
            /> 
            
            
            <img className="back" alt="tile back" src= {backTile} onClick={handleClick}/>
        </div>
    </div>
    )
}

export default Card