import React from "react";

function Card({tile}){
    return (
    <div className="tile">
        <img alt="tile" src= {tile.image}/>
    </div>
    )
}

export default Card