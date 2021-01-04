import { Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import React from "react";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncLogin = asyncComponent(() => import("./containers/Login"));
const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
const AsyncSignup = asyncComponent(() => import("./containers/Signup"));
const AsyncNewNote = asyncComponent(() => import("./containers/NewNote"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ childProps }) => (
    <Switch>
        <Route path="/" exact component={AsyncHome} props={childProps} />
        <UnauthenticatedRoute path="/login" exact component={AsyncLogin} props={childProps} />
        <UnauthenticatedRoute path="/signup" exact component={AsyncSignup} props={childProps} />
        <AuthenticatedRoute path="/notes/new" exact component={AsyncNewNote} props={childProps} />
        <AuthenticatedRoute path="/notes/:id" exact component={AsyncNotes} props={childProps} />
        {/* Finally, catch all unmatched routes */}
        <Route component={AsyncNotFound} />
    </Switch>
);
