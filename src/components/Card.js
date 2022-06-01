import React, {useState} from "react";

function Card({tile, onClick}){
    const {id}=tile
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
        {isFlipped?<img alt="tile" src= {tile.image} onClick={handleClick}/>:
        <img alt="tile" src= {backTile} onClick={handleClick}/>}
    </div>
    )
}

export default Card