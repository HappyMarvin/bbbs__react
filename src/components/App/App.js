import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "../About/About";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
