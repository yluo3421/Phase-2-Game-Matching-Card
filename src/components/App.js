import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LeaderBoard from "./LeaderBorad";
import NavBar from "./NavBar";

function App(){
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Login">
                    <Login />
                </Route>
                <Route exact path="/Home">
                    <Home />
                </Route>
                <Route exact path="/LeaderBoard">
                    <LeaderBoard />
                </Route>
            </Switch>
        </div>

    )
}

export default App;