import React from "react";

function End({moves,restartGame}){
    return(
        <div id="myModal" class="modal">
            <div class="modal-content">
                <p>You Win!</p>
                <p>It took you {moves/2} guesses.</p>
                <button className="endButton" onClick={()=>restartGame()}>Play Again!</button> 
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <button className="endButton">Leaderboard</button>
                <p></p>
            </div>
        </div>
    )
}

export default End;