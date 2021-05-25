import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "../../fonts/fonts.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "../About/About";
import Calendar from "../Calendar/Calendar";
import Profile from "../Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about">
          <About mix="app__content app__section" />
        </Route>
        <Route path="/profile">
          <Profile isloggedIn={true} />
        </Route>
        <Route exact path="/calendar" component={Calendar}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
