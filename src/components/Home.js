import React from "react";
import { useHistory } from "react-router-dom";

function Home(){
    const history=useHistory();
    function handleClick(){
        history.push("/Login")}
    
    return (
        <div className="homepageBackground">
            <h1>Mahjong Matching Memory Game</h1>
            <h2>How To Play</h2>
            <ol >
                <li className="homepageLi">Login with your username</li>
                <li className="homepageLi">Click on the card to flip to the image</li>
                <li className="homepageLi">Match two identical cards</li>
                <li className="homepageLi">Game ends when all the cards are matched</li>
                <li className="homepageLi">Play another game!</li>
            </ol>
            <button 
                className="homepageButton" 
                type="button" 
                onClick={handleClick}
                
            >Let's PLay
            </button>

        </div>
    )
}

export default Home