import React from "react";
import { useHistory } from "react-router-dom";

function Home(){
    const history=useHistory();
    function handleClick(){
        history.push("/Login")}
    
    return (
        <div>
            <h1>Matching Memory Game</h1>
            <h2>How To Play</h2>
            <ol>
                <li>Login with your username</li>
                <li>Click on the card to flip to the image</li>
                <li>Match two identical cards</li>
                <li>Game ends when all the cards are matched</li>
                <li>Play another game!</li>
            </ol>
            <button type="button" onClick={handleClick}>Let's PLay</button>

        </div>
    )
}

export default Home