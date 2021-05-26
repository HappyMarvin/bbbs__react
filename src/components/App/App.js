import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Calendar from "../Calendar/Calendar";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About mix="app__content app__section" />
        </Route>
        <Route exact path="/calendar" component={Calendar}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
