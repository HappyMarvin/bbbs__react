import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

function App() {
  const [isloggedIn, setIsloggedIn] = React.useState(true);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/profile">
          <Profile isloggedIn={isloggedIn} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
