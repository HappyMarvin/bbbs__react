import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/calendar" component={Calendar}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
