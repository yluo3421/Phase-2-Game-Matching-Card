import React from "react";
import { useHistory } from "react-router-dom";


function End({moves,restartGame}){
    const history=useHistory();

    function handleClick() {
        history.push("/LeaderBoard")
    }

    

    return(
        <div id="myModal" className="modal">
            <div className="modal-content">
                <p>You Win!</p>
                <p>It took you {moves/2} guesses.</p>
                <button className="endButton" onClick={()=>restartGame()}>Play Again!</button> 
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <button className="endButton" onClick={()=>handleClick()}>Leaderboard</button>
                <p></p>
            </div>
        </div>
    )
}

export default End;