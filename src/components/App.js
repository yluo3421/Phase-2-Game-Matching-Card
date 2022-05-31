import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./Game";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import NavBar from "./NavBar";
import Home from "./Home"

function App(){
    return (
        <div>
            <Switch>
                <Route exact path="/Login">
                    <Login />
                </Route>
                <Route exact path="/Game">
                    <Game />
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

export default App;