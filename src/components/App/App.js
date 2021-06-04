import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Calendar from "../Calendar/Calendar";
import Profile from "../Profile/Profile";
import Loader from "../Loader/Loader";

import { PROJECT_LINKS } from "../../utils/links";
import { TIME_DELAY } from "../../utils/constants";
import UserContext from "../../contexts/UserContext";
import Events from "../Events/Events";
import Questions from "../Questions/Questions";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState({ login: false });

  const handleCheckToken = () => {
    // TO DO: проверка, что пользователь залогинин
    // token храниться в localStorage или в cookie ???
    setIsLoading(true);
    // TO DO: запрос на сервер для проверки токена
    setTimeout(() => {
      // при положительном ответе от сервера
      handleGetUser();
      // при отрицательном ответе от сервера
      // setIsLoading(false);
    }, TIME_DELAY);
  };

  const handleGetUser = (token) => {
    // TO DO: запрос на сервер для получения данных пользователя по token
    setIsLoading(true);
    setTimeout(() => {
      // предполагаемый ответ сервера
      const res = {
        id: 1,
        user: 1,
        city: { id: 2, name: "Воронеж", isPrimary: false },
      };
      setUser({ ...user, ...res, login: true });
      setIsLoading(false);
    }, TIME_DELAY);
  };

  const handleChangeUserCity = (city, endLoading) => {
    // TO DO: запрос на сервер для смены города пользователя
    setTimeout(() => {
      setUser({ ...user, city });
      endLoading();
    }, TIME_DELAY);
  };

  const handleLogout = () => {
    // удалить token из localStorage или cookie
    setUser({ login: false });
  };

  React.useEffect(() => {
    handleCheckToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <UserContext.Provider
        value={{ ...user, handleChangeUserCity, handleLogout }}
      >
        {isLoading && <Loader />}
        <Header />
        <Switch>
          <Route exact path={PROJECT_LINKS.main.link}>
            <Main mix="app__content app__section" />
          </Route>
          <Route path={PROJECT_LINKS.about.link}>
            <About mix="app__content app__section" />
          </Route>
          <Route exact path={PROJECT_LINKS.calendar.link}>
            <Calendar mix="app__content" />
          </Route>
          <Route path={PROJECT_LINKS.events.link}>
            <Events mix="app__content app__section" />
          </Route>
          <Route path={PROJECT_LINKS.questions.link}>
            <Questions mix="app__content app__section" />
          </Route>
          <Route path="/profile">
            <Profile mix="app__content app__section" />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
