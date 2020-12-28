import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import NotFound from "./containers/NotFound";
import Notes from "./containers/Notes";
import React from "react";
import Settings from "./containers/Settings";
import Signup from "./containers/Signup";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/notes/new">
                <NewNote />
            </Route>
            <Route exact path="/notes/:id">
                <Notes />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
