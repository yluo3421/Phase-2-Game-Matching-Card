import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./Game";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import Home from "./Home"

function App(){
    const [user, setUser]=useState({});
    //const [bestMovesServer, setBestMovesServer] = useState(0);
    
    return (
        <div>
            <Switch>
                <Route exact path="/Login">
                    <Login setUser={setUser} />
                </Route>
                <Route exact path="/Game">
                    <Game user={user} />
                </Route>
                <Route exact path="/LeaderBoard">
                    <LeaderBoard />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>

    )
}

// notes for future use
// make sure you install by: npm install -g concurrently
// to run multiple servers: concurrently "npm:watch-db" "npm:watch-leader" "npm:watch-whatever"
//
export default App;