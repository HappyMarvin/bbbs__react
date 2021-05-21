import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </>
  );
}

export default App;
