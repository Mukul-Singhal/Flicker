import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import Components

import JoinRoom from "./pages/JoinRoom/JoinRoom";
import HomePage from "./pages/HomePage/HomePage";
import Room from "./pages/Room/Room";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/join-room">
            <JoinRoom />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
